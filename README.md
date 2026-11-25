# Digital Kadai website

A React + Vite site for Digital Kadai. Light and dark themes, before and after listing demo, service photos, pricing with a custom plan, and WhatsApp buttons with prefilled messages.

## Run it locally

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

## Edit the content

Almost everything lives in **`src/content.js`**:

- `site.whatsapp`: your WhatsApp number with country code, digits only (for example `919876543210`). Until you set it, buttons open WhatsApp with the message but no recipient.
- `messages`: the text each button prefills in WhatsApp.
- Hero copy, services, steps, plans and prices, founding offer, FAQ and legal text.

Photos are in `public/images/`. To swap one, replace the file with the same name, or add a new file and change its path in `content.js`. Landscape photos at 1280 × 800 suit the service cards; the hero photo is portrait 4:5.

Colours, type and spacing are tokens at the top of `src/styles.css`. Dark theme values sit in the two dark blocks right below them.

## Project layout

```
src/
  content.js          all text, prices and settings
  styles.css          design tokens and styles
  App.jsx             page order
  components/         Nav, Hero, ListingDemo, Problem, Tagline, Services,
                      HowItWorks, Pricing, Faq, FinalCta, Footer, Icon
  hooks/              useTheme (light/dark), useActiveSection (menu highlight)
  lib/links.js        WhatsApp link builder
public/
  images/             photos
  favicon.svg
```

## Deploy

**Netlify or Vercel:** import the repo. Build command `npm run build`, publish directory `dist`.

**GitHub Pages:** push to a repo's `main` branch, then in the repo go to Settings › Pages and set Source to "GitHub Actions". The included workflow builds and deploys on every push.

**Custom domain:** add it in your host's domain settings, then point your DNS at the host as its instructions show. No code changes are needed.
