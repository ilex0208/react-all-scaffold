import Koa from 'koa';

/**
 * koa-convert将koa 1.x版本的中间件转换为 2.x版本
 * 实质是1.x的是yield实现，2.x是promise实现
*/
import convert from 'koa-convert';
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.config';
import historyApiFallback from 'koa-connect-history-api-fallback';
//  koa静态服务器
import serve from 'koa-static';
//  koa代理
import proxy from 'koa-proxy';
//  nodejs debug组件，调试用
import _debug from 'debug';
// nodejs log组件,用来输出日志
import easylogger from 'eazy-logger';
// 配置easylogger的显示参数
var template = '[{blue:%s}]';
var loggerlogger = easylogger.Logger({
  prefix: template.replace('%s', 'BS浏览地址'),
  useLevelPrefixes: false
});
//  相关配置文件
import config from '../config';
//  webpack调试服务
import webpackDevMiddleware from './middleware/webpack-dev';
//  webpack热启动服务
import webpackHMRMiddleware from './middleware/webpack-hmr';

//  debug后面设置命名空间
const debug = _debug('app:server');
const paths = config.utils_paths;
const app = new Koa();

// Enable koa-proxy if it has been enabled in the config.
if (config.proxy && config.proxy.enabled) {
  app.use(convert(proxy(config.proxy.options)));
}

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.
app.use(convert(historyApiFallback({
  verbose: false
})));

// ------------------------------------
// 配置webpack热启动，热替换
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig);

  // Enable webpack-dev and webpack-hot middleware
  const { publicPath } = webpackConfig.output;

  app.use(webpackDevMiddleware(compiler, publicPath));
  app.use(webpackHMRMiddleware(compiler));

  // Serve assets from ~/src/assets since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(convert(serve(paths.client('assets'))));

  debug('服务启动成功');
  debug('----------------------------------------------------------------');
} else {
  debug(
    '系统已经进入了发布模式，发布的文件目录在~/dist目录下，你可以把文件拷贝到其它中间件下' +
    '前提是必须发布到根目录下面，例如你可以采用nginx去发布dist下面的文件'
  );

  app.use(convert(serve(paths.dist())));
}

export default app;
