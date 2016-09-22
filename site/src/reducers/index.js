
import { combineReducers } from 'redux';
import initialData from './initdataReducer';
import runTimeData from './runtimeReducer';
import authReducer from './authReducer';

const rootReducers = combineReducers({
  initialData,
  runTimeData,
  authReducer
});

export default rootReducers;

