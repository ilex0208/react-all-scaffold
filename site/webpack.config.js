/**
 * webpack 打包配置文件
 * @author ilex
 */

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
/**
 * 合并公共模块
 */
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const __path = 'dist';
// ------------------------------------
// Environment
// ------------------------------------
const __DEV__ = 'development';

// 发布模式
// process.env.NODE_ENV = 'production';

console.log('>创建webpack配置文件.');

const webpackConfig = {
  name: 'amos',
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {}
};

const vendors = [
  'react',
  'react-dom',
  'classnames',
  'react-router',
  'redux',
  'react-redux',
  'react-router-redux',
  'lodash',
  'd3',
  'recharts',
  'echarts',
  'antd'
];
// ------------------------------------
// 入口点
// ------------------------------------
webpackConfig.entry = {
  index: './src/devmain.js',
  vendor: vendors
};

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  path: path.join(__dirname, __path), // 编译到当前目录
  publicPath: '/dist/', // 服务器根路径
  filename: 'build.js' // 编译后的文件名字
};

// ------------------------------------
// Loaders
// ------------------------------------
webpackConfig.module.loaders = [
  { test: /\.js$/, exclude: /node_modules/, loader: 'babel', cacheDirectory: true },
  { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },
  { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
  { test: /\.less$/, loader: 'style-loader!css-loader!less-loader?sourceMap' },
  { test: /\.(jpe?g|png|gif)$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]' },
  { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
  { test: /\.(woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]' }
];

// ------------------------------------
// 添加webpack加载别名,用于导包重定向，优化打包以及代码
// ------------------------------------
webpackConfig.resolve.alias = {
  AptAntd: __dirname + '/src/components/AptAntd.js',
  mainUtils: __dirname + '/src/utils/index.js',
  amosConfiger: __dirname + '/src/configer/index.js',
  CONTAINERS: __dirname + '/src/containers'
};

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new CopyWebpackPlugin([
    { from: 'index.html', to: 'index.html' }
  ]),
  new CommonsChunkPlugin({
    name: 'common',
    filename: 'common.js',
    chunks: ['vendor', 'index', 'login', 'nmps', 'operation']
  })
];

// 启动发布模式
if (process.env.NODE_ENV === 'production') {
  console.log('>启动发布模式(production).');
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  );
  module.exports.devtool = '#source-map';
}

if(__DEV__){
  console.log('>启动实时预览插件(development) (HMR, NoErrors).');
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

module.exports = webpackConfig;
