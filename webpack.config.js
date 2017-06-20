const path = require('path');

module.exports = {

  // input
  entry: path.join(__dirname, 'src'),

  // output
  output: {
    path: path.join(__dirname, 'build'),

  },

  // transforms
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        options: {
          presets: [ 'env' ],
          plugins: [
            [ 'transform-react-jsx', { pragma: 'h' } ]
          ]
        }
      }
    ]
  },

  // sourcemaps
  devtool: 'source-map',

  // server
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true
  }

};


