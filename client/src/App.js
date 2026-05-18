import { useEffect, useState, useCallback, useRef } from "react";
import { io } from "socket.io-client";
import translations from "./data/translations";
import LanguagePicker from "./components/LanguagePicker";
import Lobby from "./components/Lobby";
import GameScreen from "./components/GameScreen";
import Leaderboard from "./components/Leaderboard";

const SOCKET_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

// Socket created OUTSIDE component so it never re-initializes
const sock = io(SOCKET_URL);

export default function App() {
  const [lang, setLang] = useState(null);
  const [phase, setPhase] = useState("lobby");
  const [players, setPlayers] = useState({});
  const [leaderboard, setLeaderboard] = useState([]);
  const [question, setQuestion] = useState(null);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);
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

  const langRef = useRef(lang);
  const questionIdRef = useRef(null);

  useEffect(() => { langRef.current = lang; }, [lang]);

  const notify = useCallback((msg, type = "info") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }, []);

  const translateQ = (serverQ, langCode) => {
    if (!serverQ || !langCode) return serverQ;
    const langData = translations[langCode];
    if (!langData) return serverQ;
    const found = langData.questions.find(q => q.id === serverQ.id);
    if (!found) return serverQ;
    return { ...serverQ, question: found.question, options: found.options };
  };

  const getExplanation = (questionId, langCode) => {
    if (!questionId || !langCode) return null;
    const langData = translations[langCode];
    if (!langData) return null;
    const found = langData.questions.find(q => q.id === questionId);
    return found?.explanation || null;
  };

  useEffect(() => {
    sock.on("connect", () => {
      setMyId(sock.id);
      setConnected(true);
      const savedPw = sessionStorage.getItem("oq_host_pw");
      if (savedPw) sock.emit("authHost", { password: savedPw });
    });

    sock.on("disconnect", () => setConnected(false));

    sock.on("gameState", (st) => {
      setPhase(st.phase || "lobby");
      setPlayers(st.players || {});
      setLeaderboard(st.leaderboard || []);
      setTotalQuestions(st.totalQuestions || 0);
      setQuestionIndex(st.questionIndex ?? -1);
      if (st.question) {
        setCurrentQuestionId(st.question.id);
        questionIdRef.current = st.question.id;
        setQuestion(translateQ(st.question, langRef.current));
      }
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
    sock.on("joinError",    (msg)      => setJoinError(msg));

    sock.on("gameStarting", ({ countdown: cd }) => {
      setPhase("countdown");
      setCountdown(cd);
    });

    sock.on("countdown", (n) => setCountdown(n));

    sock.on("question", (q) => {
      setCurrentQuestionId(q.id);
      questionIdRef.current = q.id;
      setQuestion(translateQ(q, langRef.current));
      setPhase("question");
      setReveal(null);
      setMyAnswer(null);
      setAnsweredCount(0);
      setTimer(20);
    });

    sock.on("timer",         (t)           => setTimer(t));
    sock.on("answeredCount", ({ count })   => setAnsweredCount(count));
    sock.on("answerAck",     ({ optionIndex }) => setMyAnswer(optionIndex));

    sock.on("reveal", (data) => {
      setReveal({
        ...data,
        explanation: getExplanation(questionIdRef.current, langRef.current) || data.explanation
      });
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
    });

    sock.on("error", (msg) => notify(msg, "error"));

    // Cleanup
    return () => {
      sock.off("connect");
      sock.off("disconnect");
      sock.off("gameState");
      sock.off("youAreHost");
      sock.off("authResult");
      sock.off("playerJoined");
      sock.off("playerLeft");
      sock.off("joinError");
      sock.off("gameStarting");
      sock.off("countdown");
      sock.off("question");
      sock.off("timer");
      sock.off("answeredCount");
      sock.off("answerAck");
      sock.off("reveal");
      sock.off("gameOver");
      sock.off("gameReset");
      sock.off("error");
    };
  }, []);

  const handleHostAuth = (password) => {
    sessionStorage.setItem("oq_host_pw", password);
    sock.emit("authHost", { password });
  };

  const handleJoin = (name) => {
    setMyName(name);
    setJoined(true);
    setJoinError(null);
    sock.emit("join", { name });
  };

  const handleStart  = (opts) => sock.emit("startGame", opts);
  const handleAnswer = (i)    => { sock.emit("answer", { optionIndex: i }); setMyAnswer(i); };
  const handleReset  = ()     => sock.emit("resetGame");

  // ── Language picker first ─────────────────────────────────────────────────
  if (!lang) {
    return <LanguagePicker onSelect={setLang} />;
  }

  const langData = translations[lang];

  // ── Main app ──────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Live dot */}
      <div style={{ position: "fixed", top: 12, right: 14, zIndex: 999, display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: connected ? "var(--accent)" : "var(--red)", fontFamily: "'Space Mono',monospace", opacity: 0.65 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: connected ? "var(--accent)" : "var(--red)", animation: connected ? "pulse 2s infinite" : "none" }} />
        {connected ? "LIVE" : "OFFLINE"}
      </div>

      {/* Language badge */}
      <div
        onClick={() => setLang(null)}
        title="Change language"
        style={{ position: "fixed", top: 10, left: 14, zIndex: 999, display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono',monospace", cursor: "pointer", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "4px 10px" }}
      >
        {langData?.flag} {langData?.name}
      </div>

      {/* Toast */}
      {toast && (
        <div style={{ position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", background: toast.type === "error" ? "var(--red)" : "var(--surface2)", color: "var(--text)", padding: "8px 22px", borderRadius: 8, fontFamily: "'Space Mono',monospace", fontSize: 12, zIndex: 1000, animation: "fadeUp 0.3s ease", border: "1px solid var(--border)", whiteSpace: "nowrap" }}>
          {toast.msg}
        </div>
      )}

      {/* Screens */}
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
