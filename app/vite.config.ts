/// <reference types="vitest" />
// import { defineConfig } from 'vite';
import { defineConfig, configDefaults } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const config = {
  cart: {
    entry: resolve(__dirname, './src/client.ts'),
    fileName: 'cart',
  },
  server: {
    entry: resolve(__dirname, './src/server.ts'),
    fileName: 'server',
  },
};
const buildConfig = config[process.env.LIB_NAME ?? 'server'];

if (buildConfig === undefined) {
  throw new Error('LIB_NAME is not defined or is not valid');
}

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  plugins: [vue()],
  test: {
    include: ['./src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: [...configDefaults.exclude],
    environment: 'jsdom',
    globals: true,
  },
  server: {
    port: 3030,
    strictPort: true,
  },
  build: {
    outDir: './dist',
    lib: {
      ...buildConfig,
      formats: ['cjs', 'es'],
    },
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
    },
    dedupe: ['vue'],
  },
});
