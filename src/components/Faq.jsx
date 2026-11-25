import Icon from "./Icon";
import SectionHead from "./SectionHead";
import { faqs } from "../content";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-h">
      <div className="wrap">
        <SectionHead id="faq-h" eyebrow="FAQ" title="Questions shop owners ask" />
        <div className="faq-list" data-reveal>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary className="title-2">{f.q}<Icon name="caret" /></summary>
              <p className="ans body-3 muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
