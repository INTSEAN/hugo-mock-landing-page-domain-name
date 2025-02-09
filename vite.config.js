import { defineConfig } from 'vite';

export default defineConfig({
  root: 'assets/js',
  build: {
    outDir: '../../static/js',
    emptyOutDir: true,
  },
});