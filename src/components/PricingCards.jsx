import LuxuryButton from './LuxuryButton';
import { foundersProgress } from '../data/content';

export default function PricingCards() {
  const progressPercentage = (foundersProgress.claimed / foundersProgress.total) * 100;

  return (
    <div className="pricing-dramatic-wrap">
      <p className="founders-limit">Only 100 Founding Access Passes</p>

      <article className="pricing-card featured fade-in">
        <span className="badge">Most Exclusive</span>
        <p className="plan">Founding Artist&apos;s Priority Access — ₹99</p>
        <h3>Reserved entry before public launch</h3>
        <ul>
          <li>Priority booking before public launch</li>
          <li>2 complimentary jam/recording sessions</li>
          <li>Founding status</li>
          <li>Early access to studio and courses</li>
        </ul>
        <div className="progress-wrap">
          <p className="scarcity-copy">
            {foundersProgress.claimed}/{foundersProgress.total} claimed · only{' '}
            {foundersProgress.total - foundersProgress.claimed} remaining
          </p>
          <div className="progress-track" aria-label="Founding access claimed progress">
            <div className="progress-fill" style={{ width: `${progressPercentage}%` }} />
          </div>
        </div>
        <LuxuryButton href="#founding-access" variant="outline" full>
          Secure Founders Access – ₹99
        </LuxuryButton>
      </article>

      <article className="pricing-card secondary fade-in">
        <p className="plan">Free Waitlist</p>
        <h3>Enter the launch queue</h3>
        <p className="muted">Receive launch updates and public opening announcements.</p>
        <LuxuryButton href="#artist-priority" variant="ghost" full>
          Join Free Waitlist
        </LuxuryButton>
      </article>
    </div>
  );
}
