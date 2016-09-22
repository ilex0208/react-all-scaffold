import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'AptAntd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

/**
 * 公共菜单构建组件
 */
class NavMenu extends Component {

  /**
   *构建菜单item
   *
   */
  builditem(items){
    let menuItemResult = [];
    items.map(item => {
      let {itemKey, linkTo, itemText} = item;
      menuItemResult.push(
        <MenuItem key={itemKey}>
          <Link to={linkTo}>{itemText}</Link>
        </MenuItem>
      );
    });
    return menuItemResult;
  }

  /**
   *构建菜单
   *
   */
  buildMenus(menus){
    let menusArray = [];
    menus.map(menu => {
      if(menu.item !== null && menu.item !== undefined) {
        menusArray.push(
          <SubMenu key={menu.subKey} title={<span><Icon type={menu.subIcon} /><span>{menu.subText}</span></span>}>
             {this.builditem(menu.item)}
          </SubMenu>
        );
      }
      else
      {
        menusArray.push(
          <MenuItem key={menu.itemKey}>
            <Link to={menu.linkTo}>
              <Icon type={menu.itemIcon} />&nbsp;{menu.itemText}
            </Link>
          </MenuItem>
        );
      }
    });
    return menusArray;
  }

  render() {
    let {id,menus, navconfig, handleClick, onToggle} = this.props;
    return (
      <Menu
        id={id}
        theme={navconfig.theme}
        className={navconfig.navStyle}
        onClick={handleClick}
        openKeys={[navconfig.openKeys]}
        defaultOpenKeys={[navconfig.defaultOpenKeys]}
        defaultSelectedKeys={[navconfig.currentSelectKey]}
        onOpen={onToggle}
        onClose={onToggle}
        mode={navconfig.menuMode}
      >
        {this.buildMenus(menus)}
      </Menu>
    );
  }
}

NavMenu.propTypes = {
  id: PropTypes.string,
  menus: PropTypes.array,
  navconfig: PropTypes.object,
  handleClick: PropTypes.func,
  onToggle: PropTypes.func
};

/**
 * 初始化props
 */
NavMenu.defaultProps = {
  menus: [],
  navconfig: {theme:'light',navStyle:'second-nav-item',openKeys:'',defaultOpenKeys:'',defaultSelectedKeys:'',currentSelectKey:'',menuMode:'horizontal'}
};

export default NavMenu;
