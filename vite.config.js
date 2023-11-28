import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // deploy source https://www.youtube.com/watch?v=uEEj2c3_ydg
  base: import.meta.env.VITE_BASE_URL,
});
