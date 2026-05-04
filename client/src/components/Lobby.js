import { useState } from "react";

const CAT_COLORS = { Tech: "#5af4c8", Team: "#c8f45a", Milestones: "#ffd166", Community: "#ff6eb4" };
const ALL_CATS = ["Tech", "Team", "Milestones", "Community"];

function avatarColor(name) {
  const colors = ["#c8f45a","#5af4c8","#ffd166","#ff6eb4","#6eb4ff","#ff6e6e"];
  let h = 0;
  for (let c of name) h = c.charCodeAt(0) + ((h << 5) - h);
  return colors[Math.abs(h) % colors.length];
}

// ── Shared pieces ──────────────────────────────────────────────────────────────
function Logo({ sub }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 6 }}>
      <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-2px" }}>
        <span style={{ color: "var(--accent)" }}>O</span>ptimum
        <span style={{ marginLeft: 10, fontSize: 12, fontFamily: "'Space Mono',monospace", letterSpacing: 4, color: "var(--muted)", verticalAlign: "middle", fontWeight: 400 }}>TRIVIA</span>
      </div>
      {sub && <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 4 }}>{sub}</p>}
    </div>
  );
}

function PlayerList({ players, myId, compact = false }) {
  const list = Object.entries(players);
  if (list.length === 0) return <p style={{ color: "var(--muted)", fontSize: 12, fontFamily: "'Space Mono',monospace", textAlign: "center", padding: "20px 0" }}>No players yet</p>;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, maxHeight: compact ? 240 : 360, overflowY: "auto" }}>
      {list.map(([id, p], i) => (
        <div key={id} style={{ display: "flex", alignItems: "center", gap: 10, padding: compact ? "7px 10px" : "10px 14px", background: "var(--surface2)", borderRadius: 10, border: `1px solid ${id === myId ? "var(--accent)" : "var(--border)"}`, animation: `slideIn 0.3s ease ${i * 0.05}s both` }}>
          <div style={{ width: compact ? 26 : 30, height: compact ? 26 : 30, borderRadius: "50%", background: avatarColor(p.name), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#000", flexShrink: 0 }}>
            {p.name[0].toUpperCase()}
          </div>
          <span style={{ flex: 1, fontSize: compact ? 13 : 14 }}>{p.name}</span>
          {id === myId && <span style={{ fontSize: 10, fontFamily: "'Space Mono',monospace", color: "var(--accent)" }}>you</span>}
        </div>
      ))}
    </div>
  );
}

// ── Countdown overlay ──────────────────────────────────────────────────────────
function Countdown({ countdown }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "'Space Mono',monospace", letterSpacing: 4, color: "var(--muted)", fontSize: 13, marginBottom: 16 }}>GET READY</p>
        <div style={{ fontSize: 120, fontWeight: 800, color: "var(--accent)", lineHeight: 1, textShadow: "0 0 60px rgba(200,244,90,0.5)", animation: "countdownPop 0.5s ease" }}>{countdown}</div>
        <p style={{ color: "var(--muted)", marginTop: 16, fontSize: 14 }}>Game starting...</p>
      </div>
    </div>
  );
}

