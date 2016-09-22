import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import { Icon } from 'AptAntd';

class LinkButtom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {linkTo, btnValue, iconType} = this.props;
    return (
      <Link to={linkTo} className="ant-btn ant-btn-primary">
        <Icon type={iconType} />
        {btnValue}
      </Link>
    );
  }
}

LinkButtom.propTypes = {
  linkTo:PropTypes.string,
  btnValue:PropTypes.string,
  iconType:PropTypes.string
};

export default LinkButtom;
