import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { baseUrl } from "./src/constants/RoutesPath.Constants";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // deploy source https://www.youtube.com/watch?v=uEEj2c3_ydg
  base: baseUrl,
});
