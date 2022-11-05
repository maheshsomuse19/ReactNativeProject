import {ADD_TASK} from './Common';
import {DELETE_TASK} from './Common';
export const taskHistory = (oldTaskList = [], action) => {
  //   if (action.type === ADD_TASK) {
  //     return [...oldTaskList, action.payload];
  //   }

  switch (action.type) {
    case ADD_TASK:
      return [...oldTaskList, action.payload];

    case DELETE_TASK: {
      const {id} = action.payload;
      console.log('id', id);

      return oldTaskList.filter(item => item.id !== id);
    }
  }

  return oldTaskList;
};
