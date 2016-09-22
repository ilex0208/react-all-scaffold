/**
 * 标志是否采用mock
 */
const isNative = true;
/**
 * 系统访问后台接口地址
 */
//根url
export const baseURI = 'http://localhost:3001/';

export const prifix = 'http://localhost:3001/';

export const navs = `${prifix}navs`;

export const tabtable = `${prifix}tabtable`;

export const cores = `${prifix}cores`;

/**
 * 用户列表
 */
export const user = isNative ? 'userList' : 'users/user';
/**
 * 权限
 */
export const permissions = isNative ? 'permissions' : 'users/permissions';

export const loginAuth = isNative ? 'loginAuth' : 'sessions/auth';

export const thirdAuth = isNative ? 'thirdAuth' : 'sessions/thirdAuth';

