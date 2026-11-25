import SectionHead from "./SectionHead";
import { steps } from "../content";

export default function HowItWorks() {
  return (
    <section id="how" className="how" aria-labelledby="how-h">
      <div className="wrap">
        <SectionHead id="how-h" title={steps.title} subtitle={steps.subtitle} />
        <ol className="steps">
          {steps.items.map((s) => (
            <li key={s.title}>
              <h3 className="title-1">{s.title}</h3>
              <p className="body-3 muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
