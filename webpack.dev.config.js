const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry:[
    'babel-polyfill',
    'webpack-dev-server/client?http://0.0.0.0:4000',
    'webpack/hot/only-dev-server',
    './src/index.js',
    './src/style.css'
  ],
  output:{
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  devServer:{
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './dist',
    proxy: {
      // 최신 버전에서는 "**"을 사용한다.
      // express port와 일치 시켜줘야한다.
      "**": "http://localhost:8080"
    },
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ],
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader'
      },
      {
        test: /\.js$/,
        exculde: /node_modules/,
        loader: 'babel-loader',
        options:{
          presets:[
            'react',
            'es2015'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'style-loader'
        ]
      }
    ]
  }
}