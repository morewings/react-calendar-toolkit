import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import includePaths from 'rollup-plugin-includepaths';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import visualizer from 'rollup-plugin-visualizer';
import postcssImport from 'postcss-import';
import pkg from './package.json';

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: 'umd',
  },
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const config = OUTPUT_DATA.map(({file, format}) => ({
  input: 'src/entryPoint.js',
  output: {
    file,
    format,
    name: 'Example',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
    },
  },
  external: ['react', 'react-dom', 'react-is'],
  plugins: [
    peerDepsExternal(),
    includePaths({
      include: {},
      paths: ['src'],
      external: ['react', 'react-dom', 'react-is'],
      extensions: ['.js', '.json', '.html'],
    }),
    postcss({
      extract: pkg.style, // we need only one copy of css
      inline: false,
      modules: true,
      plugins: [postcssImport(), autoprefixer],
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    localResolve(),
    resolve({
      browser: true,
    }),
    commonjs({
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType'], // TODO: check if it's still needed
      },
    }),
    filesize(),
    // visualizer({open: true}),
  ],
}));

export default config;
