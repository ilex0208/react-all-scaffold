import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
// 导入中间件
import promiseMiddleware from './promiseMiddleware';
// 已经合并多个reducers
import rootReducers from './../reducers';

import initialData from './../reducers/initdataReducer';
import runTimeData from './../reducers/runtimeReducer';
import authReducer from './../reducers/authReducer';

// 创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
export const store = createStore(rootReducers);

// 创建一个带中间件的store
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']}),
  createLogger()
)(createStore);

// 结合 react-router-redux
const reducer = combineReducers({
  initialData,
  runTimeData,
  authReducer,
  routing: routerReducer
});

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

