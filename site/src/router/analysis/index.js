const analysisRoute = (store) => ({
  path: 'analysis',
  /*  当路由匹配时,异步注入相应组件  */
  getComponent(nextState, cb) {
    /*  webpack通过'require.ensure'来创建一个分割点,同时将异步模块进行绑定   */
    require.ensure([], (require) => {
      /*  webpack使用require回调来定义定依赖绑定的模块  */
      const Analysis = require('./../../containers/biz/analysis').default;
      // const reducer = require('reducers/runtimeReducer').default;

      /*  Add the reducer to the store on key 'analysis'  */
      // injectReducer(store, { key: 'analysis', reducer });

      /*  Return getComponent   */
      cb(null, Analysis);

      /* Webpack named bundle   */
    }, 'analysis');
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./child/center').default(store),
        require('./child/demo1').default(store),
        require('./child/demo2').default(store)
      ]);
    });
  }
});

export default analysisRoute;
