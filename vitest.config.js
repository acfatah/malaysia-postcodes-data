import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: ['**/*.spec.js'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov'],
    },
  },
})
