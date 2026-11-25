import { useState } from "react";
import Icon from "./Icon";
import { site, listing } from "../content";
import { asset } from "../lib/links";

function Stars({ dim }) {
  return (
    <span className={`stars${dim ? " dim" : ""}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" />)}
    </span>
  );
}

function Actions({ off = [] }) {
  const items = [["phone", "Call"], ["nav", "Directions"], ["wa", "WhatsApp"], ["globe", "Website"]];
  return (
    <div className="actions caption-4">
      {items.map(([icon, label]) => (
        <span key={label} className={`act${off.includes(label) ? " off" : ""}`}>
          <span className="ic"><Icon name={icon} /></span>{label}
        </span>
      ))}
    </div>
  );
}

function Before({ hidden }) {
  const b = listing.before;
  return (
    <div className="state" hidden={hidden} aria-hidden={hidden} aria-label="Example listing before">
      <div className="photo-empty"><Icon name="image" /><span className="caption-4">No photos yet</span></div>
      <div className="listing">
        <div>
          <p className="heading-6">{listing.name}</p>
          <div className="rating caption-2 muted">{b.rating} <Stars dim /> ({b.reviews})</div>
          <p className="caption-5 muted">{b.category}</p>
        </div>
        <Actions off={["WhatsApp", "Website"]} />
        {b.issues.map((t) => (
          <p key={t} className="row bad body-6"><Icon name={t.startsWith("Hours") ? "clock" : "globe"} />{t}</p>
        ))}
        <div className="card-mini"><p className="title-4">Latest update</p><p className="body-6 muted">{b.update}</p></div>
        <div className="card-mini">
          <p className="title-4">Review</p>
          <p className="body-6">{b.review}</p>
          <p className="caption-5 warn-text">No reply from the owner</p>
        </div>
      </div>
    </div>
  );
}

function After({ hidden }) {
  const a = listing.after;
  return (
    <div className="state" hidden={hidden} aria-hidden={hidden} aria-label={`Example listing with ${site.brand}`}>
      <div className="photos-one"><img src={asset(a.photo)} alt="" width="1280" height="800" /></div>
      <div className="listing">
        <div>
          <p className="heading-6">{listing.name}</p>
          <div className="rating caption-2 muted">{a.rating} <Stars /> ({a.reviews})</div>
          <p className="caption-5 muted">{a.category}</p>
        </div>
        <Actions />
        <p className="row good body-6"><Icon name="clock" />{a.open}</p>
        <div className="card-mini"><p className="title-4">{a.update.title}</p><p className="body-6">{a.update.text}</p></div>
        <div className="card-mini">
          <p className="title-4">Review</p>
          <p className="body-6">{a.review}</p>
          <div className="reply"><p className="caption-4">Response from the owner</p><p className="caption-5 muted">{a.reply}</p></div>
        </div>
      </div>
    </div>
  );
}

// The phone mockup with a before / after switch.
export default function ListingDemo({ photo }) {
  const [view, setView] = useState("after");
  return (
    <div className="demo">
      <div className="toggle" role="group" aria-label="Compare the example listing">
        <button type="button" className="button-sm" aria-pressed={view === "before"} onClick={() => setView("before")}>Before</button>
        <button type="button" className="button-sm" aria-pressed={view === "after"} onClick={() => setView("after")}>With {site.brand}</button>
      </div>
      <div className="hero-visual">
        {photo}
        <div className="phone">
          <div className="screen">
            <Before hidden={view !== "before"} />
            <After hidden={view !== "after"} />
          </div>
        </div>
      </div>
      <p className="demo-note caption-5">{listing.note}</p>
    </div>
  );
}
