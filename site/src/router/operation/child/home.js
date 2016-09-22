import opHome from './../../../containers/biz/operation/OpHome';

const opHomeRoute = (store) => ({
  path: '/operation/ophome',
  /*  当路由匹配时,异步注入相应组件  */
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, opHome);
    }, 'opHome');
  }
});

export default opHomeRoute;
