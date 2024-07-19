import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import path from 'node:path';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  base: '/',
  plugins: [vue()],
  server: {
    host:'0.0.0.0',
    port: 5000,
    open: true,
  },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src'),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
});
