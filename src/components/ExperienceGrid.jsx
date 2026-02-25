import { experienceItems } from '../data/content';

export default function ExperienceGrid() {
  const [primary, ...secondary] = experienceItems;

  return (
    <div className="experience-layout">
      <article className="experience-card primary fade-in">
        <p className="experience-eyebrow">Signature Environment</p>
        <h3>{primary.text}</h3>
        <p>
          Crafted as a focused atmosphere where performances are captured with emotion, detail,
          and intention.
        </p>
      </article>

      <div className="experience-stack">
        {secondary.slice(0, 2).map((item) => (
          <article key={item.text} className="experience-card fade-in">
            <span aria-hidden="true" className="experience-icon">
              {item.icon}
            </span>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <article className="experience-card wide fade-in">
        <div>
          <p className="experience-eyebrow">Creative Momentum</p>
          <h3>Private Zones. Mentored Sessions. Uninterrupted Flow.</h3>
        </div>
        <ul>
          {secondary.slice(2).map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
