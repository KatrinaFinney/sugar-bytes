export default function DevVoicesPage() {
  const questions = [
    "What are you building right now?",
    "What developer tool has impressed you lately?",
    "What makes documentation genuinely useful?",
    "What developer-experience problem do companies underestimate?",
    "If you could change one thing about your daily tools, what would it be?",
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Sugar Bytes home"><span className="brand-mark">SB</span><span>Sugar Bytes</span></a>
        <nav className="nav" aria-label="Primary navigation"><a href="/learn">Learn</a><a href="/lab">Lab</a><a href="/dev-voices">Dev Voices</a><a href="/dx-check">DX Check</a><a href="/speaking">Speaking</a></nav>
        <a className="button button-small" href="/about">About</a>
      </header>

      <section className="section">
        <div className="section-heading split-heading">
          <div><p className="kicker">DEV VOICES</p><h1>Conversations with the people who actually build software.</h1></div>
          <p>Short, practical conversations with working developers about tools, friction, documentation, onboarding, and what great developer experience looks like in the real world.</p>
        </div>

        <div className="voices-grid">
          <article className="feature-card">
            <div className="feature-label">SERIES FORMAT</div>
            <h2>15–20 minutes. Real experience. Useful takeaways.</h2>
            <p>Each episode centers the developer, not the product pitch. The goal is to listen for patterns, disagreements, and lessons that can make tools and technical education better.</p>
          </article>
          <aside className="tea-card">
            <p className="tea-icon">☕</p><p className="kicker">DEVELOPER TEA</p><h2>One question. No corporate answer.</h2>
            <p>The quick-hit field format for meetups, conferences, and hallway conversations.</p>
            <a className="text-link" href="/developer-tea">See Developer Tea →</a>
          </aside>
        </div>
      </section>

      <section className="section muted-section">
        <div className="section-heading"><p className="kicker">THE CORE QUESTIONS</p><h2>What we keep asking developers.</h2></div>
        <div className="program-grid">{questions.map((question, index) => <article className="program-card" key={question}><p className="kicker">0{index + 1}</p><h3>{question}</h3></article>)}</div>
      </section>

      <section className="section community-section"><div className="community-card"><p className="kicker">COMING SOON</p><h2>The first five voices.</h2><p>Frontend, backend, infrastructure, security, and DevRel perspectives will become the first Sugar Bytes developer-insight set.</p><div className="tag-row"><span>Frontend</span><span>Backend</span><span>Infrastructure</span><span>Security</span><span>DevRel</span></div></div></section>

      <footer><div className="brand"><span className="brand-mark">SB</span><span>Sugar Bytes</span></div><p>Build better. Understand deeper.</p><p>© 2026 Sugar Bytes</p></footer>
    </main>
  );
}
