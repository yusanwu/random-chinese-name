const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = [
  /** CommonJS 配置 */
  merge(commonConfig, {
    output: {
      filename: "index.cjs",
      libraryTarget: 'commonjs2',
    },
  }),

  /** ESM 配置 */
  merge(commonConfig, {
    output: {
      filename: "index.mjs",
      libraryTarget: 'module',
    },
    experiments: {
      outputModule: true,
    },
  }),
];