// ── Pre-join: name input + optional host password ─────────────────────────────
function JoinScreen({ joinError, onJoin, onHostAuth }) {
  const [name, setName] = useState("");
  const [showHostLogin, setShowHostLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [pwError, setPwError] = useState("");

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: 40, maxWidth: 400, width: "100%", textAlign: "center", animation: "scaleIn 0.4s ease" }}>
        <Logo sub="Community Knowledge Quiz" />

        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 28 }}>
          <input
            style={S.input}
            placeholder="Enter your name..."
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === "Enter" && name.trim() && onJoin(name.trim())}
            maxLength={20}
            autoFocus
          />
          <button style={S.btnAccent} onClick={() => name.trim() && onJoin(name.trim())}>JOIN GAME →</button>
        </div>

        {joinError && <div style={S.errorBox}>{joinError}</div>}

        {/* Host login toggle */}
        <div style={{ marginTop: 24, borderTop: "1px solid var(--border)", paddingTop: 20 }}>
          {!showHostLogin ? (
            <button style={S.btnGhost} onClick={() => setShowHostLogin(true)}>🔑 I am the host</button>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <p style={{ fontSize: 12, fontFamily: "'Space Mono',monospace", color: "var(--muted)", marginBottom: 4 }}>HOST PASSWORD</p>
              <input
                style={S.input}
                type="password"
                placeholder="Enter host password..."
                value={password}
                onChange={e => { setPassword(e.target.value); setPwError(""); }}
                onKeyDown={e => {
                  if (e.key === "Enter" && password && name.trim()) {
                    onHostAuth(password);
                    onJoin(name.trim());
                  }
                }}
              />
              {!name.trim() && <p style={{ fontSize: 11, color: "var(--red)", fontFamily: "'Space Mono',monospace" }}>Enter your name above first</p>}
              {pwError && <p style={{ fontSize: 11, color: "var(--red)", fontFamily: "'Space Mono',monospace" }}>{pwError}</p>}
              <button
                style={S.btnAccent}
                onClick={() => {
                  if (!name.trim()) { setPwError("Enter your name first"); return; }
                  onHostAuth(password);
                  onJoin(name.trim());
                }}
              >
                LOGIN AS HOST
              </button>
              <button style={S.btnGhost} onClick={() => setShowHostLogin(false)}>Cancel</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Host dashboard ─────────────────────────────────────────────────────────────
function HostDashboard({ players, myId, myName, onStart }) {
  const [count, setCount] = useState(15);
  const [cats, setCats] = useState([]);

  const toggle = (cat) => setCats(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  const playerCount = Object.keys(players).length;

  return (
    <div style={{ minHeight: "100vh", padding: "36px 24px", maxWidth: 960, margin: "0 auto", animation: "fadeIn 0.4s ease" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <Logo sub="Host Dashboard" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Settings */}
        <div style={S.panel}>
          <p style={S.panelTitle}>GAME SETTINGS</p>

          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "var(--accent-dim)", border: "1px solid rgba(200,244,90,0.2)", borderRadius: 10, marginBottom: 20, fontSize: 14 }}>
            <span style={{ fontSize: 18 }}>👑</span>
            <span>Host: <strong>{myName}</strong></span>
          </div>

          <label style={S.label}>Number of questions</label>
          <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
            {[10, 15, 20, 35].map(n => (
              <button key={n} style={{ ...S.pill, ...(count === n ? S.pillActive : {}) }} onClick={() => setCount(n)}>{n}</button>
            ))}
          </div>

          <label style={S.label}>Categories (blank = all)</label>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
            {ALL_CATS.map(cat => (
              <button key={cat} onClick={() => toggle(cat)} style={{ ...S.catBtn, borderColor: cats.includes(cat) ? CAT_COLORS[cat] : "var(--border)", color: cats.includes(cat) ? CAT_COLORS[cat] : "var(--muted)", background: cats.includes(cat) ? `${CAT_COLORS[cat]}14` : "transparent" }}>
                {cat}
              </button>
            ))}
          </div>

          <button style={{ ...S.btnAccent, width: "100%", marginTop: 24, fontSize: 15, padding: "16px", letterSpacing: 2, animation: "glow 2s ease infinite" }} onClick={() => onStart({ count, categories: cats })}>
            START GAME ▶
          </button>

          <p style={{ color: "var(--muted)", fontSize: 12, marginTop: 10, fontFamily: "'Space Mono',monospace" }}>
            {playerCount === 0 ? "No players yet" : playerCount === 1 ? "⚠️ Only you — share the link!" : `${playerCount} players ready`}
          </p>
        </div>

        {/* Players */}
        <div style={S.panel}>
          <p style={S.panelTitle}>PLAYERS <span style={{ background: "var(--accent-dim)", color: "var(--accent)", borderRadius: 20, padding: "2px 10px", fontSize: 11 }}>{playerCount}</span></p>
          <PlayerList players={players} myId={myId} />

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, paddingTop: 14, marginTop: 14, borderTop: "1px solid var(--border)" }}>
            {ALL_CATS.map(cat => (
              <div key={cat} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: CAT_COLORS[cat] }} />
                <span style={{ color: "var(--muted)", fontSize: 11 }}>{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Player waiting room ────────────────────────────────────────────────────────
function PlayerWaiting({ players, myId, myName }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: 40, maxWidth: 420, width: "100%", textAlign: "center", animation: "fadeIn 0.4s ease" }}>
        <Logo />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 24, padding: "12px 20px", background: "var(--accent-dim)", border: "1px solid rgba(200,244,90,0.2)", borderRadius: 10, fontSize: 14 }}>
          <span style={{ color: "var(--accent)" }}>✓</span>
          <span>Joined as <strong>{myName}</strong></span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, margin: "28px 0" }}>
          <div style={{ display: "flex", gap: 7 }}>
            {[0,1,2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: `pulse 1.2s ease ${i * 0.2}s infinite` }} />)}
          </div>
          <p style={{ color: "var(--muted)", fontSize: 13, fontFamily: "'Space Mono',monospace" }}>Waiting for the host to start...</p>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, textAlign: "left" }}>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, letterSpacing: 2, color: "var(--muted)", marginBottom: 10 }}>IN THE ROOM · {Object.keys(players).length}</p>
          <PlayerList players={players} myId={myId} compact />
        </div>
      </div>
    </div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────────
