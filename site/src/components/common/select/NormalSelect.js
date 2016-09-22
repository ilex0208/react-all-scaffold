import React, {PropTypes} from 'react';
import { Select } from 'AptAntd';
import './style/select.scss';
const Option = Select.Option;

const defaultConfig = {
  _size:'default',
  _style: {width:'200px'},
  notFoundContent: '未找到匹配项'
};
/**
 * 普通的下拉框选择
 */
const NormalSelect = props => {
  let {showSearch,size,handleChange,style,placeholder,defaultValue,disabled,options,...other} = props;
  if(size === undefined){
    size = defaultConfig._size;
  }
  if(style === undefined){
    style = defaultConfig._style;
  }
  return (
    <Select
      size={size}
      onChange={handleChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={disabled || false}
      showSearch={showSearch || false}
      notFoundContent={defaultConfig.notFoundContent}
      style={style}
      {...other}
    >
      {options.map(op => (<Option value={op.value}>{op.dispalyName}</Option>))}
    </Select>
   );
};

NormalSelect.propTypes = {
  showSearch: PropTypes.boolean,
  size:PropTypes.string,
  handleChange:PropTypes.func,
  style:PropTypes.object,
  placeholder:PropTypes.string,
  defaultValue:PropTypes.string,
  disabled:PropTypes.boolean,
  options: PropTypes.array.isRequire
};

NormalSelect.defaultProps = {
  notFoundContent: '未找到匹配项',
  showSearch: false,
  size:'default',
  style: {width:'200px'},
  placeholder: '',
  defaultValue: '',
  disabled: false,
  options: []
};

export default NormalSelect;
