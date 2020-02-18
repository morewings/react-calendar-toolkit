import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import includePaths from 'rollup-plugin-includepaths';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const INPUT_FILE_PATH = 'src/entryPoint.js';
const OUTPUT_NAME = 'Example';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
};

const PLUGINS = [
  peerDepsExternal(),
  includePaths({
    include: {},
    paths: ['src'],
    external: [],
    extensions: ['.js', '.json', '.html'],
  }),
  postcss({
    extract: true,
    plugins: [autoprefixer],
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  localResolve(),
  resolve({
    browser: true,
  }),
  commonjs({
    namedExports: {
      'node_modules/react-is/index.js': ['isValidElementType'],
    },
  }),
  filesize(),
];

const EXTERNAL = ['react', 'react-dom', 'react-is'];

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
      external: [],
      extensions: ['.js', '.json', '.html'],
    }),
    postcss({
      extract: true,
      plugins: [autoprefixer],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    localResolve(),
    resolve({
      browser: true,
    }),
    commonjs({
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType'],
      },
    }),
    filesize(),
  ],
}));

export default config;
