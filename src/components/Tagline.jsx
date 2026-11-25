import { useEffect, useRef, useState } from "react";
import { taglineLines } from "../content";

const words = taglineLines.map((line) => line.split(" "));
const total = words.flat().length;

// Large statement whose words light up one at a time as it scrolls into view.
export default function Tagline() {
  const ref = useRef(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setLit(total); return; }
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = ref.current.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const span = window.innerHeight * 0.45;
      const p = Math.min(1, Math.max(0, (start - r.top) / span));
      setLit(Math.round(p * total));
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", update); };
  }, []);

  let n = 0;
  return (
    <section className="tagline" aria-label="What we do">
      <div className="wrap">
        <div className="tagline-inner">
          <p className="heading-2 reveal" ref={ref}>
            {words.map((line, li) => (
              <span key={li}>
                {line.map((w, wi) => {
                  const i = n++;
                  return <span key={wi}><span className={`w${i < lit ? " on" : ""}`}>{w}</span>{wi < line.length - 1 ? " " : ""}</span>;
                })}
                {li < words.length - 1 && <br />}{li < words.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
