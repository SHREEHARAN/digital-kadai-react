import Icon from "./Icon";
import { site, nav } from "../content";
import { waLink } from "../lib/links";
import useTheme from "../hooks/useTheme";
import useActiveSection from "../hooks/useActiveSection";

const ids = nav.map((n) => n.id);

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true"><Icon name="pin" /></span>
  );
}

export default function Nav() {
  const [theme, toggle] = useTheme();
  const active = useActiveSection(ids);
  const dark = theme === "dark";
  return (
    <header className="nav-shell">
      <nav className="nav" aria-label="Main">
        <a className="brand" href="#top" aria-label={`${site.brand}, back to top`}>
          <BrandMark />
          <span className="heading-6">{site.brand}</span>
        </a>
        <ul className="nav-links title-4">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-end">
          <button type="button" className="theme-btn" onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>
            <Icon name={dark ? "sun" : "moon"} />
          </button>
          <a className="btn btn-primary btn-sm button-sm" href={waLink("check")} target="_blank" rel="noopener noreferrer">
            <Icon name="wa" />Free check
          </a>
        </div>
      </nav>
    </header>
  );
}
