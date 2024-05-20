import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import fs from "fs";
import { defineConfig } from "vite";
import { crx, ManifestV3Export } from "@crxjs/vite-plugin";

import manifest from "./manifest.json";
import devManifest from "./manifest.dev.json";
import pkg from "./package.json";

const root = resolve(__dirname, "src");
const assetsDir = resolve(root, "assets");
const shadcdnDir = resolve(__dirname, "@");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");

const isDev = process.env.__DEV__ === "true";

const extensionManifest = {
  ...manifest,
  ...(isDev ? devManifest : ({} as ManifestV3Export)),
  name: isDev ? `DEV: ${manifest.name}` : manifest.name,
  version: pkg.version,
};

// plugin to remove dev icons from prod build
function stripDevIcons(apply: boolean) {
  if (apply) return null;

  return {
    name: "strip-dev-icons",
    resolveId(source: string) {
      return source === "virtual-module" ? source : null;
    },
    renderStart(outputOptions: any, inputOptions: any) {
      const outDir = outputOptions.dir;
      fs.rm(resolve(outDir, "dev-icon-32.png"), () =>
        console.log(`Deleted dev-icon-32.png frm prod build`),
      );
      fs.rm(resolve(outDir, "dev-icon-128.png"), () =>
        console.log(`Deleted dev-icon-128.png frm prod build`),
      );
    },
  };
}

export default defineConfig({
  resolve: {
    alias: {
      "@": shadcdnDir,
      "@src": root,
      "@assets": assetsDir,
    },
  },
  plugins: [
    react(),
    crx({
      manifest: extensionManifest as ManifestV3Export,
      contentScripts: {
        injectCss: false,
      },
    }),
    stripDevIcons(isDev),
  ],
  publicDir,
  build: {
    outDir,
    sourcemap: isDev,
    emptyOutDir: !isDev,
  },
});
