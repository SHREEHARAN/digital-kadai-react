import { useEffect, useState } from "react";
import Icon from "./Icon";
import ListingDemo from "./ListingDemo";
import { hero } from "../content";
import { waLink, asset } from "../lib/links";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// The platform name in the headline that swaps every few seconds.
function Rotator({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced()) return;
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);
  const prev = (i - 1 + words.length) % words.length;
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a));
  return (
    <span className="rotator">
      <span className="rot-sizer">{longest}</span>
      {words.map((w, k) => (
        <span key={w} className={`rot-word${k === i ? " on" : ""}${k === prev ? " out" : ""}`}>{w}</span>
      ))}
    </span>
  );
}

export default function Hero() {
  const fullTitle = `${hero.titleLead} ${hero.rotate.slice(0, -1).join(", ")} and ${hero.rotate.at(-1)} ${hero.titleTail}`;
  return (
    <section className="hero" id="top">
      <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="founding caption-3 enter" style={{ "--d": "0s" }}><Icon name="sparkle" />{hero.badge}</span>
          <h1 className="heading-1">
            <span className="sr-only">{fullTitle}</span>
            <span aria-hidden="true">
              <span className="enter" style={{ "--d": ".08s" }}>{hero.titleLead}</span>{" "}
              <span className="enter" style={{ "--d": ".16s" }}><Rotator words={hero.rotate} /></span>{" "}
              <span className="enter tail" style={{ "--d": ".24s" }}>{hero.titleTail}</span>
            </span>
          </h1>
          <p className="body-7 muted enter" style={{ "--d": ".32s" }}>{hero.subtitle}</p>
          <div className="hero-actions enter" style={{ "--d": ".4s" }}>
            <a className="btn btn-primary btn-cta btn-shine button-md" href={waLink("check")} target="_blank" rel="noopener noreferrer">
              <Icon name="wa" />{hero.cta}
            </a>
            <p className="promise caption-2"><Icon name="check" />{hero.promise}</p>
          </div>
        </div>

        <div className="stage enter" style={{ "--d": ".2s" }}>
          <div className="stage-panel" aria-hidden="true">
            {hero.image && <img src={asset(hero.image.src)} alt="" width="960" height="1200" fetchPriority="high" />}
          </div>
          <ListingDemo />
          {hero.chips.map((c, i) => (
            <div key={c.title} className={`float-chip fc-${i + 1}`} style={{ "--d": `${0.7 + i * 0.25}s` }} aria-hidden="true">
              <span className={`fc-ic fc-ic-${i + 1}`}><Icon name={c.icon} /></span>
              <span><b className="title-4">{c.title}</b><span className="caption-5 muted">{c.text}</span></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
