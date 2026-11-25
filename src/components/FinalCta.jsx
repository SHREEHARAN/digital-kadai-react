import Icon from "./Icon";
import { finalCta, hero } from "../content";
import { waLink } from "../lib/links";

export default function FinalCta() {
  return (
    <section className="final" aria-labelledby="final-h">
      <div className="wrap">
        <div className="final-band" data-reveal>
          <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
          <h2 className="heading-3" id="final-h">{finalCta.title}</h2>
          <p className="body-7">{finalCta.text}</p>
          <a className="btn btn-accent btn-cta btn-shine button-md" href={waLink("check")} target="_blank" rel="noopener noreferrer">
            <Icon name="wa" />{hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
