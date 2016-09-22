/* eslint key-spacing:0 spaced-comment:0 */
import path from 'path';
import _debug from 'debug';
import { argv } from 'yargs';
import ip from 'ip';

const localip = ip.address();
const debug = _debug('app:config');
debug('读取默认的调试配置文件.');

// ========================================================
// 默认的配置文件
// 采用development调试模式
// 可设置参数
// @param {String} NODE_ENV
// @param {String} PORT
// ========================================================
const config = {
  env : process.env.NODE_ENV || 'development',

  // ----------------------------------
  // 项目结构 Project Structure
  // 在任何模块文件内部，可以使用  __dirname  变量获取当前模块文件所在目录的完整绝对路径
  // ----------------------------------
  path_base  : path.resolve(__dirname, '..'),
  dir_client : 'src',
  dir_dist   : 'dist',
  dir_server : 'server',
  dir_test   : 'tests',
  dir_mock   : 'mock',

  // ----------------------------------
  // 服务器配置 Server Configuration
  // ----------------------------------
  server_host : localip, // use string 'localhost' to prevent exposure on local network
  server_port : process.env.PORT || 3000,

  // ----------------------------------
  // 编译器配置 Compiler Configuration
  // ----------------------------------
  compiler_css_modules     : false,
  compiler_devtool         : 'source-map',
  compiler_hash_type       : 'hash',
  compiler_fail_on_warning : false,
  compiler_quiet           : false,
  compiler_public_path     : '/',
  compiler_stats           : {
    chunks : false,
    chunkModules : false,
    colors : true
  },
  compiler_vendor : [
    'history',
    'react',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux'
  ],
    // 第三方
    // 'antd',
    // 'echarts',
    // 'rc-queue-anim',
    // 'rc-scroll-anim',
    // 'rc-tween-one',
    // 'rc-banner-anim'

  // ----------------------------------
  // 测试配置 Test Configuration
  // ----------------------------------
  coverage_reporters : [
    { type : 'text-summary' },
    { type : 'lcov', dir : 'coverage' }
  ]
};

debug(`采用Css Modules编译开启状况:${config.compiler_css_modules}`);

/************************************************
-------------------------------------------------

All Internal Configuration Below
Edit at Your Own Risk

-------------------------------------------------
************************************************/

// ------------------------------------
// Environment
// ------------------------------------
// N.B.: globals added here must _also_ be added to .eslintrc
config.globals = {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.env)
  },
  'NODE_ENV'     : config.env,
  '__DEV__'      : config.env === 'development',
  '__PROD__'     : config.env === 'production',
  '__TEST__'     : config.env === 'test',
  '__DEBUG__'    : config.env === 'development' && !argv.no_debug,
  '__COVERAGE__' : !argv.watch && config.env === 'test',
  '__BASENAME__' : JSON.stringify(process.env.BASENAME || '')
};

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
const pkg = require('../package.json');

config.compiler_vendor = config.compiler_vendor
  .filter((dep) => {
    if (pkg.dependencies[dep]) { return true; }

    debug(
      `Package "${dep}" was not found as an npm dependency in package.json; ` +
      `it won't be included in the webpack vendor bundle.
       Consider removing it from vendor_dependencies in ~/config/index.js`
    );
  });

// ------------------------------------
// Utilities
// Reflect.apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
// ------------------------------------
const resolve = path.resolve;
const base = (...args) =>
  Reflect.apply(resolve, null, [config.path_base, ...args]);

config.utils_paths = {
  base   : base,
  client : base.bind(null, config.dir_client),
  dist   : base.bind(null, config.dir_dist),
  mock   : base.bind(null, config.dir_mock)
};

// ========================================================
// Environment Configuration
// ========================================================
debug(`Looking for environment overrides for NODE_ENV "${config.env}".`);
const environments = require('./environments').default;
const overrides = environments[config.env];
if (overrides) {
  debug('发现配置文件, 将用此覆盖默认设置文件.');
  debug('可设置Babel-node启动的 NODE_ENV,DEBUG参数覆盖原始配置');
  Object.assign(config, overrides(config));
} else {
  debug('No environment overrides found, defaults will be used.');
}

export default config;
