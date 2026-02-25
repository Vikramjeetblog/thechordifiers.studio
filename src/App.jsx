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
      { threshold: 0.16 },
    );

    const handleScroll = () => {
      document.documentElement.style.setProperty('--scrollY', `${window.scrollY}px`);
    };

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <header className="hero" id="top">
        <video className="hero-video" src={media.heroVideo} autoPlay muted loop playsInline />
        <div className="hero-overlay" />
        <div className="hero-ambient" />

        <div className="hero-content fade-in">
          <p className="hero-kicker">The Chordifiers Studio</p>
          <h1>
            A new era of <span>sound</span> is being built.
          </h1>
          <p>
            Under renovation to unveil an international-grade creative sanctuary for artists,
            producers, and students.
          </p>
          <div className="hero-actions">
            <LuxuryButton href="#artist-priority">Join Artist Priority Access</LuxuryButton>
            <LuxuryButton href="#students" variant="outline">
              Explore Courses
            </LuxuryButton>
          </div>
        </div>
      </header>

      <main>
        <Section
          id="vision"
          subtitle="Our Vision"
          title="More Than a Studio. A Home for Serious Creative Work."
          className="vision-editorial"
        >
          <div className="vision-grid fade-in">
            <div className="vision-statement-wrap">
              <p className="vision-statement">
                This is where artists return to create their most honest work.
              </p>
            </div>
            <div className="vision-asymmetry">
              <p className="vision-minimal-copy">
                Designed for emotional precision, private flow, and timeless output.
              </p>
              <img src={media.visionImage} alt="Sample cinematic studio interior" loading="lazy" />
            </div>
          </div>
        </Section>

        <Section id="experience" subtitle="The Experience" title="Built for Artistic Excellence">
          <ExperienceGrid />
        </Section>

        <Section
          id="students"
          subtitle="For Students"
          title="Master Music Production in a Real Studio Environment"
          className="alt-bg students-premium"
        >
          <div className="students-layout fade-in">
            <div className="students-main">
              <h3>Learn where real records are born.</h3>
              <p>
                Build your craft inside a premium professional environment with mentor-led sessions,
                practical workflows, and artist-first creative discipline.
              </p>
              <p className="students-highlight">Limited 30 Students Only</p>
              <LuxuryButton href="#student-priority">Join Student Priority List</LuxuryButton>
            </div>
            <div className="students-elegant-list">
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
          subtitle="Priority Access"
          title="Choose Your Launch Position"
          className="pricing-dramatic"
        >
          <PricingCards />
        </Section>

        <Section id="lead-capture" subtitle="Waitlist" title="Secure Your Spot">
          <div className="lead-columns">
            <div className="lead-column fade-in">
              <h3>Artists</h3>
              <LeadCaptureCard
                title="Artist Priority Waitlist"
                description="For artists and producers wanting launch-first access."
                audience="artist"
                tier="free"
                formId="artist-priority"
              />
              <LeadCaptureCard
                title="Founding Artist Priority Access — ₹99"
                description="Fast-track priority for founding members before public release."
                audience="artist"
                tier="founding"
                formId="founding-access"
                cta="Secure Founders Access — ₹99"
              />
            </div>

            <div className="lead-divider" />

            <div className="lead-column fade-in">
              <h3>Students</h3>
              <LeadCaptureCard
                title="Student Priority List"
                description="For early seats in upcoming professional batch openings."
                audience="student"
                tier="free"
                formId="student-priority"
              />
              <LeadCaptureCard
                title="Wildcard Collaboration Interest"
                description="For mentors and creative partners interested in collaborations."
                audience="artist"
                tier="wildcard"
                formId="wildcard-access"
              />
            </div>
          </div>
        </Section>

        <section className="closing fade-in">
          <h2>Under Renovations. Launching Soon.</h2>
          <p>For collaborations, early access, and launch announcements.</p>
          <a href="mailto:hello@samplechordifiers.com">hello@samplechordifiers.com</a>
        </section>
      </main>
    </div>
  );
}
