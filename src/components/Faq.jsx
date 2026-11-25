import Icon from "./Icon";
import SectionHead from "./SectionHead";
import { faqs } from "../content";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-h">
      <div className="wrap">
        <SectionHead id="faq-h" title="Questions shop owners ask" />
        <div className="faq-list">
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
