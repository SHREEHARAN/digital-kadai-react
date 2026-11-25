import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work on Netlify, Vercel, a custom domain,
// or a GitHub Pages project URL (username.github.io/repo) without changes.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
