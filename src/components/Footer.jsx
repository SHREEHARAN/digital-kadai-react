import { site, legal } from "../content";
import { waLink } from "../lib/links";
import { BrandMark } from "./Nav";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="foot-col">
          <a className="brand" href="#top"><BrandMark /><span className="heading-6">{site.brand}</span></a>
          <p className="body-6 muted">{site.tagline}</p>
          <p className="caption-5 muted">© {new Date().getFullYear()} {site.brand}</p>
        </div>
        <div className="foot-col legal">
          <a className="body-5" href={waLink("check")} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          <details id="privacy"><summary className="body-6">Privacy</summary><p className="body-6 muted">{legal.privacy}</p></details>
          <details id="terms"><summary className="body-6">Terms</summary><p className="body-6 muted">{legal.terms}</p></details>
        </div>
      </div>
    </footer>
  );
}
