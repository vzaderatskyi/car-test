import rootSaga from '../rootSaga';
import { all } from 'redux-saga/effects';
import { homePageWatcherSaga } from '../pages/HomePage/saga';
import { carPageWatcherSaga } from '../pages/CarPage/saga';

describe('Root Saga', () => {
  let generator = null;

  beforeAll(() => {
    generator = rootSaga();
  });

  it('should call generator function', () => {
    const expected = all([homePageWatcherSaga(), carPageWatcherSaga()]);
    const actual = generator.next();

    expect(actual.value).toEqual(expected);
  });
});
