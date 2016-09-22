import webpack from 'webpack';
// css兼容性转换
import cssnano from 'cssnano';
// css下一代标准
import cssnext from 'postcss-cssnext';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ContentIncluder from './content-includer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from '../config';
import _debug from 'debug';

const debug = _debug('app:webpack:config');
const paths = config.utils_paths;
const {__DEV__, __PROD__, __TEST__} = config.globals;

debug('创建webpack配置文件.');
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    root: paths.client(),
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {}
};

// ------------------------------------
// 入口点
// ------------------------------------
const APP_ENTRY_PATHS = [
  'babel-polyfill',
  paths.client('main.js')
];

webpackConfig.entry = {
  app: __DEV__
    ? APP_ENTRY_PATHS.concat(`webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`)
    : APP_ENTRY_PATHS,
  vendor: config.compiler_vendor
};

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  filename: `[name].[${config.compiler_hash_type}].js`,
  path: paths.dist(),
  publicPath: config.compiler_public_path
};

// ------------------------------------
// Plugins
// HtmlWebpackPlugin必须设置html-loader可动态加入html引用
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  new HtmlWebpackPlugin({
    title: 'Ilex React All scaffold',//标题
    template: paths.client('index.html'),//html模板路径
    hash: false,//为静态资源生成hash值
    favicon: paths.client('assets/favicon.ico'),//favicon路径
    filename: 'index.html',//生成的html存放路径
    inject: 'body',//允许插件修改哪些内容，为ture则包括head与body
    minify: {
      removeComments: false, //移除HTML中的注释
      collapseWhitespace: true//删除空白符与换行符
    }
  })
];

if (__DEV__) {
  debug('启动实时预览插件（development） (HMR, NoErrors).');
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
} else if (__PROD__) {
  debug('启动发布模式插件 (production) (OccurenceOrder, Dedupe & UglifyJS).');
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  );
}

// 在测试环境中无需拆分编译后的js文件，只需要导入一个包即可
if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  );
}

// ------------------------------------
// Pre-Loaders
// ------------------------------------
/*
[ NOTE ]
We no longer use eslint-loader due to it severely impacting build
times for larger projects. `npm run lint` still exists to aid in
deploy processes (such as with CI), and it's recommended that you
use a linting plugin for your IDE in place of this loader.

If you do wish to continue using the loader, you can uncomment
the code below and run `npm i --save-dev eslint-loader`. This code
will be removed in a future release.

webpackConfig.module.preLoaders = [{
  test: /\.(js|jsx)$/,
  loader: 'eslint',
  exclude: /node_modules/
}]

webpackConfig.eslint = {
  configFile: paths.base('.eslintrc'),
  emitWarning: __DEV__
}
*/

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON
// 这里包含两个模块文件(npm模块和bower模块)，后期如果需要添加新的模块，可以在这里添加
debug('------------------------------------');
debug('Loaders');
debug('------------------------------------');
debug('JavaScript / JSON');
debug('Css / Scss / Less');
webpackConfig.module.loaders = [{
  test: /\.(js|jsx)$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel',
  query: {
    cacheDirectory: true,
    plugins: ['transform-runtime', ['antd', { 'style': 'css' }]],
    presets: ['es2015', 'react', 'stage-0'],
    env: {
      production: {
        // presets: ['react-optimize'] 这个插件会导致ie下面发布失效，具体原因未知
      }
    }
  }
}, {
  test: /\.json$/,
  loader: 'json'
}];

// ------------------------------------
// Style Loaders
// ------------------------------------
// 用postcss loader时，采用cssnano进行优化，设置初始值.
const BASE_CSS_LOADER = 'css?sourceMap&-minimize';

// 添加被视为CSS modules样式的模块包名.
// 同时这些路径将被合并成一个单一的正则表达式
const PATHS_TO_TREAT_AS_CSS_MODULES = [
  // 'react-toolbox', (example)
];

// 如果配置文件中开启了CSS Modules，则项目中的styles将被视为Css Modules.
if (config.compiler_css_modules) {
  PATHS_TO_TREAT_AS_CSS_MODULES.push(
    paths.client().replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&') // eslint-disable-line
  );
}

