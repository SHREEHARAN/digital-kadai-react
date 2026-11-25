import Icon from "./Icon";
import SectionHead from "./SectionHead";
import { problem } from "../content";

export default function Problem() {
  return (
    <section className="problem" aria-labelledby="problem-h">
      <div className="wrap">
        <SectionHead id="problem-h" eyebrow="Why it matters" title={problem.title} subtitle={problem.subtitle} />
        <ul className="trio">
          {problem.items.map((it, i) => (
            <li key={it.title} data-reveal style={{ "--d": `${i * 0.1}s` }}>
              <span className="ic"><Icon name={it.icon} /></span>
              <p className="title-2">{it.title}</p>
              <p className="body-3 muted">{it.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
