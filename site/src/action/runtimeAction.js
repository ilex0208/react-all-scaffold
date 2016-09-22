
import {CONTROL_COMS} from './constatns';

export const load = (data) => {
  return {
    type: CONTROL_COMS,
    data: data
  };
};
