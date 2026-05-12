import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Haiyang-Website/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
