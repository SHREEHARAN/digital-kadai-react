import Icon from "./Icon";
import ListingDemo from "./ListingDemo";
import { hero } from "../content";
import { waLink, asset } from "../lib/links";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="founding caption-3">{hero.badge}</span>
          <h1 className="heading-1">
            {hero.titleLines.map((line, i) => (
              <span key={i}>{line}{i < hero.titleLines.length - 1 && <br />} </span>
            ))}
          </h1>
          <p className="body-7 muted">{hero.subtitle}</p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-cta button-md" href={waLink("check")} target="_blank" rel="noopener noreferrer">
              <Icon name="wa" />{hero.cta}
            </a>
            <p className="promise caption-2"><Icon name="check" />{hero.promise}</p>
          </div>
        </div>
        <ListingDemo
          photo={<img className="hero-photo" src={asset(hero.image.src)} alt={hero.image.alt} width="960" height="1200" fetchPriority="high" />}
        />
      </div>
    </section>
  );
}
