import React, {PropTypes} from 'react';

/**
 * img标签统一处理
 * doc:
 * <Img src='./images/temp.png' alt='temp' />
 */
const Img = props => {
  const {src, alt,className = '', ...other} = props;
  let imgUrl = src ? require(src) : '';
  let altInfo = alt ? alt : src;
  return (
    <img src={imgUrl} alt={altInfo} {...other} className={className} />
  );
};

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
};

export default Img;
