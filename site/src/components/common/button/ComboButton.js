import React, {PropTypes} from 'react';
import { Button } from 'AptAntd';
const ButtonGroup = Button.Group;

const defaultConfig = {
  _type:'middle'
};

/**
 * 组合按钮
 * exp:  电压|电流
 */
const ComboButton = props => {
  let {buttons,type} = props;
  if(type === undefined){
    type = defaultConfig._type;
  }
  return (
    <ButtonGroup>
      {buttons.map(btn=>(<Button key={btn.key} type={type}>{btn.value}</Button>))}
    </ButtonGroup>
  );
};

ComboButton.propTypes = {
  buttons:PropTypes.array.isRequire,
  type: PropTypes.string
};

ComboButton.defaultProps = {
  buttons: []
};

export default ComboButton;
