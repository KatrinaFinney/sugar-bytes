export default function LabPage() {
  const projects = [
    { title: "Show-Ready Checkout", copy: "A webhook reliability demo covering HMAC verification, idempotency, automated tests, and CI." },
    { title: "API Rescue", copy: "A planned AI-assisted debugging tool for API failures, focused on useful diagnosis instead of vague error summaries." },
  ];
  return (
    <main>
      <header className="site-header"><a className="brand" href="/"><span className="brand-mark">SB</span><span>Sugar Bytes</span></a><nav className="nav"><a href="/learn">Learn</a><a href="/lab">Lab</a><a href="/dev-voices">Dev Voices</a><a href="/dx-check">DX Check</a><a href="/speaking">Speaking</a></nav><a className="button button-small" href="/about">About</a></header>
      <section className="section"><div className="section-heading"><p className="kicker">THE LAB</p><h1>Build it. Break it. Understand it.</h1><p>Runnable experiments, integrations, and reference projects built to explore how software behaves outside the happy path.</p></div><div className="program-grid">{projects.map((project, index) => <article className="program-card" key={project.title}><p className="kicker">EXPERIMENT 0{index + 1}</p><h2>{project.title}</h2><p>{project.copy}</p></article>)}</div></section>
      <section className="section muted-section"><div className="section-heading"><p className="kicker">LAB RULE</p><h2>Every build should teach something.</h2><p>The point is not to collect side projects. Each experiment should produce a runnable example, a technical explanation, and at least one lesson another developer can use.</p></div></section>
      <footer><div className="brand"><span className="brand-mark">SB</span><span>Sugar Bytes</span></div><p>Build better. Understand deeper.</p><p>© 2026 Sugar Bytes</p></footer>
    </main>
  );
}
