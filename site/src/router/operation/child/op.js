import op from './../../../containers/biz/operation/Other';

const opRoute = (store) => ({
  path: '/operation/op1',
  /*  当路由匹配时,异步注入相应组件  */
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, op);
    }, 'op');
  }
});
export default opRoute;
