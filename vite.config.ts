import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig(({ command }) => ({
  plugins: [
    reactRefresh(),
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
    globals: true,
    environment: 'jsdom',
    setupFiles: ['/src/setupTest.ts'],
    include: ['**/?(*.)test.ts?(x)']
  }
}));
