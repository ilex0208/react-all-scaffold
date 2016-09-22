#####action
>redux 流程的 action，并把action部署到对应容器和组件中
  ==》狭义的action是指一个简单的对象，对象的结构如下，只要在对象内包含type属性指明action的名称即可，
      同时，在对象的其他属性里，可以以任何形式自由保存其他相关数据

  ==》广义的 action 是指在中间件的支持下，dispatch 函数可以调用的数据类型，
      除了普通action之外，常见的有 thunk, promise 等
