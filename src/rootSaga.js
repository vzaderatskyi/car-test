import { all } from 'redux-saga/effects';
import { homePageWatcherSaga } from './pages/HomePage/saga';
import { carPageWatcherSaga } from './pages/CarPage/saga';

export default function* rootSaga() {
  yield all([
    homePageWatcherSaga(),
    carPageWatcherSaga(),
  ]);
};