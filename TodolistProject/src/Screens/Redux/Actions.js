import {ADD_TASK} from './Common';
import {DELETE_TASK} from './Common';
export const addList = task => {
  return {
    type: ADD_TASK,
    payload: {
      id: Math.random().toString(),
      task,
    },
  };
};

export const deleteList = id => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
};
