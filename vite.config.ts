import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from "path";
import { appRootPath } from "nx/src/utils/app-root";
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/shoppe',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    vue(),
    nxViteTsPaths(),
    visualizer({
      filename: './dist/report.html',
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],

  resolve: {
    alias: {
      '@': path.resolve(appRootPath, './src/'),
    },
  },

  build: {
    outDir: './dist/shoppe',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: './coverage/shoppe',
      provider: 'v8',
    },
  },
});
