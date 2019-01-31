# All
整体包含<b style='color:red'>6</b>个部分：
## 1. **adapter**
>adapter前端适配器层,包含解析后台服务接口，用来生成业务组件

## 2. **assembly**
>assembly用来存放自定义的前台业务组件,同时将适配器层生成的业务组件一同进行自动装配，
    主要功能：
        1、存放自定义前台业务组件，存放生成的业务组件
        2、将前端业务组件进行自动装配,生成界面

## 3. **common**
>common用来存放通用模块,主要包含node后端以及其它通用模块

## 4 .**basicComponents**
>basicComponents用来存基础组件

## 5. **bizComponents**
>bizComponents用来存放编译前的业务组件

## 6. **site**
>site是前端业务系统主框架,或经过配置以后动态生成后的主系统

## 7. **doc**
>存放文档


### npm需要全局安装的组件

***

*  webpack  ``js打包构建`` webpack@1.13.1 webpack-dev-server@1.14.1
*  node-sass   ``scss样式构建``,安装教程详见 "node-sass安装教程.md"
npm install -g webpack@1.13.1 webpack-dev-server@1.14.1 node-sass@3.8.0

### vistual code需要安装的组件
***

*  Eslint   ``需要配合eslint插件一起使用``
   >npm install -g babel-eslint@6.0.5 eslint@2.13.1 eslint-tinker@0.3.1 eslint-config-standard@5.3.1 eslint-config-standard-react@2.4.0 eslint-plugin-babel@3.3.0 eslint-plugin-promise@1.3.2 eslint-plugin-react@5.2.2 eslint-plugin-standard@1.3.1 eslint-plugin-import@1.11.0 eslint-plugin-jsx-a11y@1.2.0 eslint-config-airbnb@9.0.1

   理论上Vs插件可以支持所有的异常提醒，但是Vs当前不支持异常定位
*  styleLint  ``支持scss校验,组要配合styleLint插件使用``
   >npm install -g stylelint@7.0.3 stylelint-config-standard@11.0.0 stylelint-webpack-plugin@0.2.0 postcss@5.1.1 postcss-loader@0.9.1

*  EditConfig for vs Code
*  beautify ``代码格式化工具，与EditConfig配合使用``


### 命令
*  清除 ``npm run clean``
*  调试 ``npm run start/npm start``
*  编译 ``npm run dev``
*  发布 ``npm run prod``
*  lint ``npm run lint``
*  lint:fix `npm run lint:fix`
