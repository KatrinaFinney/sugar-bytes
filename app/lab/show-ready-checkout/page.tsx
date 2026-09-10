export default function ShowReadyCheckoutLabPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="kicker">THE LAB · WEBHOOK RELIABILITY</p>
        <h1>Show-Ready Checkout</h1>
        <p className="hero-text">
          A compact Node/Express project built to demonstrate safer webhook handling with HMAC signature verification, idempotency, automated tests, and CI.
        </p>
      </section>

      <section className="section">
        <div className="program-grid">
          <article className="program-card">
            <p className="kicker">PROBLEM</p>
            <h2>Success can still be dangerous.</h2>
            <p>A provider may retry the same event. Without idempotency, a successful handler can repeat a side effect that should only happen once.</p>
          </article>
          <article className="program-card">
            <p className="kicker">PATTERNS</p>
            <h2>Verify, identify, process safely.</h2>
            <p>The project demonstrates request signing, duplicate-event protection, deterministic behavior, and automated verification of the unhappy path.</p>
          </article>
          <article className="program-card">
            <p className="kicker">DEVREL VALUE</p>
            <h2>Built to teach, not just to ship.</h2>
            <p>The implementation is intentionally small enough to explain clearly, demo live, break on purpose, and use as a reference project.</p>
          </article>
        </div>
      </section>

      <section className="section community-section">
        <div className="community-card">
          <p className="kicker">PAIR IT WITH THE TUTORIAL</p>
          <h2>Your webhook worked. Then it worked again.</h2>
          <p>Read the companion breakdown on duplicate delivery, signatures, retries, and idempotency.</p>
          <a className="text-link" href="/learn/webhook-worked-twice">Read the tutorial →</a>
        </div>
      </section>
    </main>
  );
}
