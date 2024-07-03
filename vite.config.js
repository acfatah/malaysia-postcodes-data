import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'node14',
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'main',
      fileName: 'main',
    },
  },
})
