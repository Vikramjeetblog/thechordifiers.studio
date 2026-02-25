import { experienceItems } from '../data/content';

export default function ExperienceGrid() {
  return (
    <div className="experience-grid">
      {experienceItems.map((item) => (
        <article key={item.text} className="experience-card fade-in">
          <span aria-hidden="true" className="experience-icon">
            {item.icon}
          </span>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
