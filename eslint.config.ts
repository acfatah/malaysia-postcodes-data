import { config, preset } from '@acfatah/eslint-preset'

export default config(
  {
    formatters: true,
    type: 'lib',
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/data/**',
      'logs',
    ],
  },

  {
    rules: {
      ...preset,
    },
  },

)
