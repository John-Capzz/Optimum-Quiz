require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const allQuestions = require("./questions");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] }
});

// ─── Config ────────────────────────────────────────────────────────────────────
const HOST_PASSWORD = process.env.HOST_PASSWORD || "optimum2024";
const PORT = process.env.PORT || 3001;
const QUESTION_TIME = 20;
const REVEAL_TIME = 5;
const COUNTDOWN_TIME = 3;

// ─── Game State ────────────────────────────────────────────────────────────────
// All in memory — survives reconnects, not server restarts (that's fine — host password protects identity)
let state = {
  phase: "lobby",       // lobby | countdown | question | reveal | finished
  players: {},          // { socketId: { name, score, streak, answers[] } }
  currentQuestion: null,
  questionIndex: -1,
  questionQueue: [],
  timer: 0,
  timerInterval: null,
  roundAnswers: {},     // { socketId: { optionIndex, timeMs } }
  questionStart: 0,
  hostSocketId: null,   // changes when host reconnects
};

// ─── Helpers ───────────────────────────────────────────────────────────────────
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function leaderboard() {
  return Object.entries(state.players)
    .map(([id, p]) => ({ id, name: p.name, score: p.score, streak: p.streak }))
    .sort((a, b) => b.score - a.score);
}

function scoreForAnswer(timeMs, isCorrect) {
  if (!isCorrect) return 0;
  const ratio = Math.max(0, 1 - timeMs / (QUESTION_TIME * 1000));
  return Math.round(300 + 700 * ratio);
}

