import SectionHead from "./SectionHead";
import ServiceVisual from "./ServiceVisual";
import { services } from "../content";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-h">
      <div className="wrap">
        <SectionHead id="services-h" eyebrow="Services" title={services.title} subtitle={services.subtitle} />
        <ul className="svc-grid">
          {services.items.map((s, i) => (
            <li className="svc" key={s.title} data-reveal style={{ "--d": `${(i % 3) * 0.08}s` }}>
              <ServiceVisual kind={s.visual} image={s.image} alt={s.alt} />
              <div className="txt">
                {s.tag && <span className="tag caption-4">{s.tag}</span>}
                <h3 className="title-2">{s.title}</h3>
                <p className="body-3 muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
