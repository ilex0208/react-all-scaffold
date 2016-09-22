import React, {PropTypes} from 'react';

/**
 * 函数式组件
 */
const MyComs = (props) => {
  let {title,innerCalssName, contents} = props;
  title = title || '标题';
  return (
    <div>
      <h1 className={innerCalssName}>{title}</h1>
      <p>{contents}</p>
    </div>
  );
};

// props 验证
MyComs.propTypes = {
  title:PropTypes.string,
  innerCalssName: PropTypes.string,
  contents:PropTypes.string
};

export default MyComs;
