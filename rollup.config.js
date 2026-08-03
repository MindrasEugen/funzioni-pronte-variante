import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

// Configuration for categorized builds
const categories = ['dom', 'math', 'array', 'string', 'utils', 'shortcuts'];

// Main builds (all together)
const mainBuilds = [
  // CommonJS build
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
