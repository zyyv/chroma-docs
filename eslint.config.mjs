import antfu from '@antfu/eslint-config'

export default antfu(
  {
    files: [
      '*.md',
    ],
    rules: {
      'unused-imports/no-unused-vars': 'off',
    },
  },
)
