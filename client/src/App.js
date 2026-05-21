import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import questions, { ui, flags, names } from "./data/translations";
import LanguagePicker from "./components/LanguagePicker";
import Lobby from "./components/Lobby";
import GameScreen from "./components/GameScreen";
import Leaderboard from "./components/Leaderboard";

const SOCKET_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";
const sock = io(SOCKET_URL);

export default function App() {
  const [lang, setLang] = useState(null);
  const langRef = useRef(null);
  const qIdRef = useRef(null);

  const [phase, setPhase]               = useState("lobby");
  const [players, setPlayers]           = useState({});
  const [leaderboard, setLeaderboard]   = useState([]);
  const [question, setQuestion]         = useState(null);
  const [timer, setTimer]               = useState(20);
  const [totalQuestions, setTotal]      = useState(0);
  const [questionIndex, setQIndex]      = useState(-1);
  const [reveal, setReveal]             = useState(null);
  const [myId, setMyId]                 = useState(null);
  const [myName, setMyName]             = useState("");
  const [isHost, setIsHost]             = useState(false);
  const [answeredCount, setAnswered]    = useState(0);
  const [myAnswer, setMyAnswer]         = useState(null);
  const [countdown, setCountdown]       = useState(null);
  const [connected, setConnected]       = useState(false);
  const [toast, setToast]               = useState(null);
  const [joined, setJoined]             = useState(false);
  const [joinError, setJoinError]       = useState(null);

  const notify = (msg, type = "info") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Translate a server question using current lang
  const tq = (serverQ) => {
    if (!serverQ) return null;
    const l = langRef.current || "en";
    const found = (questions[l] || questions.en).find(q => q.id === serverQ.id);
    if (!found) return serverQ;
    return { ...serverQ, question: found.question, options: found.options };
  };

  const getExp = (qId) => {
    const l = langRef.current || "en";
    const found = (questions[l] || questions.en).find(q => q.id === qId);
    return found?.explanation || null;
  };

  useEffect(() => {
    sock.on("connect", () => {
      setMyId(sock.id);
      setConnected(true);
      const pw = sessionStorage.getItem("oq_host_pw");
      if (pw) sock.emit("authHost", { password: pw });
    });
    sock.on("disconnect", () => setConnected(false));

    sock.on("gameState", (s) => {
      setPhase(s.phase || "lobby");
      setPlayers(s.players || {});
      setLeaderboard(s.leaderboard || []);
      setTotal(s.totalQuestions || 0);
      setQIndex(s.questionIndex ?? -1);
      if (s.question) { qIdRef.current = s.question.id; setQuestion(tq(s.question)); }
    });

    sock.on("youAreHost", () => setIsHost(true));
    sock.on("authResult", ({ ok, message }) => {
      if (!ok) { notify(message || "Wrong password", "error"); sessionStorage.removeItem("oq_host_pw"); }
    });
    sock.on("playerJoined", ({ name }) => notify(`${name} joined!`));
    sock.on("playerLeft",   ({ name }) => notify(`${name} left`));
    sock.on("joinError",    (msg)      => setJoinError(msg));
    sock.on("gameStarting", ({ countdown: cd }) => { setPhase("countdown"); setCountdown(cd); });
    sock.on("countdown",    (n) => setCountdown(n));
    sock.on("question", (q) => {
      qIdRef.current = q.id;
      setQuestion(tq(q));
      setPhase("question");
      setReveal(null);
      setMyAnswer(null);
      setAnswered(0);
      setTimer(20);
    });
    sock.on("timer",         (t)           => setTimer(t));
    sock.on("answeredCount", ({ count })   => setAnswered(count));
    sock.on("answerAck",     ({ optionIndex }) => setMyAnswer(optionIndex));
    sock.on("reveal", (data) => {
      setReveal({ ...data, explanation: getExp(qIdRef.current) || data.explanation });
      setPhase("reveal");
      setLeaderboard(data.leaderboard || []);
    });
    sock.on("gameOver", ({ leaderboard: lb }) => { setPhase("finished"); setLeaderboard(lb); });
    sock.on("gameReset", () => {
      setPhase("lobby"); setReveal(null); setQuestion(null); setMyAnswer(null); setAnswered(0);
    });
    sock.on("error", (msg) => notify(msg, "error"));

    return () => {
      ["connect","disconnect","gameState","youAreHost","authResult","playerJoined",
       "playerLeft","joinError","gameStarting","countdown","question","timer",
       "answeredCount","answerAck","reveal","gameOver","gameReset","error"
      ].forEach(e => sock.off(e));
    };
  }, []);

  const handleLang = (code) => {
    langRef.current = code;
    setLang(code);
    // Re-translate current question if game is in progress
    if (question) setQuestion(tq(question));
  };

  if (!lang) return <LanguagePicker onSelect={handleLang} flags={flags} names={names} />;

  const t = ui[lang] || ui.en;

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ position:"fixed", top:12, right:14, zIndex:999, display:"flex", alignItems:"center", gap:6, fontSize:11, color: connected ? "var(--accent)" : "var(--red)", fontFamily:"'Space Mono',monospace", opacity:0.65 }}>
        <div style={{ width:6, height:6, borderRadius:"50%", background: connected ? "var(--accent)" : "var(--red)", animation: connected ? "pulse 2s infinite" : "none" }} />
        {connected ? "LIVE" : "OFFLINE"}
      </div>

      <div onClick={() => setLang(null)} title="Change language"
        style={{ position:"fixed", top:10, left:14, zIndex:999, display:"flex", alignItems:"center", gap:5, fontSize:11, color:"var(--muted)", fontFamily:"'Space Mono',monospace", cursor:"pointer", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:8, padding:"4px 10px" }}>
        {flags[lang]} {names[lang]}
      </div>

      {toast && (
        <div style={{ position:"fixed", top:16, left:"50%", transform:"translateX(-50%)", background: toast.type === "error" ? "var(--red)" : "var(--surface2)", color:"var(--text)", padding:"8px 22px", borderRadius:8, fontFamily:"'Space Mono',monospace", fontSize:12, zIndex:1000, animation:"fadeUp 0.3s ease", border:"1px solid var(--border)", whiteSpace:"nowrap" }}>
          {toast.msg}
        </div>
      )}

      {(phase === "lobby" || phase === "countdown") && (
        <Lobby players={players} myId={myId} myName={myName} isHost={isHost}
          phase={phase} countdown={countdown} joined={joined} joinError={joinError} t={t}
          onJoin={(name) => { setMyName(name); setJoined(true); setJoinError(null); sock.emit("join", { name }); }}
          onStart={(opts) => sock.emit("startGame", opts)}
          onHostAuth={(pw) => { sessionStorage.setItem("oq_host_pw", pw); sock.emit("authHost", { password: pw }); }}
        />
      )}

      {(phase === "question" || phase === "reveal") && (
        <GameScreen question={question} timer={timer} phase={phase} reveal={reveal}
          myId={myId} myAnswer={myAnswer} answeredCount={answeredCount}
          totalPlayers={Object.keys(players).length}
          questionIndex={questionIndex} totalQuestions={totalQuestions}
          leaderboard={leaderboard} t={t}
          onAnswer={(i) => { sock.emit("answer", { optionIndex: i }); setMyAnswer(i); }}
        />
      )}

      {phase === "finished" && (
        <Leaderboard leaderboard={leaderboard} myId={myId} isHost={isHost} t={t}
          onReset={() => sock.emit("resetGame")}
        />
      )}
    </div>
  );
}
