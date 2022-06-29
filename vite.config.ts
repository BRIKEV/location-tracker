import { defineConfig } from 'vite';
import i18nResources from 'vite-plugin-i18n-resources';
import { i18nextScanner } from 'vite-plugin-i18next-scanner';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
  },
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
  plugins: [
    i18nResources({
      path: resolve(__dirname, 'src/locales'),
    }),
    i18nextScanner({
      langs: ['en', 'es'],
      outDir: resolve(__dirname, 'src/locales'),
    }),
    react(),
  ],
});