// Broadcast to everyone — never exposes host identity
function broadcast(extra = {}) {
  io.emit("gameState", {
    phase: state.phase,
    players: Object.fromEntries(
      Object.entries(state.players).map(([id, p]) => [
        id, { name: p.name, score: p.score, streak: p.streak }
      ])
    ),
    questionIndex: state.questionIndex,
    totalQuestions: state.questionQueue.length,
    leaderboard: leaderboard(),
    ...extra
  });
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function startTimer(seconds, onTick, onDone) {
  stopTimer();
  state.timer = seconds;
  onTick?.(state.timer);
  state.timerInterval = setInterval(() => {
    state.timer--;
    onTick?.(state.timer);
    if (state.timer <= 0) { stopTimer(); onDone?.(); }
  }, 1000);
}

// ─── Game Flow ────────────────────────────────────────────────────────────────
function nextQuestion() {
  state.questionIndex++;
  if (state.questionIndex >= state.questionQueue.length) { endGame(); return; }

  const q = state.questionQueue[state.questionIndex];
  state.currentQuestion = q;
  state.roundAnswers = {};
  state.phase = "question";
  state.questionStart = Date.now();

  const safeQ = { id: q.id, category: q.category, question: q.question, options: q.options };
  broadcast({ question: safeQ });
  io.emit("question", safeQ);

  startTimer(QUESTION_TIME, (t) => io.emit("timer", t), revealAnswer);
}

function revealAnswer() {
  const q = state.currentQuestion;
  state.phase = "reveal";

  // Score all answers
  Object.entries(state.roundAnswers).forEach(([sid, ans]) => {
    if (!state.players[sid]) return;
    const correct = ans.optionIndex === q.answer;
    const pts = scoreForAnswer(ans.timeMs, correct);
    state.players[sid].score += pts;
    state.players[sid].streak = correct ? (state.players[sid].streak + 1) : 0;
    state.players[sid].answers.push({ questionId: q.id, correct, pts });
  });

  // Zero streak for non-answerers
  Object.keys(state.players).forEach(sid => {
    if (!state.roundAnswers[sid]) state.players[sid].streak = 0;
  });

  const results = Object.fromEntries(
    Object.entries(state.roundAnswers).map(([sid, ans]) => {
      const correct = ans.optionIndex === q.answer;
      return [sid, { optionIndex: ans.optionIndex, correct, pts: scoreForAnswer(ans.timeMs, correct) }];
    })
  );

  io.emit("reveal", { correctAnswer: q.answer, explanation: q.explanation, results, leaderboard: leaderboard() });
  broadcast({ question: { id: q.id, category: q.category, question: q.question, options: q.options } });

  startTimer(REVEAL_TIME, null, () => {
    if (state.questionIndex + 1 >= state.questionQueue.length) endGame();
    else nextQuestion();
  });
}

function endGame() {
  stopTimer();
  state.phase = "finished";
  io.emit("gameOver", { leaderboard: leaderboard() });
  broadcast();
}

function resetGame() {
  stopTimer();
  Object.values(state.players).forEach(p => { p.score = 0; p.streak = 0; p.answers = []; });
  state.phase = "lobby";
  state.currentQuestion = null;
  state.questionIndex = -1;
  state.questionQueue = [];
  state.roundAnswers = {};
  state.timer = 0;
  io.emit("gameReset");
  broadcast();
  // Re-notify host socket privately
  if (state.hostSocketId) {
    const hostSock = io.sockets.sockets.get(state.hostSocketId);
    if (hostSock) hostSock.emit("youAreHost");
  }
}

// ─── Socket Events ─────────────────────────────────────────────────────────────
io.on("connection", (socket) => {
  console.log(`[+] ${socket.id}`);

  // Send current state to new connection — no host info in here
  socket.emit("gameState", {
    phase: state.phase,
    players: Object.fromEntries(
      Object.entries(state.players).map(([id, p]) => [
        id, { name: p.name, score: p.score, streak: p.streak }
      ])
    ),
    questionIndex: state.questionIndex,
    totalQuestions: state.questionQueue.length,
    leaderboard: leaderboard(),
  });

  // ── Host authentication — password based ──────────────────────────────────
  socket.on("authHost", ({ password }) => {
    if (password !== HOST_PASSWORD) {
      socket.emit("authResult", { ok: false, message: "Wrong password" });
      return;
    }
    state.hostSocketId = socket.id;
    socket.emit("authResult", { ok: true });
    socket.emit("youAreHost");
    console.log(`[HOST] Authenticated: ${socket.id}`);
  });

  // ── Join as player ─────────────────────────────────────────────────────────
  socket.on("join", ({ name }) => {
    if (state.phase !== "lobby") {
      socket.emit("joinError", "A game is already in progress — wait for the next round!");
      return;
    }
    const trimmed = name?.trim().slice(0, 20);
    if (!trimmed) return;

    state.players[socket.id] = { name: trimmed, score: 0, streak: 0, answers: [] };
    console.log(`[JOIN] ${trimmed}`);
    io.emit("playerJoined", { id: socket.id, name: trimmed });
    broadcast();
  });

  // ── Host: start game ───────────────────────────────────────────────────────
  socket.on("startGame", ({ count = 15, categories = [] }) => {
    if (socket.id !== state.hostSocketId) return;
    if (state.phase !== "lobby") return;

    let pool = categories.length > 0
      ? allQuestions.filter(q => categories.includes(q.category))
      : allQuestions;

    state.questionQueue = shuffle(pool).slice(0, Math.min(count, pool.length));
    state.questionIndex = -1;
    state.phase = "countdown";

    io.emit("gameStarting", { countdown: COUNTDOWN_TIME });
    broadcast();

    let cd = COUNTDOWN_TIME;
    const cdInterval = setInterval(() => {
      cd--;
      io.emit("countdown", cd);
      if (cd <= 0) { clearInterval(cdInterval); nextQuestion(); }
    }, 1000);
  });

  // ── Player: submit answer ──────────────────────────────────────────────────
  socket.on("answer", ({ optionIndex }) => {
    if (state.phase !== "question") return;
    if (state.roundAnswers[socket.id]) return;
    if (!state.players[socket.id]) return;

    const timeMs = Date.now() - state.questionStart;
    state.roundAnswers[socket.id] = { optionIndex, timeMs };
    socket.emit("answerAck", { optionIndex });
    io.emit("answeredCount", {
      count: Object.keys(state.roundAnswers).length,
      total: Object.keys(state.players).length
    });

    // Everyone answered early — skip remaining timer
    if (Object.keys(state.roundAnswers).length >= Object.keys(state.players).length) {
      stopTimer();
      revealAnswer();
    }
  });

  // ── Host: reset after game ends ────────────────────────────────────────────
  socket.on("resetGame", () => {
    if (socket.id !== state.hostSocketId) return;
    if (state.phase !== "finished") return;
    resetGame();
  });

  // ── Disconnect ─────────────────────────────────────────────────────────────
  socket.on("disconnect", () => {
    console.log(`[-] ${socket.id}`);
    if (state.players[socket.id]) {
      io.emit("playerLeft", { id: socket.id, name: state.players[socket.id].name });
      delete state.players[socket.id];
      delete state.roundAnswers[socket.id];
      broadcast();
    }
    if (state.hostSocketId === socket.id) {
      state.hostSocketId = null;
      console.log("[HOST] Disconnected — will re-auth on reconnect");
    }
  });
});

// ─── Health check ──────────────────────────────────────────────────────────────
app.get("/api/health", (_, res) => res.json({ ok: true, questions: allQuestions.length }));

server.listen(PORT, () => {
  console.log(`\n🚀  Optimum Quiz Server — http://localhost:${PORT}`);
  console.log(`🔑  Host password: ${HOST_PASSWORD}`);
  console.log(`📚  ${allQuestions.length} questions loaded\n`);
});
