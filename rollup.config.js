import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import includePaths from 'rollup-plugin-includepaths';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import cssVariables from 'postcss-custom-properties';
import stylelint from 'rollup-plugin-stylelint';
import postcssPresetEnv from 'postcss-preset-env';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';
import defaultTheme from './src/lib/utils/defaultTheme';

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
  input: 'src/lib/index.js',
  output: {
    file,
    format,
    name: 'ReactCalendarToolkit',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'date-fns': 'DateFns',
    },
    exports: 'named',
  },
  plugins: [
    peerDepsExternal(),
    includePaths({
      include: {},
      paths: ['src'],
      external: Object.keys(pkg.dependencies),
      extensions: ['.js', '.json', '.html'],
    }),
    stylelint({
      throwOnError: true,
    }),
    postcss({
      extract: format === 'umd' ? 'style/ie.css' : 'style/default.css',
      inline: false,
      plugins:
        format === 'umd'
          ? [
              cssVariables({
                importFrom: [
                  {
                    customProperties: defaultTheme,
                  },
                ],
                // preserve: false,
              }),
              ...POSTCSS_PLUGINS,
            ]
          : POSTCSS_PLUGINS,
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      configFile: './babel.config.rollup.js',
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    // terser(),
    filesize(),
  ],
}));

export default config;
