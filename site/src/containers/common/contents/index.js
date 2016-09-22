import React, {PropTypes} from 'react';
import './content.scss';

/**
 * 业务系统模块内容填充组件
 */
const BizContents = props => {
  let {leftNav, children} = props;
  return (
    <div className="second-wrapper">
      <div className="second-container">
        <aside className="left-nav">
          {leftNav()}
        </aside>
        <div className="right-content">
          {children}
        </div>
      </div>
    </div>
  );
};

BizContents.propTypes = {
  leftNav: PropTypes.func,
  children: PropTypes.any
};

export default BizContents;
