import SectionHead from "./SectionHead";
import { steps } from "../content";

export default function HowItWorks() {
  return (
    <section id="how" className="how" aria-labelledby="how-h">
      <div className="wrap">
        <SectionHead id="how-h" eyebrow="Getting started" title={steps.title} subtitle={steps.subtitle} />
        <ol className="steps" data-reveal>
          {steps.items.map((s, i) => (
            <li key={s.title} style={{ "--d": `${0.2 + i * 0.25}s` }}>
              <h3 className="title-1">{s.title}</h3>
              <p className="body-3 muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
