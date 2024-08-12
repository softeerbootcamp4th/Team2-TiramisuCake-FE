import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [react()],
  cacheDir: './.yarn/.vite',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
