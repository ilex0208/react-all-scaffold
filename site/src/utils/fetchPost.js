// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';

/**
 * @param {string} url 请求地址
 * @param {function} callback 请求成功回调
 */
export default function fetchPost(url, callback) {
  fetch(url)
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    else
    {
      throw new Error('从服务端获取数据失败！');
    }
  })
  .then(callback)
  .catch(e => { console.log(e.message); });
}
