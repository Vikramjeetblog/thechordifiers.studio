import { useEffect } from 'react';
import Section from './components/Section';
import LuxuryButton from './components/LuxuryButton';
import ExperienceGrid from './components/ExperienceGrid';
import PricingCards from './components/PricingCards';
import LeadCaptureCard from './components/LeadCaptureCard';
import { media, studentPoints } from './data/content';

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
        <div className="hero-grain" />
        <div className="hero-content fade-in">
          <p className="hero-kicker">The Chordifiers Studio</p>
          <h1>
            A new era of <span>sound</span> is being built.
          </h1>
          <p>
            We are currently under renovations, crafting a next-generation creative environment
            for artists, producers, and visionaries.
          </p>
          <div className="hero-actions">
            <LuxuryButton href="#artist-priority">Join Priority Artist Waitlist</LuxuryButton>
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
            <div className="vision-copy">
              <p>
                Every element is being rebuilt to honor emotion, craft, and creative identity. This
                is a sanctuary where artists push boundaries, students find mentorship, and stories
                become timeless records.
              </p>
            </div>
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

        <Section id="lead-capture" subtitle="Priority Funnel" title="Secure Your Launch Position">
          <div className="lead-columns">
            <div className="lead-column fade-in">
              <h3>For Artists</h3>
              <LeadCaptureCard
                title="Artist Priority Waitlist"
                description="For independent artists, bands, and producers wanting first launch notifications."
                audience="artist"
                tier="free"
                formId="artist-priority"
              />
              <LeadCaptureCard
                title="Founding Artist Priority Access — ₹99"
                description="Premium fast-track queue for founding artists before public launch opens."
                audience="artist"
                tier="founding"
                formId="founding-access"
                cta="Secure Founders Access — ₹99"
              />
            </div>

            <div className="lead-divider" />

            <div className="lead-column fade-in">
              <h3>For Students</h3>
              <LeadCaptureCard
                title="Student Priority List"
                description="For students seeking early seat access before course batches go public."
                audience="student"
                tier="free"
                formId="student-priority"
              />
              <LeadCaptureCard
                title="Wildcard Collaboration Interest"
                description="For mentors, labels, and collaborators exploring strategic launch partnerships."
                audience="artist"
                tier="wildcard"
                formId="wildcard-access"
              />
            </div>
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
