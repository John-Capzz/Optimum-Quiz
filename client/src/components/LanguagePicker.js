export default function LanguagePicker({ onSelect, flags, names }) {
  const languages = Object.keys(flags).map(code => ({ code, flag: flags[code], name: names[code] }));

  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:24, animation:"fadeIn 0.4s ease" }}>
      <div style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:20, padding:"40px 36px", maxWidth:500, width:"100%", textAlign:"center" }}>
        <div style={{ fontSize:40, fontWeight:800, letterSpacing:"-2px", marginBottom:6 }}>
          <span style={{ color:"var(--accent)" }}>O</span>ptimum
          <span style={{ marginLeft:10, fontSize:12, fontFamily:"'Space Mono',monospace", letterSpacing:4, color:"var(--muted)", verticalAlign:"middle", fontWeight:400 }}>TRIVIA</span>
        </div>
        <p style={{ color:"var(--muted)", fontSize:14, marginTop:8 }}>Select your language to continue</p>
        <p style={{ color:"var(--muted)", fontSize:11, fontFamily:"'Space Mono',monospace", marginTop:4, marginBottom:28, opacity:0.6 }}>
          Chọn ngôn ngữ · 选择语言 · Выберите язык · ভাষা বেছে নিন
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
          {languages.map((lang, i) => (
            <button key={lang.code} onClick={() => onSelect(lang.code)}
              style={{ background:"var(--surface2)", border:"1px solid var(--border)", borderRadius:12, padding:"14px 16px", cursor:"pointer", display:"flex", alignItems:"center", gap:12, textAlign:"left", animation:`fadeUp 0.4s ease ${i * 0.05}s both` }}>
              <span style={{ fontSize:22, flexShrink:0 }}>{lang.flag}</span>
              <span style={{ color:"var(--text)", fontSize:14, fontFamily:"'Syne',sans-serif", fontWeight:600 }}>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
