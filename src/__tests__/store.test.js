import store from '../store';

describe('Store', () => {
  it('should be defined', () => {
    let storeResult = store();

    expect(storeResult).toBeDefined();
  });
});
