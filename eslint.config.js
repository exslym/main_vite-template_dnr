export default [
  {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: true
    },
    /* .eslintignore */
    ignores: [
      '**/node_modules/**',
      '**/bower_components/**',
      '**/build/**',
      '**/public/**',
      '**/tools/**'
    ]
  }
];
