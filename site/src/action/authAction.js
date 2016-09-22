import {api} from 'mainUtils';
import {UrlConfiger, Constants} from 'amosConfiger';
import Cookie from 'react-cookie';

import {
  LOGIN,
  THIRD_PARTY_AUTH,
  LOGOUT,
  GET_PERMISSIONS
} from './constants';

/**
 * 普通登陆验证
 * @export
 * @param {any} params
 * @returns
 */
export function loginAuth(params) {
  return {
    type: LOGIN,
    payload: {
      promise: api.post(UrlConfiger.loginAuth, { data: params })
    }
  };
}

/**
 * 第三方验证
 * @export
 * @param {any} params
 * @returns
 */
export function thirdAuth(params) {
  return {
    type: THIRD_PARTY_AUTH,
    payload: {
      promise: api.post(UrlConfiger.thirdAuth, { data: params })
    }
  };
}

/**
 * 获取权限
 * @export
 * @returns
 */
export function getPermissions() {
  return {
    type: GET_PERMISSIONS,
    payload: {
      promise: api.get(UrlConfiger.permissions)
    }
  };
}

/**
 * 退出操作
 * 因为需要修改getPermissions方法的生成数据，所以需要定义一个actions走reducer来重置数据
 * @export
 * @returns
 */
export function logout() {
  return {
    type: LOGOUT
  };
}

export function user() {
  return {
    api_key: Cookie.load(Constants.api_key),
    userId: localStorage.getItem(Constants.userId),
    userName: localStorage.getItem(Constants.userName)
  };
}

/**
 * 权限检查
 *
 * @export
 * @param {any} controller
 * @param {any} action
 * @returns
 */
export function checkPermissions(controller, action) {
  let permissions = JSON.parse(localStorage.getItem(Constants.permissions)), allow = false;
  if (permissions) {
    permissions.urls.allows.map((item) => {
      if (item.controller === controller && item.action === action) {
        allow = true;
      }
    });
  }
  return allow;
}