export default function Lobby({ players, myId, myName, isHost, phase, countdown, joined, joinError, onJoin, onStart, onHostAuth }) {
  if (phase === "countdown") return <Countdown countdown={countdown} />;
  if (!joined) return <JoinScreen joinError={joinError} onJoin={onJoin} onHostAuth={onHostAuth} />;
  if (isHost) return <HostDashboard players={players} myId={myId} myName={myName} onStart={onStart} />;
  return <PlayerWaiting players={players} myId={myId} myName={myName} />;
}

// ── Shared styles ──────────────────────────────────────────────────────────────
const S = {
  input: { background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: 10, padding: "13px 16px", color: "var(--text)", fontSize: 15, fontFamily: "'Syne',sans-serif", outline: "none", width: "100%", textAlign: "center" },
  btnAccent: { background: "var(--accent)", color: "#000", border: "none", borderRadius: 10, padding: "13px 24px", fontSize: 14, fontWeight: 700, fontFamily: "'Space Mono',monospace", letterSpacing: 1, cursor: "pointer", width: "100%" },
  btnGhost: { background: "transparent", color: "var(--muted)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 20px", fontSize: 12, fontFamily: "'Space Mono',monospace", cursor: "pointer", width: "100%" },
  errorBox: { marginTop: 12, background: "rgba(255,77,106,0.1)", border: "1px solid rgba(255,77,106,0.3)", borderRadius: 8, padding: "10px 14px", color: "var(--red)", fontSize: 12, fontFamily: "'Space Mono',monospace" },
  panel: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 },
  panelTitle: { fontFamily: "'Space Mono',monospace", fontSize: 11, letterSpacing: 2, color: "var(--muted)", textTransform: "uppercase", marginBottom: 18, display: "flex", alignItems: "center", gap: 10 },
  label: { fontSize: 11, fontFamily: "'Space Mono',monospace", color: "var(--muted)", letterSpacing: 1, marginTop: 16, marginBottom: 8, display: "block" },
  pill: { background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--muted)", borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontFamily: "'Space Mono',monospace", fontSize: 13 },
  pillActive: { borderColor: "var(--accent)", color: "var(--accent)", background: "var(--accent-dim)" },
  catBtn: { background: "transparent", border: "1px solid", borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: 12, fontFamily: "'Space Mono',monospace", transition: "all 0.2s" },
};
