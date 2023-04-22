import { pfs, rtl, pixelToRem, validator, defineConfig } from 'agile-css/dist/index.mjs';

export default defineConfig({
  input: ['./src/**/*.jsx', './src/**/*.js', './src/**/*.tsx'],
  output: './src/styles/agile-css.css',
  defaultCss: `
    body {
      font-size: 14px;
    }
  `,
  validator,
  cache: true,
  plugins: [pixelToRem(62.5), rtl(), pfs()],
  customValue(value) {
    // customValue
    console.log(value);
    return value;
  },
  breakpoints: {
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  custom: {
    'color-primary': 'var(--color-primary)',
    'color-secondary': 'var(--color-secondary)',
    'color-tertiary': 'var(--color-tertiary)',
    'color-quaternary': 'var(--color-quaternary)',
  },
});
