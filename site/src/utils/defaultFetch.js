import fetch from 'isomorphic-fetch';

/**
 * fetch api
 */
const defaultFetch = (url, callback) =>{
  fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('从服务端获取数据失败！');
      }
      else {
        return response.json();
      }
    })
    .then(callback)
    .catch(e => { console.log(e.message); });
};

export default defaultFetch;

