/**
 * 存放菜单
 */
import React, {PropTypes} from 'react';
import NavMenu from './../../components/common/nav';

const MenuArticle = props => {
  return (
    <article className='header-article'>
      <nav className='header-nav'>
        <NavMenu  {...props} />
      </nav>
    </article>
  );
};

MenuArticle.propTypes = {

};

export default MenuArticle;
