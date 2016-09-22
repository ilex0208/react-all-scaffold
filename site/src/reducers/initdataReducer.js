/**
 * 初始化数据加载reducer
 */
import { fromJS } from 'immutable';
import {HEADER_LOAD, LEFT_MENUS, RECEIVE_LEFT_MENUS} from './../action/constants';

const initialState = {
  leftMenus:{}
};

const initialData = (state = initialState.leftMenus, action) => {
  switch (action.type) {
    case HEADER_LOAD:
      return fromJS(state).setIn(action.data).toJS();
    case LEFT_MENUS:
      return {leftMenus:action.data};
    case RECEIVE_LEFT_MENUS:
      return Object.assign({}, state, {leftMenus:action.data});
    default:
      return state;
  }
};

export default initialData;

