import { site, messages } from "../content";

// Builds a WhatsApp link with a prefilled message.
export function waLink(kind = "check") {
  const text = (messages[kind] || messages.check).replace("{brand}", site.brand);
  const number = /^\d{8,15}$/.test(site.whatsapp) ? site.whatsapp : "";
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

// Resolves files in /public so they also work under a GitHub Pages subpath.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
