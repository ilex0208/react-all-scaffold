import React, {Component, PropTypes} from 'react';
import {Link,browserHistory} from 'react-router';
import {Menu, Icon, Popconfirm} from 'AptAntd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
import {RouterPath} from 'amosConfiger';
/**
 * 用户菜单
 */
class UserMenu extends Component {
  constructor(props) {
    super(props);
  }

  quitsys(){
    console.log('已退出');
    let {logout} = this.props;
    logout();
    // 跳转到某一个页面
    browserHistory.push(RouterPath.login);
  }

  render() {
    let {username} = this.props;
    return (
      <Menu mode='horizontal'>
        <SubMenu title={<span><Icon type='user' />{username}</span>}>
          <MenuItem key='usercenter'>
            <Link to='core/user'>个人中心</Link>
          </MenuItem>
          <MenuItem key='system'>
            <Link to='sysconfig'>系统设置</Link>
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
  }
}

UserMenu.propTypes = {
  username: PropTypes.string,
  logout: PropTypes.func
};

export default UserMenu;
