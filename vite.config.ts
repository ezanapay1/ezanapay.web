import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { dependencies } from "./package.json";

// function renderChunks(deps: Record<string, string>) {
//   let chunks = {};

//   Object.keys(deps).forEach((key) => {
//     if (["react", "react-router-dom", "react-dom"].includes(key)) return;

//     chunks[key] = [key];
//   });
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   sourcemap: false,
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ["react", "react-router-dom", "react-dom"],
  //         ...renderChunks(dependencies),
  //       },
  //     },
  //   },
  // },
});
