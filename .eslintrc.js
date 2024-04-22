module.exports = {
  env: {
    browser: true,
    'commonjs': true,
    es2021: true
  },
  extends: ['prettier', 'standard', 'eslint:recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs,mjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier', 'node', 'promise'],
  rules: {
    'prettier/prettier': 'error'
  }
}
