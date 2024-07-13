/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  trailingComma: 'none',
  semi: true,
  printWidth: 80,
  plugins: ['prettier-plugin-astro'],
  pluginSearchDirs: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
