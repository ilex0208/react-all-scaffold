/**
 * 封装异步请求
 * @author ilex
 * @description 采用Promise实现异步请求
 * @param {path} path 访问路径
 * @param {params, data} 访问配置参数, 携带的数据
 */
import superagent from 'superagent';
import Cookie from 'react-cookie';

const methods = [
  'get',
  'head',
  'post',
  'put',
  'del',
  'options',
  'patch'
];

class _Api {

  constructor(opts) {

    this.opts = opts || {};

    if (!this.opts.baseURI){
      throw new Error('baseURI option is required');
    }
    methods.forEach(method =>
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](this.opts.baseURI + path);

        if (params) {
          request.query(params);
        }

        if (this.opts.headers) {
          request.set(this.opts.headers);
          request.set({'X-Api-Key': Cookie.load('api_key')});
        }

        if (data) {
          request.send(data);
        }

        request.end((err, res = {}) => {
          return resolve(res);
        });

      })
    );

  }

}

const Api = _Api;

export default Api;
