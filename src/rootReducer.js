import { combineReducers } from "redux";
import { carsReducer } from './pages/HomePage';
import { singleCarReducer } from './pages/CarPage';

export default combineReducers({
  carsReducer,
  singleCarReducer
});