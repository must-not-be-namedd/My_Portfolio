import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import fs from "fs";

// Custom plugin to ensure _redirects file is copied
const copyRedirectsPlugin = () => {
  return {
    name: 'copy-redirects',
    writeBundle() {
      const redirectsContent = '/*    /index.html   200';
      const outputPath = path.resolve(process.cwd(), 'dist/public/_redirects');
      fs.writeFileSync(outputPath, redirectsContent);
      console.log('✅ _redirects file copied to build output');
    }
  };
};

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    copyRedirectsPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, "client", "index.html"),
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