const isUsingCSSModules = !!PATHS_TO_TREAT_AS_CSS_MODULES.length;

const cssModulesRegex = new RegExp(`(${PATHS_TO_TREAT_AS_CSS_MODULES.join('|')})`);

// 样式文件加载器, 采用CSS Modules实现.
if (isUsingCSSModules) {
  const cssModulesLoader = [
    BASE_CSS_LOADER,
    'modules',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
  ].join('&');

  webpackConfig.module.loaders.push({
    test: /\.scss$/,
    include: cssModulesRegex,
    loaders: [
      'style',
      cssModulesLoader,
      'postcss',
      'sass?sourceMap'
    ]
  });

  webpackConfig.module.loaders.push({
    test: /\.css$/,
    include: cssModulesRegex,
    loaders: [
      'style',
      cssModulesLoader,
      'postcss'
    ]
  });

  /** 添加less */
  webpackConfig.module.loaders.push({
    test: /\.less$/,
    include: cssModulesRegex,
    loaders: [
      'style',
      cssModulesLoader,
      'postcss',
      'less?sourceMap'
    ]
  });
}

// 文件加载器,不采用Css Modules进行编译 (注意，以下loaders可以和采用CSS Modules的进行共存).
const excludeCSSModules = isUsingCSSModules ? cssModulesRegex : false;

webpackConfig.module.loaders.push({
  test: /\.scss$/,
  exclude: excludeCSSModules,
  loaders: [
    'style',
    BASE_CSS_LOADER,
    'postcss',
    'sass?sourceMap'
  ]
});
webpackConfig.module.loaders.push({
  test: /\.css$/,
  exclude: excludeCSSModules,
  loaders: [
    'style',
    BASE_CSS_LOADER,
    'postcss'
  ]
});
webpackConfig.module.loaders.push({
  test: /\.less$/,
  exclude: excludeCSSModules,
  loaders: [
    'style',
    BASE_CSS_LOADER,
    'postcss',
    'less'
  ]
});

// ------------------------------------
// Style Configuration
// ------------------------------------
webpackConfig.sassLoader = {
  includePaths: paths.client('styles')
};

webpackConfig.postcss = [
  cssnano({
    autoprefixer: {
      add: true,
      remove: true,
      browsers: ['last 2 versions']
    },
    discardComments: {
      removeAll: true
    },
    discardUnused: false,
    mergeIdents: false,
    reduceIdents: false,
    safe: true,
    sourcemap: true
  })
];
// debug(`loaders==>${webpackConfig.module.loaders}`);

// File loaders
/* eslint-disable */
webpackConfig.module.loaders.push(
  { test: /\.woff(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
  { test: /\.otf(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
  { test: /\.svg(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
  { test: /\.(png|jpg)$/, loader: 'url?limit=8192' }
)
/* eslint-enable */

/** 添加webpack加载别名,用于导包重定向，优化打包以及代码 */
webpackConfig.resolve.alias = {
  AptAntd: paths.client('components/AptAntd.js'),
  mainUtils: paths.client('utils/index.js'),
  amosConfiger: paths.client('configer/index.js')
};

debug(`AptAntd路径:${paths.client('components/AptAntd.js')}`);

// ------------------------------------
// 最后,完成配置
// ------------------------------------
// 当我们不知道 'public path'' 时(我们只知道在开发模式中启用了HMR， HMR is enabled [in development])，
// 此时需要采用'extractTextPlugin'来解决这个问题,详见:
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
if (!__DEV__) {
  debug('Apply ExtractTextPlugin to CSS loaders.');
  webpackConfig.module.loaders.filter((loader) =>
    loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[0]))
  ).forEach((loader) => {
    const [first, ...rest] = loader.loaders;
    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'));
    Reflect.deleteProperty(loader, 'loaders');
  });

  webpackConfig.plugins.push(
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true
    })
  );
}

// 打印所有loader
// webpackConfig.module.loaders.map(l=>debug(`loaders==>test:${l.test},${l.loaders?'loaders':'loader'}:${l.loaders||l.loader}`));

export default webpackConfig;
