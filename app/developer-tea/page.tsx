export default function DeveloperTeaPage() {
  const prompts = [
    "What makes documentation actually useful?",
    "What developer tool frustrated you this week?",
    "What makes you trust a new API?",
    "What is the most underrated developer skill?",
    "What should tool companies understand better about developers?",
  ];

  return (
    <main>
      <header className="site-header"><a className="brand" href="/"><span className="brand-mark">SB</span><span>Sugar Bytes</span></a><nav className="nav"><a href="/learn">Learn</a><a href="/lab">Lab</a><a href="/dev-voices">Dev Voices</a><a href="/dx-check">DX Check</a><a href="/speaking">Speaking</a></nav><a className="button button-small" href="/about">About</a></header>
      <section className="section">
        <div className="section-heading split-heading"><div><p className="tea-icon">☕</p><p className="kicker">DEVELOPER TEA</p><h1>One question. No corporate answer.</h1></div><p>Fast interviews from meetups, conferences, and developer events. One useful question, several honest answers, and just enough tea to make the insight memorable.</p></div>
        <div className="program-grid">{prompts.map((prompt) => <article className="program-card" key={prompt}><p className="kicker">ASK THIS</p><h3>{prompt}</h3></article>)}</div>
      </section>
      <section className="section muted-section"><div className="section-heading"><p className="kicker">HOW IT WORKS</p><h2>Capture the room, not just the stage.</h2><p>At each event, Sugar Bytes can ask one recurring question to several developers, publish the individual answers, then cut them into one short montage that surfaces patterns across the community.</p></div></section>
      <section className="section community-section"><div className="community-card"><p className="kicker">FIELD NOTES</p><h2>Atlanta is the starting point.</h2><p>PyATL and other local developer events give Developer Tea a real community base from day one, with room to expand to conferences and developer communities beyond Atlanta.</p><div className="tag-row"><span>Meetups</span><span>Conferences</span><span>Hallway interviews</span><span>Quick takes</span></div></div></section>
      <footer><div className="brand"><span className="brand-mark">SB</span><span>Sugar Bytes</span></div><p>Build better. Understand deeper.</p><p>© 2026 Sugar Bytes</p></footer>
    </main>
  );
}
