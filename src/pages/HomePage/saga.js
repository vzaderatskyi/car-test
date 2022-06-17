import { takeLatest, all, put, call } from 'redux-saga/effects';
import * as actions from './actions';
import Firebase from '../../global/services/firebase';

export function* getCarsSaga() {
  try {
    const response = yield call(Firebase.getCarsCollection);

    yield put(actions.getAllCarsAction.success(response));
  } catch (error) {
    yield put(actions.getAllCarsAction.error(error));
  }
}

export function* homePageWatcherSaga() {
  yield all([
    takeLatest(actions.getAllCarsAction.REQUEST, getCarsSaga),
  ]);
}
