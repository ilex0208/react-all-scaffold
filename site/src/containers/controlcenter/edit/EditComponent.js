import React, {PropTypes} from 'react';

const EditComponent = props => {
  let{params} = props;
  console.log('edit-->',props);
  return (
    <div>
      编辑组件{params.id}
    </div>
  );
};

EditComponent.propTypes = {
  params:PropTypes.object
};

export default EditComponent;
