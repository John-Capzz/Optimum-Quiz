import translations from "../data/translations";

const languages = Object.entries(translations).map(([code, t]) => ({
  code,
  name: t.name,
  flag: t.flag
}));

export default function LanguagePicker({ onSelect }) {
  return (
    <div style={S.page}>
      <div style={S.card}>
        <div style={S.logo}>
          <span style={{ color: "var(--accent)" }}>O</span>ptimum
          <span style={S.tag}>TRIVIA</span>
        </div>
        <p style={S.sub}>Select your language to continue</p>
        <p style={S.sub2}>Piliin ang wika / 选择语言 / Выберите язык</p>

        <div style={S.grid}>
          {languages.map((lang, i) => (
            <button
              key={lang.code}
              style={{ ...S.btn, animationDelay: `${i * 0.05}s` }}
              onClick={() => onSelect(lang.code)}
            >
              <span style={S.flag}>{lang.flag}</span>
              <span style={S.langName}>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const S = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    animation: "fadeIn 0.4s ease"
  },
  card: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 20,
    padding: "40px 36px",
    maxWidth: 500,
    width: "100%",
    textAlign: "center"
  },
  logo: {
    fontSize: 40,
    fontWeight: 800,
    letterSpacing: "-2px",
    marginBottom: 6
  },
  tag: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: "'Space Mono',monospace",
    letterSpacing: 4,
    color: "var(--muted)",
    verticalAlign: "middle",
    fontWeight: 400
  },
  sub: {
    color: "var(--muted)",
    fontSize: 14,
    marginTop: 8
  },
  sub2: {
    color: "var(--muted)",
    fontSize: 11,
    fontFamily: "'Space Mono',monospace",
    marginTop: 4,
    marginBottom: 28,
    opacity: 0.6
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10
  },
  btn: {
    background: "var(--surface2)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    padding: "14px 16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 12,
    transition: "border-color 0.2s, background 0.2s",
    animation: "fadeUp 0.4s ease both",
    textAlign: "left"
  },
  flag: {
    fontSize: 22,
    flexShrink: 0
  },
  langName: {
    color: "var(--text)",
    fontSize: 14,
    fontFamily: "'Syne',sans-serif",
    fontWeight: 600
  }
};
