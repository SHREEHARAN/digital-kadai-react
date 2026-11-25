import { useCallback, useEffect, useState } from "react";

const KEY = "dk-theme";
const media = () => window.matchMedia("(prefers-color-scheme: dark)");

function resolve() {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "dark" || set === "light") return set;
  return media().matches ? "dark" : "light";
}

// Light / dark theme. Follows the device until the visitor picks one, then remembers it.
export default function useTheme() {
  const [theme, setTheme] = useState(resolve);

  useEffect(() => {
    const mq = media();
    const onChange = () => setTheme(resolve());
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = resolve() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch { /* storage unavailable */ }
    setTheme(next);
  }, []);

  return [theme, toggle];
}
