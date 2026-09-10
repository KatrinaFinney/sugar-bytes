export default function WebhookWorkedTwicePage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="kicker">LEARN · WEBHOOKS</p>
        <h1>Your webhook worked. Then it worked again.</h1>
        <p className="hero-text">A practical guide to signature verification, idempotency, duplicate events, retries, and building webhook handlers that behave safely in the real world.</p>
      </section>

      <section className="article-shell">
        <p className="article-lede">Webhook systems are easy to demo and surprisingly easy to get wrong in production. The dangerous case is not always a failed webhook. Sometimes the dangerous case is a successful webhook that runs twice.</p>

        <h2>Why duplicate delivery matters</h2>
        <p>Providers retry events for good reasons: timeouts, transient failures, uncertain acknowledgements, and network problems. Your application has to assume that the same event may arrive more than once.</p>

        <h2>1. Verify the sender</h2>
        <p>Before processing the event, validate the request signature using the provider's signing secret. Signature verification helps you reject forged requests and confirms the payload has not been altered in transit.</p>

        <h2>2. Make processing idempotent</h2>
        <p>Give each event a durable identity and record whether it has already been handled. If the same event arrives again, return a successful response without repeating side effects such as charging a customer, creating an order, or sending a notification twice.</p>

        <h2>3. Separate acknowledgement from side effects</h2>
        <p>Keep the webhook path predictable. Validate quickly, decide whether the event is new, and make side effects resilient. The goal is to avoid turning a temporary provider retry into a duplicate business action.</p>

        <h2>4. Test the unhappy path on purpose</h2>
        <p>Send the same payload twice. Break the signature. Simulate a timeout. Replay an event. Good webhook testing should prove that your handler remains safe when delivery is messy.</p>

        <div className="callout-card">
          <p className="kicker">SUGAR BYTE</p>
          <h3>Reliable integrations assume duplication, delay, and failure.</h3>
          <p>If your webhook design only works when every request arrives exactly once and in perfect order, it is not production-safe yet.</p>
        </div>

        <h2>What this demonstrates</h2>
        <p>This pattern combines API security, reliability, testing, and developer experience. It is also the foundation for the Show-Ready Checkout project, where HMAC verification, idempotency, and automated tests are used to make duplicate delivery observable and safe.</p>

        <div className="article-actions">
          <a className="button" href="/lab">See the Lab</a>
          <a className="text-link" href="/learn">Back to Learn →</a>
        </div>
      </section>
    </main>
  );
}
