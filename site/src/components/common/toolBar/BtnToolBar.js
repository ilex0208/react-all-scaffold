import React, {PropTypes} from 'react';

const _renderBtn = btn => (
  <span id={btn.id} className="activespan">
    <label> {btn.value} </label>
  </span>
);

const renderBtnViews = btns => btns.map(btn => _renderBtn(btn));

const BtnToolBar = props => {
  let {title, imgPath, btns} = props;
  const btnGroups = btns ? renderBtnViews(btns) : '';
  return (
    <div>
      <span className="title double">
        <img src={imgPath} alt={title} />
        {title}
      </span>
      {btns ? <div className="actions lyRight">{btnGroups}</div> : null}
    </div>
  );
};

BtnToolBar.propTypes = {
  title: PropTypes.string,
  imgPath: PropTypes.string,
  btns: PropTypes.array
};

export default BtnToolBar;
