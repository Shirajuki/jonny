import { VitePWA } from "vite-plugin-pwa";

export default {
  plugins: [
    VitePWA({
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Jonny Ngo Luong",
        short_name: "JNL",
        description: "Jonny's fullstack dev portfolio",
        theme_color: "#ffffff",
        icons: [
          {
            src: "./android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
        ],
      },
      registerType: "autoUpdate",
      workbox: {
        cleanupOutdatedCaches: false,
      },
    }),
  ],
};
