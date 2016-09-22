import analysisCenter from './../../../containers/biz/analysis/center';

const centerRoute = (store) => ({
  path: '/analysis/analysisCenter',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, analysisCenter);
    }, 'analysisCenter');
  }
});

export default centerRoute;
