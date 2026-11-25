import { useEffect } from "react";

// Adds .is-in to every [data-reveal] or [data-anim] element once it scrolls into view.
// [data-reveal] fades up once; [data-anim] runs its looping animation only while visible.
export default function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal],[data-anim]").forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.target.hasAttribute("data-anim")) e.target.classList.toggle("is-in", e.isIntersecting);
        else if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal],[data-anim]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
