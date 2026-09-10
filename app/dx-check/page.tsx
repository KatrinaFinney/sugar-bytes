export default function DxCheckPage() {
  const criteria = ["Time to first success", "Documentation clarity", "Authentication friction", "Error quality", "Code examples", "Discoverability"];
  return (
    <main>
      <header className="site-header"><a className="brand" href="/"><span className="brand-mark">SB</span><span>Sugar Bytes</span></a><nav className="nav"><a href="/learn">Learn</a><a href="/lab">Lab</a><a href="/dev-voices">Dev Voices</a><a href="/dx-check">DX Check</a><a href="/speaking">Speaking</a></nav><a className="button button-small" href="/about">About</a></header>
      <section className="section"><div className="section-heading split-heading"><div><p className="kicker">DX CHECK</p><h1>Developer tools, tested like a developer.</h1></div><p>Hands-on reviews of APIs, SDKs, docs, onboarding, and failure states, with useful praise, useful criticism, and concrete recommendations.</p></div><div className="program-grid">{criteria.map((item, index) => <article className="program-card" key={item}><p className="kicker">0{index + 1}</p><h2>{item}</h2></article>)}</div></section>
      <section className="section community-section"><div className="community-card"><p className="kicker">THE METHOD</p><h2>Sign up. Build something. Break something. Document the friction.</h2><p>Each DX Check follows the same developer journey so the observations are grounded in actual use, not surface-level commentary.</p></div></section>
      <footer><div className="brand"><span className="brand-mark">SB</span><span>Sugar Bytes</span></div><p>Build better. Understand deeper.</p><p>© 2026 Sugar Bytes</p></footer>
    </main>
  );
}
