import SectionHead from "./SectionHead";
import { services } from "../content";
import { asset } from "../lib/links";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-h">
      <div className="wrap">
        <SectionHead id="services-h" title={services.title} subtitle={services.subtitle} />
        <ul className="svc-grid">
          {services.items.map((s) => (
            <li className="svc" key={s.title}>
              <img className="art" src={asset(s.image)} alt={s.alt} width="1280" height="800" loading="lazy" decoding="async" />
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
