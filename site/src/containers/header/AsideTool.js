/**
 * 公共顶部侧栏,用于展示用户、产品服务
 */
import React, {PropTypes} from 'react';
import {Row, Col} from 'AptAntd';
import User from './User';
import NavMenu from './../../components/common/nav';

const asideCol = {
  leftCol: {lg: 4, md: 6, sm: 7, xs: 12},
  middleCol: {lg: 8, md: 10, sm: 7, xs: 0},
  rightCol: {lg: 12, md: 8, sm: 10, xs: 12}
};

const AsideTool = props => {
  const {isLogin, handleClick, asidenavs} = props;
  return (
    <aside className='header-aside'>
      <Row>
        <Col {...asideCol.leftCol}>
          <User isLogin={isLogin} {...props} />
        </Col>
        <Col {...asideCol.middleCol} >
          <div></div>
        </Col>
        <Col {...asideCol.rightCol}>
          {isLogin?<NavMenu handleClick={handleClick} {...asidenavs} />:<NavMenu handleClick={handleClick} {...asidenavs} />}
        </Col>
      </Row>

    </aside>
  );
};

AsideTool.propTypes = {
  isLogin: PropTypes.bool,
  handleClick: PropTypes.func,
  asidenavs: PropTypes.object
};
AsideTool.defaultProps = {
  isLogin: false,
  asidenavs: {}
};

export default AsideTool;
