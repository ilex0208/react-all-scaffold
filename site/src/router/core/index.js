const coreRoute = (store) => ({
  path: 'core',
  /*  当路由匹配时,异步注入相应组件  */
  getComponent(nextState, cb) {
    /*  webpack通过'require.ensure'来创建一个分割点,同时将异步模块进行绑定   */
    require.ensure([], (require) => {
      /*  webpack使用require回调来定义定依赖绑定的模块  */
      const ControlCenter = require('./../../containers/core').default;
      /*  Return getComponent   */
      cb(null, ControlCenter);
      /* Webpack named bundle   */
    }, 'core');
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./coms/coms').default(store),
        require('./coms/add').default(store),
        require('./coms/edit').default(store)
      ]);
    });
  }
});

export default coreRoute;
