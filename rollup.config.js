import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

// Configuration for categorized builds
// Configurazione per build categorizzati
const categories = ['dom', 'math', 'array', 'string', 'utils', 'shortcuts'];

// Main builds (all together)
// Build principali (tutti insieme)
const mainBuilds = [
  // CommonJS build
  // Build CommonJS
  {
    input: 'src/index.js',
    output: {
      file: 'dist/utility-kit.js',
      format: 'cjs',
      exports: 'named'
    },
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  },
  // ES Module build
  // Build ES Module
  {
    input: 'src/index.js',
    output: {
      file: 'dist/utility-kit.esm.js',
      format: 'esm'
    },
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  },
  // Minified UMD build for browser
  // Build UMD minimizzato per browser
  {
    input: 'src/index.js',
    output: {
      file: 'dist/utility-kit.min.js',
      format: 'umd',
      name: 'UtilityKit'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      terser()
    ]
  }
];

// Category builds (for categorized imports)
// Build categorizzati (per import categorizzati)
const categoryBuilds = categories.flatMap(category => [
  {
    input: `src/${category}/index.js`,
    output: {
      file: `dist/${category}/index.js`,
      format: 'cjs',
      exports: 'named'
    },
    plugins: [nodeResolve(), commonjs()]
  },
  {
    input: `src/${category}/index.js`,
    output: {
      file: `dist/${category}/index.esm.js`,
      format: 'esm'
    },
    plugins: [nodeResolve(), commonjs()]
  }
]);

export default [...mainBuilds, ...categoryBuilds];
