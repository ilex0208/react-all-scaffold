import {EditComponent} from './../../../containers/controlcenter';

const editComs = (store) => ({
  path: '/core/editCom/:id',
  /*  当路由匹配时,异步注入相应组件  */
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, EditComponent);
    }, 'editCom');
  }
});
export default editComs;
