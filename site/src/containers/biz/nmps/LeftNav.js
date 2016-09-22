import React, {Component, PropTypes} from 'react';
import LeftContanier from './../../common/left';

// 引入redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchMenusIfNeeded} from './../../../action/initialAction';
/**
 * 对nmps进行组装
 */
class LeftNav extends Component {
    /**
   * 调用actions进行数据更新
   */
  componentDidMount() {
    let {leftMenuActions} = this.props;
    leftMenuActions();
  }
  render() {
    let {leftMenus} = this.props;
    return (
      <LeftContanier {...leftMenus} />
    );
  }
}

LeftNav.propTypes = {
  children: PropTypes.any,
  leftMenus: PropTypes.any,
  leftMenuActions: PropTypes.any
};

LeftNav.defaultProps = {
  id:'left',
  navconfig:{
    theme:'light',navStyle:'third-nav-item',openKeys:'',defaultOpenKeys:'',defaultSelectedKeys:'',currentSelectKey:'',menuMode:'horizontal'
  },
  subMenu:[]
};

function mapStateToProps(state) {
  console.log('将state转为props-->',state);
  const leftMenus = state.initialData?state.initialData.leftMenus:[];
  return {
    leftMenus: leftMenus
  };
}

function buildActionDispatcher(dispatch) {
  return {
    leftMenuActions: bindActionCreators(fetchMenusIfNeeded, dispatch)
  };
}

export default connect(mapStateToProps, buildActionDispatcher)(LeftNav);
