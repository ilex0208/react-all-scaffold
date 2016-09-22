import React, {Component, PropTypes} from 'react';
import NavMenu from './../../../../components/common/nav';

/**
 * 左侧菜单导航
 */
class LeftContainer extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.menus !== this.props.menus;
  }

  _handleClick(e) {
    this.setState({
      currentSelectKey: e.key,
      openKeys: e.keyPath.slice(1)
    });
  }

  _onToggle = (info) => {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
    });
  }

  render() {
    return (
      <NavMenu
        onToggle={this._onToggle}
        handleClick={this._handleClick}
        {...this.props}
      />
    );
  }
}

LeftContainer.propTypes = {
  menus: PropTypes.any
};

export default LeftContainer;
