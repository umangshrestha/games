import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./tests/setup.ts'],
      coverage: {
        provider: 'istanbul',
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  })