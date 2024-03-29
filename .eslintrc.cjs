module.exports = {
  overrides: [
    {
      files: [`./chatbot/**/*.ts`, `./models/**/*.ts`],
      extends: require.resolve(`@vgd/eslint-config-personal/node-ts`),
      parserOptions: {
        project: `./tsconfig.json`,
      },
    },
    {
      files: [`./scripts/**/*.cjs`],
      extends: require.resolve(`@vgd/eslint-config-personal/node-js`),
      rules: {
        'import/no-commonjs': `off`,
      },
    },
    {
      files: [`./src/**/*.tsx`],
      extends: require.resolve(`@vgd/eslint-config-personal/preact-ts`),
      parserOptions: {
        project: `./tsconfig.json`,
      },
    },
  ],
}
