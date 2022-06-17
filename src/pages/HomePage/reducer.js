import { createReducer } from '@reduxjs/toolkit';
import { asyncInitialState, asyncReducerHandler } from '../../global/redux';
import * as actions from './actions';

const initialState = {
  cars: asyncInitialState,
};

const reducer = createReducer(initialState, {
  ...asyncReducerHandler(actions.getAllCarsAction, 'cars'),
});

const carsData = (state) => state.carsReducer.cars.data;
const carsLoading = (state) => state.carsReducer.cars.loading;

const selectors = {
  carsData,
  carsLoading,
};

export { selectors, reducer, initialState };
export default reducer;