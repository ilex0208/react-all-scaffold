/**
 *
 * @authors ilex
 * @date    2016-07-23 14:41:35
 * @description route
 */

import React from 'react';// 此处需要导入React核心包
// 引入React-Router模块
import { Router, Route, IndexRoute } from 'react-router';
import Cookie from 'react-cookie';
import {RouterPath, Constants} from 'amosConfiger';
import {getCookie} from 'mainUtils';
import App from './App';

// 引入单个页面（包括嵌套的子页面）
import Home from './../containers/home';
import Home2 from './../containers/home2';

import Nmps from './../containers/biz/nmps';

import OperationCenter from './../containers/biz/operation';
import OpHome from './../containers/biz/operation/OpHome';
import OpCenter from './../containers/biz/operation/center';

import Analysis from './../containers/biz/analysis';

import Core from './../containers/core';
import {ControlCenter, EditComponent, AddComponent} from './../containers/controlcenter';
import NotFound from './../containers/common/notfound';

import Login from './../containers/auth/login';

const isLogin = (next, replace, callback) => {
  // if (!Cookie.load(Constants.api_key) && next.location.pathname != '/login') {
  //   replace('/login');
  // }
  callback();
};

// 配置路由
const route = (syncHistory) => (
  <Router history={syncHistory} >
    <Route path='/' component={App} onEnter={isLogin}>
      <IndexRoute component={Home} />
      <Route path='home' component={Home2} />

      <Route path='nmps' component={Nmps} >
        <Route path='/nmps/center' component={Home2} />
        <Route path='/nmps/acanalog' component={Home2} />
      </Route>
      <Route path='operation' component={OperationCenter} >
        <Route path='/operation/ophome' component={OpHome} />
        <Route path='/operation/op1' component={OpCenter} />
      </Route>

      <Route path='analysis' component={Analysis} >
        <Route path='/analysis/analysisCenter' component={NotFound} />
        <Route path='/analysis/other' component={NotFound} />
      </Route>

      <Route path='/core' component={Core}>
        <Route path='/core/coms' component={ControlCenter} />
        <Route path='/core/editCom/:id' component={EditComponent} />
        <Route path='/core/addCom' component={AddComponent} />
        <Route path='/core/user' component={AddComponent} />
      </Route>

      <Route path="login" component={Login} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

// const route = (syncHistory) => (
//   <Router history={syncHistory} >
//     <Route path='/' onEnter={isLogin}>
//       <IndexRedirect to='home' />
//       <Route component={App}>
//         <Route path='home' component={Home2} />
//       </Route>
//       <Route path='login' component={Login} />
//     </Route>
//   </Router>
// );

export default route;


