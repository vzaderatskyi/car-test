import { createReducer } from '@reduxjs/toolkit';
import { asyncInitialState, asyncReducerHandler } from '../../global/redux';
import * as actions from './actions';

const initialState = {
  singleCar: asyncInitialState,
};

const reducer = createReducer(initialState, {
  ...asyncReducerHandler(actions.getSingleCarAction, 'singleCar'),
});

const carData = (state) => state.singleCarReducer.singleCar.data;
const carLoading = (state) => state.singleCarReducer.singleCar.loading;
const carError = (state) => state.singleCarReducer.singleCar.error;

const selectors = {
  carData,
  carLoading,
  carError
};

export { selectors, reducer, initialState };
export default reducer;