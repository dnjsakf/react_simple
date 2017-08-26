const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry:[
    'babel-polyfill',
    './src/index.js',
    './src/style.css'
  ],
  output:{
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false,    // 콘솔창에 정보가 출력되지 않게 설정함.
        unused: true        // 이게 핵심이라네
      },
      mangle: false,        // 난독화?
      beautify: true,       // 가독성 좋게 만들어줌.
      output:{
        comments: true      // 주석 삭제 안함.
      }
    }),
    new webpack.LoaderOptionsPlguin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  module:{
    rules:[
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
process.noDeprecation = true;
