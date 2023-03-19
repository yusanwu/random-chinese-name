const path = require("path");

module.exports = {
  entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['babel-loader', 'ts-loader'],
          exclude: /node_modules/,
        },
      ],
    },
}