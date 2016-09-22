
const operationRoute = (store) => ({
  path: 'operation',
  /*  当路由匹配时,异步注入相应组件  */
  getComponent(nextState, cb) {
    /*  webpack通过'require.ensure'来创建一个分割点,同时将异步模块进行绑定   */
    require.ensure([], (require) => {
      /*  webpack使用require回调来定义定依赖绑定的模块  */
      const Operation = require('./../../containers/biz/operation').default;
      // const reducer = require('reducers/runtimeReducer').default;

      /*  Add the reducer to the store on key 'operation'  */
      // injectReducer(store, { key: 'operation', reducer });

      /*  Return getComponent   */
      cb(null, Operation);

      /* Webpack named bundle   */
    }, 'operation');
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./child/home').default(store),
        require('./child/op').default(store)
      ]);
    });
  }
});

export default operationRoute;
