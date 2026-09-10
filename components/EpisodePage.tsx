import VideoEmbed from "./VideoEmbed";
import type { Episode } from "../lib/editorial";

type EpisodePageProps = { episode: Episode };

export default function EpisodePage({ episode }: EpisodePageProps) {
  const guestLine = episode.guest
    ? `${episode.guest.name} · ${episode.guest.role}${episode.guest.company ? ` at ${episode.guest.company}` : ""}`
    : episode.event || "Sugar Bytes";

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="/"><span className="brand-mark">SB</span><span>Sugar Bytes</span></a>
        <nav className="nav"><a href="/learn">Learn</a><a href="/lab">Lab</a><a href="/dev-voices">Dev Voices</a><a href="/dx-check">DX Check</a><a href="/speaking">Speaking</a></nav>
        <a className="button button-small" href="/about">About</a>
      </header>

      <section className="page-hero episode-hero">
        <p className="kicker">{episode.series.toUpperCase()}</p>
        <h1>{episode.title}</h1>
        <p className="hero-text">{episode.dek}</p>
        <div className="tag-row"><span>{guestLine}</span>{episode.duration ? <span>{episode.duration}</span> : null}{episode.event ? <span>{episode.event}</span> : null}</div>
      </section>

      <section className="article-shell episode-shell">
        <VideoEmbed url={episode.videoUrl} title={episode.title} />

        {episode.guest ? (
          <section className="guest-card">
            <div><p className="kicker">GUEST</p><h2>{episode.guest.name}</h2><p>{episode.guest.role}{episode.guest.company ? ` · ${episode.guest.company}` : ""}</p></div>
            {episode.guest.bio ? <p>{episode.guest.bio}</p> : null}
          </section>
        ) : null}

        {episode.questions?.length ? <section><p className="kicker">QUESTIONS</p><div className="question-list">{episode.questions.map((question) => <p key={question}>{question}</p>)}</div></section> : null}
        {episode.takeaways?.length ? <section><p className="kicker">TAKEAWAYS</p>{episode.takeaways.map((item) => <div className="callout-card" key={item}><p>{item}</p></div>)}</section> : null}

        <div className="tag-row">{episode.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
        <div className="article-actions"><a className="button" href={episode.series === "Developer Tea" ? "/developer-tea" : "/dev-voices"}>Back to {episode.series}</a></div>
      </section>
    </main>
  );
}
