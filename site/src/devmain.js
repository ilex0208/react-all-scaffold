/**
 *
 * @authors ilex
 * @date    2016-07-18 16:42:35
 * @description 主入口模块
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import route from './routes';
import configureStore from './store';

// 引入主体样式文件
import './styles';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    {route(history)}
  </Provider>
  ), document.getElementById('app'));

