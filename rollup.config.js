import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

// Configurazione per build categorizzati
const categories = ['dom', 'math', 'array', 'string', 'utility', 'shortcuts'];

// Build principale (tutto insieme)
const mainBuilds = [
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/funzioni-salvate.js',
      format: 'cjs',
      exports: 'named'
    },
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  },
  // ES Module build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/funzioni-salvate.esm.js',
      format: 'esm'
    },
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  },
  // Minified UMD build per browser
  {
    input: 'src/index.js',
    output: {
      file: 'dist/funzioni-salvate.min.js',
      format: 'umd',
      name: 'FunzioniSalvate'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      terser()
    ]
  }
];

// Build per categorie (per import categorizzati)
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
