import { useEffect } from 'react';
import Section from './components/Section';
import LuxuryButton from './components/LuxuryButton';
import ExperienceGrid from './components/ExperienceGrid';
import PricingCards from './components/PricingCards';
import { media, studentPoints } from './data/content';

function WaitlistForm({ id, audience, tier }) {
  return (
    <form id={id} className="lead-form">
      <input type="hidden" name="audience" value={audience} />
      <input type="hidden" name="tier" value={tier} />
      <input type="hidden" name="paymentStatus" value="pending" />
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="artist@email.com" />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" placeholder="+91 XXXXXXXXXX" />
      </label>
      <button type="submit">Secure My Spot</button>
    </form>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <header className="hero" id="top">
        <video className="hero-video" src={media.heroVideo} autoPlay muted loop playsInline />
        <div className="hero-overlay" />
        <div className="hero-content fade-in">
          <p className="hero-kicker">The Chordifiers Studio</p>
          <h1>A new era of sound is being built.</h1>
          <p>
            We are currently under renovations, crafting a next-generation creative environment
            for artists, producers, and visionaries.
          </p>
          <div className="hero-actions">
            <LuxuryButton href="#artist-waitlist">Join Priority Artist Waitlist</LuxuryButton>
            <LuxuryButton href="#students" variant="outline">
              Explore Courses
            </LuxuryButton>
            <LuxuryButton href="#vision" variant="ghost">
              Watch Studio Preview
            </LuxuryButton>
          </div>
        </div>
      </header>

      <main>
        <Section
          id="vision"
          subtitle="Our Vision"
          title="This Is More Than a Studio. This is your 2nd Home."
        >
          <div className="vision-grid fade-in">
            <p>
              Every element is being rebuilt to honor emotion, craft, and creative identity. This
              is a sanctuary where artists push boundaries, students find mentorship, and stories
              become timeless records.
            </p>
            <img src={media.visionImage} alt="Sample cinematic studio interior" loading="lazy" />
          </div>
        </Section>

        <Section
          id="experience"
          subtitle="The Experience"
          title="Built & Designed for Serious Artistic Work"
        >
          <ExperienceGrid />
        </Section>

        <Section id="students" subtitle="Learning Path" title="For Students" className="alt-bg">
          <div className="students-layout fade-in">
            <div>
              <p>
                Learn music production inside a real award-winning studio environment.
              </p>
              <LuxuryButton href="#student-priority">Join Student Priority List</LuxuryButton>
            </div>
            <div className="diploma-card">
              <p className="section-subtitle">Diploma & Certification Teaser</p>
              <ul>
                {studentPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <LuxuryButton href="#course-details" variant="outline" full>
                Get Course Details
              </LuxuryButton>
            </div>
          </div>
        </Section>

        <Section
          id="pricing"
          subtitle="Access Tiers"
          title="Choose Your Launch Access"
          className="pricing-section"
        >
          <PricingCards />
        </Section>

        <Section id="artist-waitlist" subtitle="Priority Funnel" title="Artist Priority Waitlist">
          <div className="forms-grid fade-in">
            <WaitlistForm id="artist-form" audience="artist" tier="free" />
            <WaitlistForm id="founder-form" audience="artist" tier="founding" />
          </div>
        </Section>

        <section className="closing">
          <h2>Under Renovations. Launching Soon.</h2>
          <p>For collaborations, early access, and announcements.</p>
          <a href="mailto:hello@samplechordifiers.com">hello@samplechordifiers.com</a>
          <div className="socials">
            <a href="#" aria-label="Instagram placeholder link">
              Instagram
            </a>
            <a href="#" aria-label="YouTube placeholder link">
              YouTube
            </a>
            <a href="#" aria-label="LinkedIn placeholder link">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
