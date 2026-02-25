import LuxuryButton from './LuxuryButton';
import { foundersProgress } from '../data/content';

export default function PricingCards() {
  const progressPercentage = (foundersProgress.claimed / foundersProgress.total) * 100;

  return (
    <div className="pricing-grid">
      <article className="pricing-card fade-in">
        <p className="plan">Free Waitlist</p>
        <h3>Get launch notified first</h3>
        <p className="muted">Get notified when we launch.</p>
        <LuxuryButton href="#artist-waitlist" full>
          Join Free Waitlist
        </LuxuryButton>
      </article>

      <article className="pricing-card featured fade-in">
        <span className="badge">Limited 100 passes</span>
        <p className="plan">Founding Artist&apos;s Priority Access — ₹99</p>
        <h3>Own your spot before public launch</h3>
        <ul>
          <li>Priority booking before public launch</li>
          <li>2 complimentary jam/recording sessions</li>
          <li>Founding status</li>
          <li>Early access to studio and courses</li>
        </ul>
        <div className="progress-wrap">
          <p>
            {foundersProgress.claimed}/{foundersProgress.total} claimed
          </p>
          <div className="progress-track" aria-label="Founding access claimed progress">
            <div className="progress-fill" style={{ width: `${progressPercentage}%` }} />
          </div>
        </div>
        <LuxuryButton href="#founding-access" variant="outline" full>
          Upgrade to Founders Priority Access — ₹99
        </LuxuryButton>
      </article>
    </div>
  );
}
