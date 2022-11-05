// import logger from 'redux-logger'
import {createStore} from 'redux';
// import { applyMiddleware } from 'redux';
// import { reducer } from './Components/Fooditem/Redux/Reducer'
import rootReducer from './src/Screens/Redux/RootReducer';
// const middlewares = [logger];
export const store = createStore(rootReducer);
