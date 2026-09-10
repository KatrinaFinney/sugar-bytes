import { notFound } from "next/navigation";
import { dxChecks, getDxCheck } from "../../../lib/editorial";

export function generateStaticParams() {
  return dxChecks.map((check) => ({ slug: check.slug }));
}

export default async function DxCheckDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const check = getDxCheck(slug);
  if (!check) notFound();

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="/"><span className="brand-mark">SB</span><span>Sugar Bytes</span></a>
        <nav className="nav"><a href="/learn">Learn</a><a href="/lab">Lab</a><a href="/dev-voices">Dev Voices</a><a href="/dx-check">DX Check</a><a href="/speaking">Speaking</a></nav>
        <a className="button button-small" href="/about">About</a>
      </header>

      <section className="page-hero">
        <p className="kicker">DX CHECK · {check.product.toUpperCase()}</p>
        <h1>{check.title}</h1>
        <p className="hero-text">{check.dek}</p>
        <div className="tag-row"><span>{check.date}</span>{check.timeToFirstSuccess ? <span>First success: {check.timeToFirstSuccess}</span> : null}</div>
      </section>

      <section className="article-shell">
        <section><p className="kicker">THE SCORECARD</p><div className="dx-grid">{check.criteria.map((item) => <article className="program-card" key={item.label}><h2>{item.label}</h2><p>{item.observation}</p></article>)}</div></section>
        <section><p className="kicker">WHAT WORKED</p>{check.wins.map((item) => <div className="callout-card" key={item}><p>{item}</p></div>)}</section>
        <section><p className="kicker">FRICTION</p>{check.friction.map((item) => <div className="callout-card" key={item}><p>{item}</p></div>)}</section>
        <section><p className="kicker">RECOMMENDATIONS</p>{check.recommendations.map((item) => <div className="callout-card" key={item}><p>{item}</p></div>)}</section>
        <div className="article-actions"><a className="button" href="/dx-check">Back to DX Check</a></div>
      </section>
    </main>
  );
}
