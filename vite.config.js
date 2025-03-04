import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  server: {
    host: true,
    allowedHosts: ["0d88-2409-40c1-100c-40e5-a976-67be-ce44-3206.ngrok-free.app"],
  },
});
