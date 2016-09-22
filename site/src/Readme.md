####定义
　　这里存放IlexReactAll前端

####目录定义
1.  action
>redux 流程的 action，并把action部署到对应容器和组件中
  ==》狭义的action是指一个简单的对象，对象的结构如下，只要在对象内包含type属性指明action的名称即可，
      同时，在对象的其他属性里，可以以任何形式自由保存其他相关数据

  ==》广义的 action 是指在中间件的支持下，dispatch 函数可以调用的数据类型，
      除了普通action之外，常见的有 thunk, promise 等

2.  app
> 仅存放系统框架内部固定的模块组件

3.  assets
>存放静态资源

4.  business
>仅存放自动生成的业务组件

5.  components
>存放初始基础组件

3.  configer
>1、组件内部配置,比如常量定义  2、系统配置：版本号等常量

4.  containers
> 系统容器，仅限于与router结合使用,是视觉组件的容器，负责把传入的状态变量渲染成视觉组件，在浏览器显示出来.
该部分进行reducer与容器连接，将相关action与store传入
  本前端系统不采用iframe进行相关路由：
    `需要明确区别，为什么不用iframe做1.支持返回前进，2.支持缓存状态，3.方便调用主框架方法`

6.  routes
>默认的，系统只存在一个routes，用于适配containers容器内切换

7.  reducers
>是动作(action)的处理中心， 负责处理各种动作并产生新的状态（state），返回给store。

开发reducer的内容很明确清晰，就是开发一类函数，接受action 和 当前的state，返回新的state，推荐使用immutable.js 这个数据静态化库

8.  store
>是应用的状态管理中心，保存着是应用的状态（state），当收到状态的更新时，会触发视觉组件进行更新.
系统store,一个应用中，就只有一个 store，store 里的 state 是共用的.
官方示例`https://www.npmjs.com/package/react-router-redux`
或`https://github.com/reactjs/redux/tree/master/examples/real-world`

The goal of the React Store is to simplify the data flow in ReactJS applications.
The following diagram depicts the pattern used by the React Store.
------------------------------------------------------------------
|      ╔══════════════╗                                          |
|      ║ App ┌──────┐ ║   getData()  ╔═════════╗  HTTP GET       |
|      ║     │ View ├─╫─────────────>║  Store  ╟──────────>      |
|      ║     └──────┘ ║              ╚════╤════╝                 |
|      ╚══════════════╝<─ ─ ─ ─ ─ ─ ─ ─ ─ ┘                      |
|                           forceUpdate()                        |
------------------------------------------------------------------
整个redux流程的逻辑非常清晰，数据流是单向循环的，就像一个生产的流水线，可用可用如过程进行展现：
store（存放状态） -> container（显示状态） -> reducer （处理动作）-> store
redux将store分发到各个容器,容器负责将状态显示,触发reducer进行动作处理,在action中进行stroe修改,返回store

9.  styles
>系统整体布局，样式


总体结构如下：

├── bin                 # 启动脚本
├── bower_components    # 存放第三方组件库
├── config              # 项目配置文件
├── dist                # 项目发布后的文件
├── doc                 # 存放项目组件文档
├── server              # Koa 程序 (使用 webpack 中间件)
│   └── main.js         # 服务端程序入口文件
│   └── server.js       # 采用nodejs作为服务端的入口文件
├── src                 # 程序源文件，存放整个IlexReactAll
│   ├── main.js         # 程序主入口
│   ├── index.html      # html模板文件
│   ├── action          # 项目redux流程中的action
│   ├── app             # 仅存放系统框架内部固定的模块组件
│   ├── assets          # 存放静态资源(建议不要到处import源文件)
│   ├── business        # 仅存放自动生成的业务组件
│   ├── components      # 存放初始基础组，以及二次开发
│   ├── configer        # 组件内部配置
│   ├── containers      # 可复用的容器组件
│   ├── reducers        # 存放reducer
│   ├── router          # 存放异步route
│   ├── routes          # 最基本路由实现，生产环境中不采用，仅用于测试
│   ├── store           # 存放系统store
│   ├── styles          # 系统主体样式文件
│   ├── template        # 模板文件
│   ├── utils           # 工具目录，主要是reducer注册、异步、事件
└── tests               # 单元测试
└── webpack             # 所有打包配置项
