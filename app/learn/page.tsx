export default function LearnPage() {
  const topics = [
    {
      title: "Your webhook worked. Then it worked again.",
      copy: "A practical guide to signatures, retries, idempotency, duplicate events, and safer webhook handlers.",
      href: "/learn/webhook-worked-twice",
      status: "Read now",
    },
    {
      title: "Idempotency Without the Textbook Definition",
      copy: "A practical explanation of how duplicate events happen and how to design around them.",
      href: "#",
      status: "Coming soon",
    },
    {
      title: "Why Your Integration Works Locally and Fails in Production",
      copy: "A field guide to environment differences, auth, network behavior, logs, and debugging the real deployment.",
      href: "#",
      status: "Coming soon",
    },
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/"><span className="brand-mark">SB</span><span>Sugar Bytes</span></a>
        <nav className="nav"><a href="/learn">Learn</a><a href="/lab">Lab</a><a href="/dev-voices">Dev Voices</a><a href="/dx-check">DX Check</a><a href="/speaking">Speaking</a></nav>
        <a className="button button-small" href="/about">About</a>
      </header>

      <section className="section">
        <div className="section-heading">
          <p className="kicker">LEARN</p>
          <h1>Clear explanations. Full technical depth.</h1>
          <p>Tutorials, debugging lessons, and practical breakdowns for developers who want to understand what their code is actually doing.</p>
        </div>

        <div className="program-grid">
          {topics.map((topic, index) => (
            <article className="program-card" key={topic.title}>
              <p className="kicker">0{index + 1}</p>
              <h2>{topic.title}</h2>
              <p>{topic.copy}</p>
              {topic.href === "#" ? (
                <span className="text-link">{topic.status}</span>
              ) : (
                <a className="text-link" href={topic.href}>{topic.status} →</a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section community-section">
        <div className="community-card">
          <p className="kicker">EDITORIAL PROMISE</p>
          <h2>Easier to understand does not mean watered down.</h2>
          <p>Sugar Bytes starts from real implementation details, then explains them with enough context that developers can use the idea, debug it, and make better decisions with it.</p>
        </div>
      </section>

      <footer><div className="brand"><span className="brand-mark">SB</span><span>Sugar Bytes</span></div><p>Build better. Understand deeper.</p><p>© 2026 Sugar Bytes</p></footer>
    </main>
  );
}
