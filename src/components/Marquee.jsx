import Icon from "./Icon";
import { marquee } from "../content";

// An endlessly scrolling strip of the places we look after.
export default function Marquee() {
  const row = (hidden) => (
    <ul className="mq-row" aria-hidden={hidden || undefined}>
      {marquee.items.map((m) => (
        <li key={m.label} className="mq-item title-3"><Icon name={m.icon} />{m.label}</li>
      ))}
    </ul>
  );
  return (
    <section className="mq" aria-label={marquee.label}>
      <p className="mq-label caption-3">{marquee.label}</p>
      <div className="mq-track">
        <div className="mq-move">{row(false)}{row(true)}</div>
      </div>
    </section>
  );
}
