import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Menu, Icon, Popconfirm} from 'AptAntd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const HasLogin =(userName)=> (
  <Menu mode='horizontal'>
    <SubMenu title={<span><Icon type='user' />{userName}</span>}>
      <MenuItem key='usercenter'>
        <Link to='core/user'>个人中心</Link>
      </MenuItem>
      <MenuItem key='system'>
        <Link to='core/user'>系统设置</Link>
      </MenuItem>
      <Menu.Divider />
      <MenuItem key='quitsys'>
        <Popconfirm placement="bottom" title="确定要注销吗？" onConfirm={() => this.quitsys()}>
          <Link to='core/user'>注销</Link>
        </Popconfirm>
      </MenuItem>
    </SubMenu>
  </Menu>
);

const NotLogin = () =>(
  <div className='header-user'>
    欢迎访问,请<a href='#' target='_blank'>登录</a>
    <a href='#' target='_blank'>注册</a>
  </div>
);

const User = props => {
  let {isLogin, userName} = props;
  return (
    <div>
      {isLogin ? <HasLogin userName={userName} />:<NotLogin />}
    </div>
  );
};

User.propTypes = {
  isLogin: PropTypes.bool.isRequire,
  userName: PropTypes.string
};

export default User;
