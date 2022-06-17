import { createAction } from '@reduxjs/toolkit';
import { get } from 'lodash';

export const asyncActionCreator = (actionName) => {
  const actions = ['REQUEST', 'SUCCESS', 'ERROR'];

  return actions.reduce((object, action) => {
    const actionType = `${actionName}_${action}`;
    return {
      ...object,
      [action.toLowerCase()]: createAction(actionType),
      [action]: actionType,
    };
  }, {});
};
export const asyncReducerHandler = (actionHandler, nestedState) => ({
  [actionHandler.REQUEST]: (state) => {
    const propperState = nestedState ? get(state, nestedState) : state;

    propperState.loading = true;
  },
  [actionHandler.SUCCESS]: (state, action) => {
    const propperState = nestedState ? get(state, nestedState) : state;

    propperState.loading = false;
    propperState.data = action.payload;
    propperState.error = null;
  },
  [actionHandler.ERROR]: (state, action) => {
    const propperState = nestedState ? get(state, nestedState) : state;

    propperState.loading = false;
    propperState.error = action.payload;
    propperState.data = null;
  },
});

export const asyncInitialState = {
  loading: false,
  error: null,
  data: null,
};
