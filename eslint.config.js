import antfu from '@antfu/eslint-config'

export default antfu(
  {},

  {
    rules: {
      'sort-imports': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          partitionByNewLine: true,
          newlinesBetween: 'ignore',
        },
      ],
    },
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/data/**', '**/dist/**', 'logs'],
  },
)
