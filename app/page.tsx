const programs = [
  {
    eyebrow: "LEARN",
    title: "Clear explanations. Full technical depth.",
    copy: "Tutorials, debugging lessons, and practical breakdowns for developers who want to understand what their code is actually doing.",
    cta: "Explore Learn",
    href: "/learn",
  },
  {
    eyebrow: "THE LAB",
    title: "Build it. Break it. Understand it.",
    copy: "Runnable demos, integrations, experiments, and reference projects built to explore how software behaves outside the happy path.",
    cta: "Enter the Lab",
    href: "/lab",
  },
  {
    eyebrow: "DX CHECK",
    title: "Developer tools, tested like a developer.",
    copy: "Hands-on reviews of APIs, SDKs, docs, onboarding, and error states with useful praise, useful criticism, and concrete recommendations.",
    cta: "See DX Checks",
    href: "/dx-check",
  },
];

const teaQuestions = [
  "What makes documentation actually useful?",
  "What developer tool frustrated you this week?",
  "What makes you trust a new API?",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Sugar Bytes home">
          <span className="brand-mark">SB</span>
          <span>Sugar Bytes</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="/learn">Learn</a>
          <a href="/lab">Lab</a>
          <a href="/dev-voices">Dev Voices</a>
          <a href="/dx-check">DX Check</a>
          <a href="/speaking">Speaking</a>
        </nav>
        <a className="button button-small" href="#about">About</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">DEVELOPER EDUCATION + ADVOCACY</p>
          <h1 className="hero-title">
            Sweet concepts, served
            <span className="hero-title-byte">byte-sized.</span>
          </h1>
          <p className="hero-text">
            Practical experiments, developer conversations, and technical education about APIs, AI,
            developer experience, and the tools we build with.
          </p>
          <div className="hero-actions">
            <a className="button" href="/dev-voices">Explore Dev Voices</a>
            <a className="text-link" href="/learn">Start learning →</a>
          </div>
        </div>

        <div className="hero-brand-panel" aria-label="Sugar Bytes brand and editorial promise">
          <div className="hero-logo-lockup" aria-label="Sugar Bytes">
            <span className="hero-logo-mark" aria-hidden="true"></span>
            <span className="hero-wordmark" aria-hidden="true">
              <span className="hero-wordmark-sugar">Sugar</span>
              <span className="hero-wordmark-bytes">Bytes</span>
            </span>
          </div>
          <div className="hero-promise">
            <p className="comment">// the Sugar Bytes promise</p>
            <p><span className="code-keyword">const</span> explanation = <span className="code-string">"clear"</span>;</p>
            <p><span className="code-keyword">const</span> depth = <span className="code-string">"still technical"</span>;</p>
            <p><span className="code-keyword">const</span> curiosity = <span className="code-string">"required"</span>;</p>
            <p className="terminal-result">→ build better. understand deeper.</p>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Sugar Bytes content pillars">
        <span>TEACH</span><i>•</i><span>BUILD</span><i>•</i><span>LISTEN</span><i>•</i><span>ADVOCATE</span>
      </section>

      <section className="section" id="dev-voices">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">DEV VOICES</p>
            <h2>What are developers actually experiencing?</h2>
          </div>
          <p>
            Short conversations with working developers about the tools they use, the problems they encounter,
            and what makes a developer experience genuinely good.
          </p>
        </div>

        <div className="voices-grid">
          <article className="feature-card">
            <div className="feature-label">GROWING SERIES</div>
            <h3>Different developers. Shared friction. Better questions.</h3>
            <p>
              Dev Voices brings together perspectives from frontend, backend, infrastructure, security,
              and DevRel to surface the patterns that are easy to miss when everyone stays inside their own stack.
            </p>
            <a className="text-link" href="/dev-voices">Explore Dev Voices →</a>
          </article>

          <aside className="tea-card" id="developer-tea">
            <p className="tea-icon">☕</p>
            <p className="kicker">DEVELOPER TEA</p>
            <h3>One question. No corporate answer.</h3>
            <p>
              Quick-hit interviews from meetups, conferences, and developer events. The useful, funny,
              occasionally spicy takes developers give when you ask the right question.
            </p>
            <div className="tea-questions">
              {teaQuestions.map((question) => <span key={question}>{question}</span>)}
            </div>
            <a className="text-link" href="/developer-tea">Get the Developer Tea →</a>
          </aside>
        </div>
      </section>

      <section className="section muted-section" id="learn">
        <div className="section-heading">
          <p className="kicker">THE WORK</p>
          <h2>Teach. Build. Advocate.</h2>
          <p>Every piece should leave a developer with something useful: an idea, an example, a better question, or code they can actually run. The library will grow, but usefulness stays the filter.</p>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.eyebrow}>
              <p className="kicker">{program.eyebrow}</p>
              <h3>{program.title}</h3>
              <p>{program.copy}</p>
              <a className="text-link" href={program.href}>{program.cta} →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section community-section">
        <div className="community-card">
          <p className="kicker">IN THE COMMUNITY</p>
          <h2>Developer advocacy happens around developers.</h2>
          <p>
            Meetup interviews, event notes, hallway conversations, quick questions, and community insights
            from Atlanta and beyond. Sugar Bytes starts local, listens closely, and expands through the communities and conversations that make the work better.
          </p>
          <div className="tag-row">
            <span>Meetups</span><span>Interviews</span><span>Event recaps</span><span>Community insights</span>
          </div>
        </div>
      </section>

      <section className="section speaking" id="speaking">
        <div>
          <p className="kicker">SPEAKING</p>
          <h2>Technical talks for people who actually build things.</h2>
          <a className="text-link" href="/speaking">View speaking topics →</a>
        </div>
        <div className="talk-list">
          <article><span>01</span><div><h3>Breaking APIs on Purpose</h3><p>Authentication failures, bad requests, rate limits, retries, and learning to debug from the failure outward.</p></div></article>
          <article><span>02</span><div><h3>Your Webhook Worked. Until It Didn’t.</h3><p>Retries, duplicate events, signatures, idempotency, and designing integrations for the real world.</p></div></article>
          <article><span>03</span><div><h3>Developer Advocacy Is a Listening Job</h3><p>Why great DevRel moves developer insight back into product, not just product messages out to developers.</p></div></article>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div>
          <p className="kicker">ABOUT SUGAR BYTES</p>
          <h2>Built for developers. Informed by developers.</h2>
        </div>
        <div>
          <p>
            Sugar Bytes is an independent developer education and advocacy platform focused on making technical ideas clearer, more useful, and easier to put into practice.
          </p>
          <p>
            Through tutorials, experiments, developer conversations, community insight, and hands-on DX analysis, Sugar Bytes examines how software gets built, where developers encounter friction, and what better developer experiences can look like.
          </p>
          <p>
            The platform is designed to grow alongside the community it serves: publishing what is useful, testing what is unclear, and turning real developer experience into better questions, better resources, and better tools.
          </p>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">SB</span><span>Sugar Bytes</span></div>
        <p>Build better. Understand deeper.</p>
        <p>© 2026 Sugar Bytes</p>
      </footer>
    </main>
  );
}
