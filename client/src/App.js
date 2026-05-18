import { useEffect, useState, useCallback, useRef } from "react";
import { io } from "socket.io-client";
import translations from "./data/translations";
import LanguagePicker from "./components/LanguagePicker";
import Lobby from "./components/Lobby";
import GameScreen from "./components/GameScreen";
import Leaderboard from "./components/Leaderboard";

const SOCKET_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

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

  // Keep latest lang in a ref so socket callbacks always see current value
  const langRef = useRef(lang);
  useEffect(() => { langRef.current = lang; }, [lang]);

  // Socket created once, never recreated
  const sockRef = useRef(null);
  if (!sockRef.current) sockRef.current = io(SOCKET_URL);
  const sock = sockRef.current;

  const notify = useCallback((msg, type = "info") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }, []);

  // Translate a question using current lang
  const translateQ = useCallback((serverQ) => {
    if (!serverQ) return null;
    const currentLang = langRef.current;
    if (!currentLang) return serverQ;
    const langData = translations[currentLang];
    if (!langData) return serverQ;
    const found = langData.questions.find(q => q.id === serverQ.id);
    if (!found) return serverQ;
    return { ...serverQ, question: found.question, options: found.options };
  }, []);

  const getExplanation = useCallback((questionId) => {
    const currentLang = langRef.current;
    if (!currentLang || !questionId) return null;
    const langData = translations[currentLang];
    if (!langData) return null;
    const found = langData.questions.find(q => q.id === questionId);
    return found?.explanation || null;
  }, []);

  useEffect(() => {
    const s = sock;

    s.on("connect", () => {
      setMyId(s.id);
      setConnected(true);
      const savedPw = sessionStorage.getItem("oq_host_pw");
      if (savedPw) s.emit("authHost", { password: savedPw });
    });

    s.on("disconnect", () => setConnected(false));

    s.on("gameState", (st) => {
      setPhase(st.phase || "lobby");
      setPlayers(st.players || {});
      setLeaderboard(st.leaderboard || []);
      setTotalQuestions(st.totalQuestions || 0);
      setQuestionIndex(st.questionIndex ?? -1);
      if (st.question) {
        setCurrentQuestionId(st.question.id);
        setQuestion(translateQ(st.question));
      }
    });

    s.on("youAreHost", () => setIsHost(true));

    s.on("authResult", ({ ok, message }) => {
      if (!ok) {
        notify(message || "Wrong password", "error");
        sessionStorage.removeItem("oq_host_pw");
      }
    });

    s.on("playerJoined", ({ name }) => notify(`${name} joined!`));
    s.on("playerLeft",   ({ name }) => notify(`${name} left`, "muted"));
    s.on("joinError",    (msg)      => setJoinError(msg));

    s.on("gameStarting", ({ countdown: cd }) => {
      setPhase("countdown");
      setCountdown(cd);
    });

    s.on("countdown", (n) => setCountdown(n));

    s.on("question", (q) => {
      setCurrentQuestionId(q.id);
      setQuestion(translateQ(q));
      setPhase("question");
      setReveal(null);
      setMyAnswer(null);
      setAnsweredCount(0);
      setTimer(20);
    });

    s.on("timer",         (t)         => setTimer(t));
    s.on("answeredCount", ({ count }) => setAnsweredCount(count));
    s.on("answerAck",     ({ optionIndex }) => setMyAnswer(optionIndex));

    s.on("reveal", (data) => {
      setReveal({
        ...data,
        explanation: getExplanation(currentQuestionId) || data.explanation
      });
      setPhase("reveal");
      setLeaderboard(data.leaderboard || []);
    });

    s.on("gameOver", ({ leaderboard: lb }) => {
      setPhase("finished");
      setLeaderboard(lb);
    });

    s.on("gameReset", () => {
      setPhase("lobby");
      setReveal(null);
      setQuestion(null);
      setMyAnswer(null);
      setAnsweredCount(0);
    });

    s.on("error", (msg) => notify(msg, "error"));

    return () => s.removeAllListeners();
  }, [sock, notify, translateQ, getExplanation, currentQuestionId]);

  // When language changes mid-game, re-translate the current question immediately
  useEffect(() => {
    if (lang && question) {
      setQuestion(translateQ(question));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

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

  const handleStart  = useCallback((opts) => sock.emit("startGame", opts), [sock]);
  const handleAnswer = useCallback((i) => {
    sock.emit("answer", { optionIndex: i });
    setMyAnswer(i);
  }, [sock]);
  const handleReset  = useCallback(() => sock.emit("resetGame"), [sock]);

  // ── Language picker — shown first, nothing else renders until selected ───
  if (!lang) {
    return <LanguagePicker onSelect={setLang} />;
  }

  const langData = translations[lang];

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Live dot */}
      <div style={{ position: "fixed", top: 12, right: 14, zIndex: 999, display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: connected ? "var(--accent)" : "var(--red)", fontFamily: "'Space Mono',monospace", opacity: 0.65 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: connected ? "var(--accent)" : "var(--red)", animation: connected ? "pulse 2s infinite" : "none" }} />
        {connected ? "LIVE" : "OFFLINE"}
      </div>

      {/* Language badge — click to change */}
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
