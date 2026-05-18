const CAT_COLORS = { Tech: "#5af4c8", Team: "#c8f45a", Milestones: "#ffd166", Community: "#ff6eb4" };
const LABELS = ["A", "B", "C", "D"];

export default function GameScreen({ question, timer, phase, reveal, myId, myAnswer, answeredCount, totalPlayers, questionIndex, totalQuestions, leaderboard, onAnswer, t, getExplanation }) {
  if (!question) return null;
  const isReveal = phase === "reveal";
  const timerColor = timer <= 5 ? "var(--red)" : timer <= 10 ? "var(--gold)" : "var(--accent)";
  const catColor = CAT_COLORS[question.category] || "var(--accent)";

  return (
    <div style={{ minHeight: "100vh", padding: "20px 24px", maxWidth: 1100, margin: "0 auto", animation: "fadeIn 0.3s ease" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, color: "var(--muted)", whiteSpace: "nowrap" }}>{questionIndex + 1} / {totalQuestions}</span>
          <div style={{ flex: 1, height: 4, background: "var(--surface2)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%`, height: "100%", background: "var(--accent)", borderRadius: 2, transition: "width 0.5s ease" }} />
          </div>
        </div>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, letterSpacing: 1, color: catColor, border: `1px solid ${catColor}40`, borderRadius: 6, padding: "3px 10px", background: `${catColor}10` }}>{question.category}</div>
        <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Space Mono',monospace" }}>{answeredCount}/{totalPlayers} {t.answered}</span>
      </div>

      {!isReveal && (
        <div style={{ height: 3, background: "var(--surface2)", borderRadius: 2, overflow: "hidden", marginBottom: 20 }}>
          <div style={{ width: `${(timer / 20) * 100}%`, height: "100%", background: timerColor, borderRadius: 2, transition: "width 1s linear, background 0.5s" }} />
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 24, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {!isReveal && (
            <div style={{ alignSelf: "flex-start", width: 70, height: 70, borderRadius: "50%", border: `2px solid ${timerColor}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: `0 0 24px ${timerColor}40`, transition: "all 0.5s" }}>
              <span style={{ fontSize: 26, fontWeight: 800, lineHeight: 1, color: timerColor }}>{timer}</span>
              <span style={{ fontSize: 10, color: "var(--muted)", fontFamily: "'Space Mono',monospace" }}>sec</span>
            </div>
          )}

          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
            <p style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.45 }}>{question.question}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {question.options.map((opt, i) => {
              let extra = {};
              if (isReveal && reveal) {
                if (i === reveal.correctAnswer) extra = { borderColor: "var(--accent)", background: "rgba(200,244,90,0.13)", boxShadow: "0 0 0 1px var(--accent)", animation: "glow 1.5s ease infinite" };
                else if (i === myAnswer) extra = { borderColor: "var(--red)", background: "rgba(255,77,106,0.1)", opacity: 0.9 };
                else extra = { opacity: 0.35 };
              } else if (myAnswer === i) {
                extra = { borderColor: "var(--accent2)", background: "rgba(90,244,200,0.09)", boxShadow: "0 0 0 1px var(--accent2)" };
              } else if (myAnswer !== null) {
                extra = { opacity: 0.5 };
              }
              return (
                <button key={i} disabled={isReveal || myAnswer !== null} onClick={() => !isReveal && myAnswer === null && onAnswer(i)}
                  style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 18px", color: "var(--text)", cursor: myAnswer === null && !isReveal ? "pointer" : "default", display: "flex", alignItems: "center", gap: 14, textAlign: "left", fontSize: 14, fontFamily: "'Syne',sans-serif", transition: "all 0.2s", animation: `fadeUp 0.4s ease ${i * 0.08}s both`, ...extra }}>
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "var(--surface2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono',monospace", fontSize: 12, fontWeight: 700, color: isReveal && i === reveal?.correctAnswer ? "var(--accent)" : isReveal && i === myAnswer ? "var(--red)" : "var(--muted)", flexShrink: 0 }}>{LABELS[i]}</span>
                  <span style={{ flex: 1 }}>{opt}</span>
                  {isReveal && i === reveal?.correctAnswer && <span style={{ color: "var(--accent)", fontSize: 18 }}>✓</span>}
                  {isReveal && i === myAnswer && i !== reveal?.correctAnswer && <span style={{ color: "var(--red)" }}>✗</span>}
                </button>
              );
            })}
          </div>

          {isReveal && reveal && (
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 20px", display: "flex", gap: 12, fontSize: 14, color: "var(--muted)", lineHeight: 1.55, animation: "fadeUp 0.4s ease" }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>💡</span>
              <p>{getExplanation(reveal)}</p>
            </div>
          )}

          {isReveal && reveal?.results?.[myId] && (
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 20px", background: reveal.results[myId].correct ? "rgba(200,244,90,0.07)" : "rgba(255,77,106,0.07)", border: `1px solid ${reveal.results[myId].correct ? "rgba(200,244,90,0.2)" : "rgba(255,77,106,0.2)"}`, borderRadius: 12, animation: "scaleIn 0.3s ease" }}>
              <span style={{ fontSize: 24 }}>{reveal.results[myId].correct ? "🎯" : "😅"}</span>
              <div>
                <p style={{ fontWeight: 700, color: reveal.results[myId].correct ? "var(--accent)" : "var(--red)" }}>{reveal.results[myId].correct ? t.correct : t.wrong}</p>
                <p style={{ color: "var(--muted)", fontSize: 12 }}>{reveal.results[myId].correct ? `+${reveal.results[myId].pts} ${t.pts}` : t.noPoints}</p>
              </div>
            </div>
          )}
        </div>

        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 20, position: "sticky", top: 20 }}>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, letterSpacing: 2, color: "var(--muted)", marginBottom: 12 }}>{t.leaderboard}</p>
          {leaderboard.slice(0, 8).map((p, i) => (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, border: `1px solid ${p.id === myId ? "var(--accent)" : "var(--border)"}`, background: p.id === myId ? "var(--accent-dim)" : "transparent", marginBottom: 6, transition: "all 0.3s" }}>
              <span style={{ fontSize: 11, fontFamily: "'Space Mono',monospace", color: i === 0 ? "var(--gold)" : i === 1 ? "var(--silver)" : i === 2 ? "var(--bronze)" : "var(--muted)", width: 16, textAlign: "center", flexShrink: 0 }}>{i + 1}</span>
              <span style={{ flex: 1, fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}{p.streak >= 3 && <span style={{ marginLeft: 5, fontSize: 10 }}>🔥{p.streak}</span>}</span>
              <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, color: "var(--accent)", flexShrink: 0 }}>{p.score.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
