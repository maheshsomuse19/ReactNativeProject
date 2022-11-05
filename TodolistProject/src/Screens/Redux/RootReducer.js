import {combineReducers} from 'redux';
import {taskHistory} from './Reducers';
const rootReducer = combineReducers({
  taskList: taskHistory,
});
export default rootReducer;
