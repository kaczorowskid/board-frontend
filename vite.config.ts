import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    viteTsconfigPaths(),
    EnvironmentPlugin('all'),
    command !== 'build'
      ? checker({
          typescript: true,
          eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' }
        })
      : undefined
  ],
  server: {
    port: 3000
  },
  define: {
    'process.env': process.env
  },
  test: {
    environment: 'jsdom'
  }
}));
