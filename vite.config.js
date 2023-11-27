import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // deploy source https://github.com/ErickKS/vite-react-router
  // base: "/job-finder-react-frontend/",
});
