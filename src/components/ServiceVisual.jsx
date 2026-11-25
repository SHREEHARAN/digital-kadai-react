import Icon from "./Icon";
import { asset } from "../lib/links";

// A photo for each service card, with small animated chips floating over it.
// The chips are drawn in HTML so they stay sharp and follow the light / dark theme.
const d = (s) => ({ "--d": `${s}s` });

const OVERLAYS = {
  maps: () => (
    <>
      <div className="sv-chip tl" style={d(0.4)}><Icon name="star" className="star" /><b>4.6</b><span className="muted">138 reviews</span></div>
      <div className="sv-chip br" style={d(0.8)}><i className="dot" />Open now · closes 9:30 pm</div>
    </>
  ),
  whatsapp: () => (
    <div className="sv-chat">
      <p className="bub in" style={d(0)}>Is the 1 kg pack in stock?</p>
      <p className="bub out" style={d(1.2)}>Yes! Open till 9:30 pm <Icon name="check" /></p>
    </div>
  ),
  instagram: () => (
    <>
      <div className="sv-chip tr" style={d(0.4)}><Icon name="ig" />12 posts · 4 reels a month</div>
      <div className="sv-chip bl" style={d(0.8)}><Icon name="check" />Approved on WhatsApp</div>
    </>
  ),
  website: () => (
    <>
      <div className="sv-chip tl" style={d(0.4)}><Icon name="globe" />yourshop.in</div>
      <div className="sv-chip br brand" style={d(0.8)}><Icon name="wa" />Order on WhatsApp</div>
    </>
  ),
  b2b: () => (
    <>
      <div className="sv-chip tl" style={d(0.4)}><Icon name="check" />Verified supplier</div>
      <div className="sv-chip br" style={d(0.8)}><Icon name="in" />New export enquiry</div>
    </>
  ),
  festival: () => (
    <>
      <div className="sv-chip tr accent" style={d(0.4)}><Icon name="sparkle" />Festive sale · 25% off</div>
      <div className="sv-chip bl" style={d(0.8)}><Icon name="wa" />Sent to 248 customers</div>
    </>
  ),
};

export default function ServiceVisual({ kind, image, alt }) {
  const Overlay = OVERLAYS[kind];
  return (
    <div className="art" data-anim>
      <img src={asset(image)} alt={alt} width="1280" height="800" loading="lazy" decoding="async" />
      {Overlay && <div className="sv" aria-hidden="true"><Overlay /></div>}
    </div>
  );
}
