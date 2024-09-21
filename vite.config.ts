import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://one.marinesnow34.com",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, "/api/v1"),
  //       secure: true,
  //       ws: true,
  //     },
  //   },
  // },
  resolve: {
    alias: [
      { find: "@pages", replacement: "/src/pages" },
      { find: "@components", replacement: "/src/components" },
      { find: "@lib", replacement: "/src/lib" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@types", replacement: "/src/types" },
    ],
  },
});
