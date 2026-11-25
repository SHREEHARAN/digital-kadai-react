export default function SectionHead({ id, title, subtitle }) {
  return (
    <div className="sec-head">
      <h2 className="heading-3" id={id}>{title}</h2>
      {subtitle && <p className="body-7 muted">{subtitle}</p>}
    </div>
  );
}
