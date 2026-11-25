export default function SectionHead({ id, eyebrow, title, subtitle }) {
  return (
    <div className="sec-head" data-reveal>
      {eyebrow && <span className="eyebrow caption-3">{eyebrow}</span>}
      <h2 className="heading-3" id={id}>{title}</h2>
      {subtitle && <p className="body-7 muted">{subtitle}</p>}
    </div>
  );
}
