import { useEffect, useState, useCallback, useRef } from "react";
import { io } from "socket.io-client";
import Lobby from "./components/Lobby";
import GameScreen from "./components/GameScreen";
import Leaderboard from "./components/Leaderboard";

const SOCKET_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

export default function App() {
  const sockRef = useRef(null);
  if (!sockRef.current) sockRef.current = io(SOCKET_URL);
  const sock = sockRef.current;

  const [phase, setPhase] = useState("lobby");
  const [players, setPlayers] = useState({});
  const [leaderboard, setLeaderboard] = useState([]);
  const [question, setQuestion] = useState(null);
  const [timer, setTimer] = useState(20);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [reveal, setReveal] = useState(null);
  const [myId, setMyId] = useState(null);
  const [myName, setMyName] = useState("");
  const [isHost, setIsHost] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [myAnswer, setMyAnswer] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [connected, setConnected] = useState(false);
  const [toast, setToast] = useState(null);
  const [joined, setJoined] = useState(false);
  const [joinError, setJoinError] = useState(null);

  const notify = useCallback((msg, type = "info") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }, []);

  useEffect(() => {
    sock.on("connect", () => {
      setMyId(sock.id);
      setConnected(true);
      // If we previously authenticated as host this session, re-auth silently
      const savedPw = sessionStorage.getItem("oq_host_pw");
      if (savedPw) sock.emit("authHost", { password: savedPw });
    });

    sock.on("disconnect", () => setConnected(false));

    sock.on("gameState", (s) => {
      setPhase(s.phase);
      setPlayers(s.players || {});
      setLeaderboard(s.leaderboard || []);
      setTotalQuestions(s.totalQuestions || 0);
      setQuestionIndex(s.questionIndex ?? -1);
      if (s.question) setQuestion(s.question);
    });

    sock.on("youAreHost", () => setIsHost(true));

    sock.on("authResult", ({ ok, message }) => {
      if (!ok) {
        notify(message || "Wrong password", "error");
        sessionStorage.removeItem("oq_host_pw");
      }
    });

    sock.on("playerJoined", ({ name }) => notify(`${name} joined!`));
    sock.on("playerLeft",   ({ name }) => notify(`${name} left`, "muted"));
    sock.on("joinError",    (msg)     => setJoinError(msg));

    sock.on("gameStarting", ({ countdown: cd }) => { setPhase("countdown"); setCountdown(cd); });
    sock.on("countdown",    (n) => setCountdown(n));

    sock.on("question", (q) => {
      setQuestion(q);
      setPhase("question");
      setReveal(null);
      setMyAnswer(null);
      setAnsweredCount(0);
      setTimer(20);
    });

    sock.on("timer",         (t)    => setTimer(t));
    sock.on("answeredCount", ({ count }) => setAnsweredCount(count));
    sock.on("answerAck",     ({ optionIndex }) => setMyAnswer(optionIndex));

    sock.on("reveal", (data) => {
      setReveal(data);
      setPhase("reveal");
      setLeaderboard(data.leaderboard || []);
    });

    sock.on("gameOver", ({ leaderboard: lb }) => {
      setPhase("finished");
      setLeaderboard(lb);
    });

    sock.on("gameReset", () => {
      setPhase("lobby");
      setReveal(null);
      setQuestion(null);
      setMyAnswer(null);
      setAnsweredCount(0);
      // isHost is re-confirmed via youAreHost emitted right after gameReset by server
    });

    return () => sock.removeAllListeners();
  }, [sock, notify]);

  // ── Actions ──────────────────────────────────────────────────────────────────
  const handleHostAuth = useCallback((password) => {
    sessionStorage.setItem("oq_host_pw", password);
    sock.emit("authHost", { password });
  }, [sock]);

  const handleJoin = useCallback((name) => {
    setMyName(name);
    setJoined(true);
    setJoinError(null);
    sock.emit("join", { name });
  }, [sock]);

  const handleStart = useCallback((opts) => sock.emit("startGame", opts), [sock]);
  const handleAnswer = useCallback((i) => { sock.emit("answer", { optionIndex: i }); setMyAnswer(i); }, [sock]);
  const handleReset  = useCallback(() => sock.emit("resetGame"), [sock]);

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Live indicator */}
      <div style={{ position: "fixed", top: 12, right: 14, zIndex: 999, display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: connected ? "var(--accent)" : "var(--red)", fontFamily: "'Space Mono',monospace", opacity: 0.65 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: connected ? "var(--accent)" : "var(--red)", animation: connected ? "pulse 2s infinite" : "none" }} />
        {connected ? "LIVE" : "OFFLINE"}
      </div>

      {/* Toast */}
      {toast && (
        <div style={{ position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", background: toast.type === "error" ? "var(--red)" : "var(--surface2)", color: "var(--text)", padding: "8px 22px", borderRadius: 8, fontFamily: "'Space Mono',monospace", fontSize: 12, zIndex: 1000, animation: "fadeUp 0.3s ease", border: "1px solid var(--border)", whiteSpace: "nowrap" }}>
          {toast.msg}
        </div>
      )}

      {(phase === "lobby" || phase === "countdown") && (
        <Lobby
          players={players} myId={myId} myName={myName}
          isHost={isHost} phase={phase} countdown={countdown}
          joined={joined} joinError={joinError}
          onJoin={handleJoin} onStart={handleStart} onHostAuth={handleHostAuth}
        />
      )}

      {(phase === "question" || phase === "reveal") && (
        <GameScreen
          question={question} timer={timer} phase={phase} reveal={reveal}
          myId={myId} myAnswer={myAnswer} answeredCount={answeredCount}
          totalPlayers={Object.keys(players).length}
          questionIndex={questionIndex} totalQuestions={totalQuestions}
          leaderboard={leaderboard} onAnswer={handleAnswer}
        />
      )}

      {phase === "finished" && (
        <Leaderboard
          leaderboard={leaderboard} myId={myId}
          isHost={isHost} onReset={handleReset}
        />
      )}
    </div>
  );
}
