export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="section-inner">
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        {title ? <h2 className="section-title">{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}
