const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'number-shuffler.js',
    libraryTarget: 'var',
    library: 'NumberShuffler',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/js')]
      }
    ]
  }
}
