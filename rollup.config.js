import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import includePaths from 'rollup-plugin-includepaths';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
// import visualizer from 'rollup-plugin-visualizer';
import cssVariables from 'postcss-custom-properties';
import postcssPresetEnv from 'postcss-preset-env';
import pkg from './package.json';
import defaultTheme from './src/utils/defaultTheme';

const OUTPUT_DATA = [
  {
    file: pkg.browser, // TODO: check if date-fns supports UMD
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

const POSTCSS_PLUGINS = [
  postcssPresetEnv({
    browsers: pkg.browserslist.production,
    stage: 3,
  }),
  autoprefixer(),
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
    },
  },
  plugins: [
    peerDepsExternal(),
    replace({'process.env.NODE_ENV': JSON.stringify('production')}), // we need this to reduce bundle size and silence prop-types
    includePaths({
      include: {},
      paths: ['src'],
      external: ['react', 'react-dom', 'date-fns'],
      extensions: ['.js', '.json', '.html'],
    }),
    postcss({
      extract: format === 'umd' ? 'lib/ie.css' : pkg.style,
      inline: false,
      plugins:
        format === 'umd'
          ? [
              cssVariables({
                importFrom: defaultTheme,
                preserve: false,
              }),
              ...POSTCSS_PLUGINS,
            ]
          : POSTCSS_PLUGINS,
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
        'node_modules/react-is/index.js': [
          'isValidElementType',
          'isContextConsumer',
        ], // TODO: check if it's still needed
      },
    }),
    filesize(),
    // visualizer({open: true}),
  ],
}));

export default config;
