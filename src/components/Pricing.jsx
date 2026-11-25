import Icon from "./Icon";
import SectionHead from "./SectionHead";
import { pricing } from "../content";
import { waLink } from "../lib/links";

function Plan({ plan }) {
  const cls = ["plan", plan.highlight && "pick", plan.custom && "custom"].filter(Boolean).join(" ");
  return (
    <article className={cls}>
      <div className="plan-head">
        <h3 className="heading-5">{plan.name}</h3>
        <p className="body-6 muted">{plan.forWho}</p>
        <p className="price">
          <span className={plan.custom ? "heading-5" : "heading-3"}>{plan.price}</span>
          {!plan.custom && <span className="body-6 muted">a month</span>}
        </p>
        <p className="caption-5 muted">{plan.setup}</p>
      </div>
      <ul className="body-6">
        {plan.features.map((f) => <li key={f}><Icon name="check" />{f}</li>)}
      </ul>
      <a className={`btn ${plan.highlight ? "btn-primary" : "btn-ghost"} button-md`} href={waLink(plan.key)} target="_blank" rel="noopener noreferrer">
        {plan.custom && <Icon name="sparkle" />}{plan.cta}
      </a>
    </article>
  );
}

export default function Pricing() {
  const f = pricing.founding;
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-h">
      <div className="wrap">
        <SectionHead id="pricing-h" title={pricing.title} subtitle={pricing.subtitle} />
        <div className="plans">
          {pricing.plans.map((p) => <Plan key={p.key} plan={p} />)}
        </div>
        <div className="found-box">
          <div>
            <h3 className="heading-6">{f.title}</h3>
            <p className="body-3 muted">{f.text}</p>
          </div>
          <a className="btn btn-primary button-md" href={waLink("founding")} target="_blank" rel="noopener noreferrer">
            <Icon name="wa" />{f.cta}
          </a>
        </div>
        <p className="addons body-6 muted">{pricing.addons}</p>
      </div>
    </section>
  );
}
