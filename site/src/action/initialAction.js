import {fetchPost} from 'mainUtils';
import {navs} from './../configer/urlconfiger';

import {HEADER_LOAD, LEFT_MENUS, REQUEST_LEFT_MENUS, RECEIVE_LEFT_MENUS} from './constants';

export const load = (state) => {
  return {
    type: HEADER_LOAD,
    data: state
  };
};

export const initLeftMenu = (state) => {
  return {
    type: LEFT_MENUS,
    data: state
  };
};

function requestPosts() {
  return {
    type: REQUEST_LEFT_MENUS
  };
}

function receiveLeftMenu(jsonData) {
  return {
    type: RECEIVE_LEFT_MENUS,
    data: jsonData.leftMenu
  };
}

function fetchLeftMenu() {
  const lmMock = navs;
  const lmUrl = 'http://localhost:8080/CXF_RESTFul_03/cxf/gd/gds';
  return dispatch => {
    dispatch(requestPosts());
    return fetchPost(lmMock, jsonData => dispatch(receiveLeftMenu(jsonData)));
  };
}

function shouldFetchLeftmenu(state) {
  // const menus = state.get(StateConfig.leftMenus);
  const menus = state.leftMenus;
  if (!menus) {
    return true;
  } else if (menus.isFetching) {
    return false;
  } else {
    return menus.didInvalidate;
  }
}

/**
 * 检测是否需要异步获取菜单数据
 */
export function fetchMenusIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchLeftmenu(getState())) {
      return dispatch(fetchLeftMenu());
    }
  };
}
