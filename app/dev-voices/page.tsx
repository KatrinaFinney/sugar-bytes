import EditorialCard from "../../components/EditorialCard";
import { episodes } from "../../lib/editorial";

export default function DevVoicesPage() {
  const questions = [
    "What are you building right now?",
    "What developer tool has impressed you lately?",
    "What makes documentation genuinely useful?",
    "What developer-experience problem do companies underestimate?",
    "If you could change one thing about your daily tools, what would it be?",
  ];
  const published = episodes.filter((episode) => episode.series === "Dev Voices");

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
          <article className="feature-card"><div className="feature-label">SERIES FORMAT</div><h2>15–20 minutes. Real experience. Useful takeaways.</h2><p>Each episode centers the developer, not the product pitch. The goal is to listen for patterns, disagreements, and lessons that can make tools and technical education better.</p></article>
          <aside className="tea-card"><p className="tea-icon">☕</p><p className="kicker">DEVELOPER TEA</p><h2>One question. No corporate answer.</h2><p>The quick-hit field format for meetups, conferences, and hallway conversations.</p><a className="text-link" href="/developer-tea">See Developer Tea →</a></aside>
        </div>
      </section>

      <section className="section muted-section">
        <div className="section-heading"><p className="kicker">EPISODES</p><h2>{published.length ? "Latest conversations." : "The conversation is just getting started."}</h2><p>{published.length ? "Developer stories, recurring themes, and practical takeaways from the people doing the work." : "Dev Voices is built to grow with the community. New conversations will be added as developers share what is working, what is frustrating, and what they wish tool builders understood better."}</p></div>
        {published.length ? <div className="program-grid">{published.map((episode) => <EditorialCard key={episode.slug} eyebrow="DEV VOICES" title={episode.title} copy={episode.dek} meta={episode.guest ? `${episode.guest.name} · ${episode.guest.role}` : episode.event} href={`/dev-voices/${episode.slug}`} />)}</div> : <div className="empty-state"><p>The first set will bring together perspectives from frontend, backend, infrastructure, security, and DevRel so the patterns are useful across roles, not just inside one corner of software.</p></div>}
      </section>

      <section className="section"><div className="section-heading"><p className="kicker">THE CORE QUESTIONS</p><h2>What we keep asking developers.</h2></div><div className="program-grid">{questions.map((question, index) => <article className="program-card" key={question}><p className="kicker">0{index + 1}</p><h3>{question}</h3></article>)}</div></section>

      <footer><div className="brand"><span className="brand-mark">SB</span><span>Sugar Bytes</span></div><p>Build better. Understand deeper.</p><p>© 2026 Sugar Bytes</p></footer>
    </main>
  );
}
