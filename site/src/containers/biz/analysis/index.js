import React, {Component, PropTypes} from 'react';
import BizContents from './../../common/contents';
import {Link} from 'react-router';
import { Menu, Icon } from 'AptAntd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
import AnalysisCenter from './center';
import './index.scss';

const left = () => (
  <Menu mode="inline" defaultSelectedKeys={['analysisCenter']}>
    <MenuItem key="analysisCenter"><Link to="/analysis/analysisCenter"><Icon type="user" />分析中心</Link></MenuItem>
    <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
      <MenuItem key="sub1-1"><Link to="/analysis/demo1">测试选项</Link></MenuItem>
      <MenuItem key="sub1-2"><Link to="/analysis/demo2">测试选项2</Link></MenuItem>
      <MenuItem key="sub1-3">选项3</MenuItem>
      <MenuItem key="sub1-4">选项4</MenuItem>
    </SubMenu>
  </Menu>
);
class Analysis extends Component {
  render() {
    let {children} = this.props;
    return (
      <BizContents leftNav={left} children={children || <AnalysisCenter />} />
    );
  }
}

Analysis.propTypes = {
  children: PropTypes.any
};

export default Analysis;
