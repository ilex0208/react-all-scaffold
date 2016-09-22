import React, {PropTypes,Component} from 'react';
import SearchBox from './SearchBox';
import {Icon, Row, Col} from 'AptAntd';
import NavMenu from './../../../components/common/nav';
import {Link} from 'react-router';
import {fetchPost} from 'mainUtils';
import {navs} from './../../../configer/urlconfiger';
import UserMenu from './UserMenu';
import classNames from 'classnames';
/**
 * 顶部菜单列表
 */
class TopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      menuVisible: false,
      isFirstFrame: true,
      headerCol: {
        logoCol: {lg: 4, md: 6, sm: 7, xs: 18},
        menuCol: {lg: 18, md: 15, sm: 14, xs: 0},
        userCol: {lg: 2, md: 3, sm: 3, xs: 6}
      },
      topHeader:{}
    };
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    this._getTopNav();
  }

  _getTopNav(){
    const url = navs;
    fetchPost(url,(data)=>this.setState({topHeader:data.topHeader}));
  }

  _handleClick(e) {
    this.setState({
      current: e.key
    });
  }

  handleMenuIconClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      menuVisible: true
    });
  }

  render() {
    const {user,logout} = this.props;
    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !this.state.isFirstFrame
    });
    return (
      <header id='header' className={headerClassName}>
        <Row>
          <Col {...this.state.headerCol.logoCol}>
            <Icon
              className='nav-phone-icon'
              onClick={this.handleMenuIconClick}
              type='menu'
            />
            <Link to='/' id='logo'>
              <img alt="" src='logo/logo.png' id='logoImg' />
              <span>Ilex React all脚手架</span>
            </Link>
          </Col>
          <Col
            className={`nav ${this.state.menuVisible ? 'nav-show' : ''}`}
            {...this.state.headerCol.menuCol} style={{ display: 'block' }}
          >
            <div id='searchBox'>
              <SearchBox placeholder='组件搜索...' />
            </div>
            <div className='top-menu'>
              <NavMenu handleClick={this._handleClick} {...this.state.topHeader} />
            </div>
          </Col>
          <Col {...this.state.headerCol.userCol}>
            <div className='top-user'>
              <UserMenu username={user?user.userName:''} logout={logout} />
            </div>
          </Col>
        </Row>
      </header>
    );
  }
}

TopContainer.propTypes = {
  user:PropTypes.object,
  logout:PropTypes.func
};

export default TopContainer;
