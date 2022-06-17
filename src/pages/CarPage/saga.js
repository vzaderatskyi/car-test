import { takeLatest, all, put, call } from 'redux-saga/effects';
import * as actions from './actions';
import Firebase from '../../global/services/firebase';

export function* getCarSaga({ payload }) {
  try {
    const response = yield call(Firebase.getCarDocument, payload);
    console.log(response)
    if(response){
      yield put(actions.getSingleCarAction.success(response));
    }else{
      yield put(actions.getSingleCarAction.error('Car not found!'));
    }
  } catch (error) {
    yield put(actions.getSingleCarAction.error(error));
  }
}

export function* carPageWatcherSaga() {
  yield all([
    takeLatest(actions.getSingleCarAction.REQUEST, getCarSaga),
  ]);
}
