import { experienceSections } from '../data/content';

export default function ExperienceGrid() {
  return (
    <div className="experience-modern">
      {experienceSections.map((section, index) => (
        <article
          key={section.title}
          className={`experience-row fade-in ${index % 2 === 1 ? 'reverse' : ''}`.trim()}
        >
          <div className="experience-media-wrap">
            <img src={section.image} alt="Sample cinematic studio visual" loading="lazy" />
          </div>
          <div className="experience-copy">
            <p className="experience-label">Signature Experience</p>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
