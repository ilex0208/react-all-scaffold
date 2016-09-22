/**
 * 所有的工具类,全由index进行导出
 */
import fetchPost from './fetchPost';

export {fetchPost};

import Api from './api';
import {UrlConfiger} from 'amosConfiger';
const api = new Api({
  baseURI: UrlConfiger.baseURI,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'x-access-token': window.localStorage.getItem('token')
  }
});

export {api};

export const isPromise = (value) => {
  if (value !== null && typeof value === 'object') {
    return value.promise && typeof value.promise.then === 'function';
  }
};

export const getCookie = (name) => {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};
