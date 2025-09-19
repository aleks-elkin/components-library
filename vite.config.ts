import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { globSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

const inputFiles: [string, string][] = globSync(
  ["./src/**/*.tsx", "./src/**/*.ts"],
  {
    exclude: ["src/**/*.d.ts", "src/**/*.css.ts"],
  }
).map((entry) => [
  relative("src", entry.slice(0, entry.length - extname(entry).length)),
  fileURLToPath(new URL(entry, import.meta.url)),
]);

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react(),
    libInjectCss(),
    dts({ include: ["src"] }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "Components Library",
      fileName: "main",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-aria-components"],
      input: Object.fromEntries(inputFiles),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
