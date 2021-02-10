const path = require('path');

const pathDist = path.resolve(__dirname, 'dist');
const pathNodeModules = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: pathDist
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: pathNodeModules,
        use: ['babel-loader']
      }
    ]
  }
}
