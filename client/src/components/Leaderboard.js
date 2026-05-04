import { useEffect, useState } from "react";

const MEDALS = ["🥇","🥈","🥉"];
const CONFETTI_COLORS = ["#c8f45a","#5af4c8","#ffd166","#ff6eb4","#6eb4ff"];

function avatarColor(name) {
  const colors = ["#c8f45a","#5af4c8","#ffd166","#ff6eb4","#6eb4ff","#ff6e6e"];
  let h = 0; for (let c of name) h = c.charCodeAt(0) + ((h << 5) - h);
  return colors[Math.abs(h) % colors.length];
}

function Confetti() {
  const pieces = Array.from({ length: 45 }, (_, i) => ({
    id: i, x: Math.random() * 100, delay: Math.random() * 3,
    dur: 3 + Math.random() * 3, color: CONFETTI_COLORS[i % CONFETTI_COLORS.length], size: 6 + Math.random() * 8
  }));
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {pieces.map(p => (
        <div key={p.id} style={{ position: "absolute", left: `${p.x}%`, top: -20, width: p.size, height: p.size, background: p.color, borderRadius: 2, animation: `confettiFall ${p.dur}s ${p.delay}s ease-in forwards` }} />
      ))}
    </div>
  );
}

export default function Leaderboard({ leaderboard, myId, isHost, onReset }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 300); return () => clearTimeout(t); }, []);

  const winner = leaderboard[0];
  const myRank = leaderboard.findIndex(p => p.id === myId) + 1;

  return (
    <div style={{ minHeight: "100vh", padding: "40px 24px", maxWidth: 680, margin: "0 auto", animation: "fadeIn 0.5s ease" }}>
      <Confetti />
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 64, animation: "scaleIn 0.5s ease" }}>🏆</div>
          <h1 style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-2px", marginTop: 8 }}>Game Over!</h1>
          {winner && <p style={{ fontSize: 18, color: "var(--muted)", marginTop: 10 }}><span style={{ color: "var(--gold)" }}>{winner.name}</span> wins with <span style={{ color: "var(--accent)" }}>{winner.score.toLocaleString()} pts</span></p>}
          {myRank > 0 && <p style={{ marginTop: 8, color: "var(--muted)", fontSize: 14, fontFamily: "'Space Mono',monospace" }}>You finished #{myRank}{myRank === 1 ? " 🎉" : myRank === 2 ? " 🥈" : myRank === 3 ? " 🥉" : ""}</p>}
        </div>

        {/* Podium */}
        {leaderboard.length >= 3 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 14, marginBottom: 40 }}>
            {[leaderboard[1], leaderboard[0], leaderboard[2]].map((p, pi) => {
              const rank = pi === 0 ? 2 : pi === 1 ? 1 : 3;
              const h = [80, 120, 60][pi];
              const col = rank === 1 ? "var(--gold)" : rank === 2 ? "var(--silver)" : "var(--bronze)";
              return (
                <div key={p.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 50, height: 50, borderRadius: "50%", background: col, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, color: "#000", animation: show ? `scaleIn 0.5s ease ${pi * 0.15}s both` : "none" }}>{p.name[0].toUpperCase()}</div>
                  <p style={{ fontSize: 12, fontWeight: 700, maxWidth: 80, textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</p>
                  <p style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono',monospace" }}>{p.score.toLocaleString()}</p>
                  <div style={{ width: 88, height: h, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px 8px 0 0", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 8, fontSize: 18 }}>{MEDALS[rank - 1]}</div>
                </div>
              );
            })}
          </div>
        )}

        {/* Full list */}
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, letterSpacing: 2, color: "var(--muted)", marginBottom: 10 }}>FULL RESULTS</p>
          {leaderboard.map((p, i) => (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 18px", borderRadius: 12, border: `1px solid ${p.id === myId ? "var(--accent)" : "var(--border)"}`, background: p.id === myId ? "var(--accent-dim)" : "var(--surface)", marginBottom: 8, animation: show ? `slideIn 0.4s ease ${i * 0.06}s both` : "none" }}>
              <span style={{ width: 28, textAlign: "center", fontSize: i < 3 ? 18 : 12, fontFamily: i >= 3 ? "'Space Mono',monospace" : undefined, color: i >= 3 ? "var(--muted)" : undefined, flexShrink: 0 }}>{i < 3 ? MEDALS[i] : `#${i + 1}`}</span>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: avatarColor(p.name), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#000", flexShrink: 0 }}>{p.name[0].toUpperCase()}</div>
              <span style={{ flex: 1, fontWeight: 600 }}>{p.name}{p.id === myId && <span style={{ fontSize: 11, fontFamily: "'Space Mono',monospace", color: "var(--accent)", marginLeft: 6 }}>you</span>}</span>
              {p.streak >= 3 && <span style={{ fontSize: 11, fontFamily: "'Space Mono',monospace", color: "var(--muted)" }}>🔥{p.streak}</span>}
              <span style={{ fontFamily: "'Space Mono',monospace", fontWeight: 700, color: "var(--accent)", fontSize: 15 }}>{p.score.toLocaleString()}</span>
              <span style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Space Mono',monospace" }}>pts</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          {isHost ? (
            <button style={{ background: "var(--accent)", color: "#000", border: "none", borderRadius: 12, padding: "16px 48px", fontSize: 15, fontWeight: 700, fontFamily: "'Space Mono',monospace", letterSpacing: 2, cursor: "pointer", animation: "glow 2s ease infinite" }} onClick={onReset}>
              ↺ PLAY AGAIN
            </button>
          ) : (
            <p style={{ color: "var(--muted)", fontSize: 13, fontFamily: "'Space Mono',monospace" }}>Waiting for the host to start a new game...</p>
          )}
          <p style={{ color: "var(--muted)", fontSize: 11, fontFamily: "'Space Mono',monospace", opacity: 0.45 }}>Powered by Optimum — Universal Data Acceleration</p>
        </div>
      </div>
    </div>
  );
}
