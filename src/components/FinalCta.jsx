import Icon from "./Icon";
import { finalCta, hero } from "../content";
import { waLink } from "../lib/links";

export default function FinalCta() {
  return (
    <section className="final pricing" aria-labelledby="final-h">
      <div className="wrap">
        <h2 className="heading-3" id="final-h">{finalCta.title}</h2>
        <p className="body-7 muted">{finalCta.text}</p>
        <a className="btn btn-primary btn-cta button-md" href={waLink("check")} target="_blank" rel="noopener noreferrer">
          <Icon name="wa" />{hero.cta}
        </a>
      </div>
    </section>
  );
}
