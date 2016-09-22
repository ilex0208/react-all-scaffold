/**
 *
 * @authors ilex
 * @date    2016-07-18 16:42:35
 * @description 合并各模块,组装各组件
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TopNav from './top';
import TopHeader from './header';
import {logout} from './../action/authAction';

class RootContainer extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * 调用actions进行数据更新
   */
  // componentDidMount() {
  //   let {leftMenuActions} = this.props;
  //   leftMenuActions();
  // }

  render() {
    let {user,logout,children} = this.props;
    return (
      <div>
        <TopNav user={user} logout={logout} />
        <div id='maincontent'>
          {children}
        </div>
      </div>
    );
  }
  // render() {
  //   let {children} = this.props;
  //   return (
  //     <div>
  //       <TopHeader />
  //       <div id='maincontent'>
  //         {children}
  //       </div>
  //     </div>
  //   );
  // }
}

RootContainer.propTypes = {
  children: PropTypes.any,
  user:PropTypes.object,
  logout:PropTypes.func
};

const mapStateToProps = (state) => {
  const {user,permissions} = state;
  return {
    user: user ? user : null,
    permissions: permissions
  };
};
const mapDispatchToProps = (dispatch) => {
  return { logout: bindActionCreators(logout, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);


