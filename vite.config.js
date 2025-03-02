import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSitemap({
      siteUrl: 'https://ppassyafiiyahbungah.com/',  // Ganti dengan URL situs Anda
      changefreq: 'weekly',  // Frekuensi pembaruan sitemap
      priority: 0.7,         // Prioritas halaman
    }),
  ],
  define: {
    global: {},
  },
});
