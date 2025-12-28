import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://<github-username>.github.io/<repo-name>/
// https://AtulAmbore.github.io/agency-ai/
/*
You don’t “get” this from anywhere —
👉 you construct it yourself from:
Your GitHub username
Your repository name
*/

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/agency-ai/",
});
