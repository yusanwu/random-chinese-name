const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = [
  /** CommonJS 配置 */
  merge(commonConfig, {
    output: {
      filename: "cjs.bundle.js",
      libraryTarget: 'commonjs2',
    },
  }),

  /** ESM 配置 */
  merge(commonConfig, {
    output: {
      filename: "esm.bundle.js",
      libraryTarget: 'module',
    },
    experiments: {
      outputModule: true,
    },
  }),
];