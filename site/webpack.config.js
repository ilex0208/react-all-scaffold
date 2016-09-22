
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/devmain.js'
  },
  output: {
    publicPath: '/dist/', // 服务器根路径
    path: './dist', // 编译到当前目录
    filename: 'build.js' // 编译后的文件名字
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.(png|jpg|gif|ico)$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]' },
      { test: /\.(woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      AptAntd: __dirname + '/src/components/AptAntd.js',
      mainUtils: __dirname + '/src/utils/index.js',
      amosConfiger: __dirname + '/src/configer/index.js'
    }
  }
};

if (process.env.NODE_ENV !== 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ];
} else {
  module.exports.devtool = '#source-map';
}
