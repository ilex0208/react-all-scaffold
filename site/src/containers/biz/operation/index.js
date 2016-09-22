import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import { Menu, Icon } from 'AptAntd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
import BizContents from './../../common/contents';
import OpCenter from './center';

import './index.scss';

const nav = () => (
  <Menu mode="inline" defaultSelectedKeys={['ophome']}>
    <MenuItem key="ophome"><Link to="/operation/ophome"><Icon type="user" />运维中心</Link></MenuItem>
    <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
      <MenuItem key="sub1-1"><Link to="/operation/op1">测试选项</Link></MenuItem>
      <MenuItem key="sub1-2"><Link to="/operation/op2">测试选项2</Link></MenuItem>
      <MenuItem key="sub1-3">选项3</MenuItem>
      <MenuItem key="sub1-4">选项4</MenuItem>
    </SubMenu>
    <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
      <MenuItem key="5">选项5</MenuItem>
      <MenuItem key="6">选项6</MenuItem>
      <MenuItem key="7">选项7</MenuItem>
      <MenuItem key="8">选项8</MenuItem>
    </SubMenu>
    <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
      <MenuItem key="9">选项9</MenuItem>
      <MenuItem key="10">选项10</MenuItem>
      <MenuItem key="11">选项11</MenuItem>
      <MenuItem key="12">选项12</MenuItem>
    </SubMenu>
  </Menu>
);

class Operation extends Component {
  render() {
    let {children} = this.props;
    return (
      <BizContents leftNav={nav} children={children || <OpCenter />} />
    );
  }
}

Operation.propTypes = {
  children: PropTypes.any
};

export default Operation;

