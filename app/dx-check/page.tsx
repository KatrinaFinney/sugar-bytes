import EditorialCard from "../../components/EditorialCard";
import { dxChecks } from "../../lib/editorial";

export default function DxCheckPage() {
  const criteria = ["Time to first success", "Documentation clarity", "Authentication friction", "Error quality", "Code examples", "Discoverability"];

  return (
    <main>
      <header className="site-header"><a className="brand" href="/"><span className="brand-mark">SB</span><span>Sugar Bytes</span></a><nav className="nav"><a href="/learn">Learn</a><a href="/lab">Lab</a><a href="/dev-voices">Dev Voices</a><a href="/dx-check">DX Check</a><a href="/speaking">Speaking</a></nav><a className="button button-small" href="/about">About</a></header>
      <section className="section"><div className="section-heading split-heading"><div><p className="kicker">DX CHECK</p><h1>Developer tools, tested like a developer.</h1></div><p>Hands-on reviews of APIs, SDKs, docs, onboarding, and failure states, with useful praise, useful criticism, and concrete recommendations.</p></div></section>

      <section className="section muted-section">
        <div className="section-heading"><p className="kicker">PUBLISHED CHECKS</p><h2>{dxChecks.length ? "Hands-on developer journeys." : "A growing record of developer experience in the wild."}</h2><p>{dxChecks.length ? "Each review follows the same method so the observations are comparable and grounded in actual use." : "DX Check is designed around real use, not screenshots or first impressions. Reviews are added after the full journey has been worked through: sign up, authenticate, build, break, recover, and document what helped or got in the way."}</p></div>
        {dxChecks.length ? <div className="program-grid">{dxChecks.map((check) => <EditorialCard key={check.slug} eyebrow="DX CHECK" title={check.title} copy={check.dek} meta={check.product} href={`/dx-check/${check.slug}`} />)}</div> : <div className="empty-state"><p>The scorecard is already set. As reviews are published, this section will make it easier to compare where developer products create momentum, where they create friction, and what teams could improve.</p></div>}
      </section>

      <section className="section"><div className="section-heading"><p className="kicker">THE SCORECARD</p><h2>What every DX Check evaluates.</h2></div><div className="program-grid">{criteria.map((item, index) => <article className="program-card" key={item}><p className="kicker">0{index + 1}</p><h2>{item}</h2></article>)}</div></section>
      <section className="section community-section"><div className="community-card"><p className="kicker">THE METHOD</p><h2>Sign up. Build something. Break something. Document the friction.</h2><p>Each DX Check follows the same developer journey so the observations are grounded in actual use, not surface-level commentary.</p></div></section>
      <footer><div className="brand"><span className="brand-mark">SB</span><span>Sugar Bytes</span></div><p>Build better. Understand deeper.</p><p>© 2026 Sugar Bytes</p></footer>
    </main>
  );
}
