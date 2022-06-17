import { asyncActionCreator } from '../../global/redux';
import * as constants from './constants';

export const getSingleCarAction = asyncActionCreator(constants.GET_SINGLE_CAR);