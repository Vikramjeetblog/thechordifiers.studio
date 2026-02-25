export default function LeadCaptureCard({
  title,
  description,
  audience,
  tier,
  formId,
  cta = 'Secure My Spot',
}) {
  return (
    <article className="lead-card fade-in">
      <p className="plan">{title}</p>
      <p className="muted">{description}</p>
      <form id={formId} className="lead-form" data-audience={audience} data-tier={tier}>
        <input type="hidden" name="audience" value={audience} />
        <input type="hidden" name="tier" value={tier} />
        <input type="hidden" name="paymentStatus" value="pending" />
        <label>
          Name
          <input required type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input required type="email" name="email" placeholder="you@email.com" />
        </label>
        <label>
          Phone
          <input required type="tel" name="phone" placeholder="+91 XXXXXXXXXX" />
        </label>
        <button type="submit">{cta}</button>
      </form>
    </article>
  );
}
