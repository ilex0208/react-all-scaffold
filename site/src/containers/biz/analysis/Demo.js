import React, {PropTypes} from 'react';

const AnalysisDemo = props => {
  let path = props.route.path;
  return (
    <div>
      这是测试界面:{path}
    </div>
  );
};

AnalysisDemo.propTypes = {
  route: PropTypes.func,
  path: PropTypes.string
};

export default AnalysisDemo;
