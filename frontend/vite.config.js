import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';  // Importiere das Vue-Plugin

// https://vitejs.dev/config/
export default defineConfig({
  root: './',  // Legt das Root-Verzeichnis fest
  plugins: [vue()],  // Füge das Vue-Plugin hier hinzu
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Alias für den src-Ordner
    },
  },
  server: {
    port: 5173,  // Port kann hier nach Bedarf geändert werden
  },
});