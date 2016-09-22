import React, {PropTypes} from 'react';
import './item.scss';

const AbilityItem = props => {
  let {imgPath,title,infos} = props;
  return (
    <div className="">
      <img alt="" src={imgPath} />
      <h3>{title}</h3>
      {
        infos.map(info=>(<p>{info}</p>))
      }
    </div>
  );
};

AbilityItem.propTypes = {
  imgPath: PropTypes.string,
  title: PropTypes.string,
  infos: PropTypes.array
};

export default AbilityItem;
