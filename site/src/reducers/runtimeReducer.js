import { fromJS } from 'immutable';
import {CONTROL_COMS} from './../action/constants';

const runTimeData = (state = {}, action) => {
  switch (action.type) {
    case CONTROL_COMS:
      return fromJS(state).setIn(action.data).toJS();
    default:
      return state;
  }
};

export default runTimeData;
