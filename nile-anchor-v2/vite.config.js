import path from "path"
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite"
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), eslint(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
  },
  define: {
    VITE_API_URL: JSON.stringify(process.env.VITE_API_URL),
  },
});