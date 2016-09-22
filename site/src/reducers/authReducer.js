import { Notification } from 'AptAntd';
import Cookie from 'react-cookie';
import {Constants} from 'amosConfiger';
import {
  LOGIN_SUCCESS,
  THIRD_PARTY_AUTH_SUCCESS,
  GET_PERMISSIONS_SUCCESS,
  LOGOUT
} from '../action/constants';

function auth(state = {}, action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return loginFunc(state, action.payload);
    case THIRD_PARTY_AUTH_SUCCESS:
      return loginFunc(state, action.payload);
    case GET_PERMISSIONS_SUCCESS:
      return permissionsFunc(state, action.payload);
    case LOGOUT:
      return logoutFunc(state, action.payload);
    default:
      return state;
  }
}

const loginFunc = (state, payload) => {
  if(payload.status === 200) {
    Notification.success({message: '登陆成功'});
    Cookie.save(Constants.api_key, payload.body.api_key, {path: '/', 'expires': new Date(Date.now() + (1000 * 60 * 60 * 24 * 365))});
    localStorage.setItem(Constants.userId, payload.body.id);
    localStorage.setItem(Constants.userName, payload.body.en_name);
    return Object.assign({}, state, {user: payload.body});
  } else {
    Notification.error({
      message: '登陆失败',
      description: '用户名/密码不正确！'
    });
    return state;
  }
};

const permissionsFunc = (state, payload) => {
  if(payload.status === 200) {
    localStorage.setItem(Constants.permissions, JSON.stringify(payload.body));
    return { permissions: payload.body };
  } else {
    return state;
  }
};

const logoutFunc = (state, payload) => {
  Cookie.remove(Constants.api_key, { path: '/' });
  localStorage.removeItem(Constants.userId, { path: '/' });
  localStorage.removeItem(Constants.userName, { path: '/' });
  localStorage.removeItem(Constants.permissions);
  return {permissions: null, user: null};
};

export default auth;
