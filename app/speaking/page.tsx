export default function SpeakingPage() {
  const talks = [
    { title: "Breaking APIs on Purpose", copy: "Authentication failures, bad requests, rate limits, retries, and learning to debug from the failure outward." },
    { title: "Your Webhook Worked. Until It Didn’t.", copy: "Retries, duplicate events, signatures, idempotency, and designing integrations for the real world." },
    { title: "Developer Advocacy Is a Listening Job", copy: "Why great DevRel moves developer insight back into product, not just product messages out to developers." },
  ];
  return (
    <main>
      <header className="site-header"><a className="brand" href="/"><span className="brand-mark">SB</span><span>Sugar Bytes</span></a><nav className="nav"><a href="/learn">Learn</a><a href="/lab">Lab</a><a href="/dev-voices">Dev Voices</a><a href="/dx-check">DX Check</a><a href="/speaking">Speaking</a></nav><a className="button button-small" href="/about">About</a></header>
      <section className="section"><div className="section-heading"><p className="kicker">SPEAKING</p><h1>Technical talks for people who actually build things.</h1><p>Talks and live education about APIs, integrations, reliability, developer experience, AI, and the lessons hidden inside failure. These topics are designed to evolve through real conversations, demos, and questions from developer communities.</p></div><div className="talk-list">{talks.map((talk, index) => <article key={talk.title}><span>0{index + 1}</span><div><h2>{talk.title}</h2><p>{talk.copy}</p></div></article>)}</div></section>
      <section className="section community-section"><div className="community-card"><p className="kicker">ON THE ROADMAP</p><h2>Built for meetups, workshops, and bigger rooms.</h2><p>Sugar Bytes speaking starts with practical, developer-first sessions and grows from there. Local communities are the proving ground, with each talk sharpened through live questions, real implementation stories, and the conversations that happen after the slides end.</p><div className="tag-row"><span>Meetups</span><span>Webinars</span><span>Workshops</span><span>Conferences</span></div></div></section>
      <footer><div className="brand"><span className="brand-mark">SB</span><span>Sugar Bytes</span></div><p>Build better. Understand deeper.</p><p>© 2026 Sugar Bytes</p></footer>
    </main>
  );
}
