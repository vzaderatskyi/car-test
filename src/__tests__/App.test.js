import React from 'react';
import { shallow } from 'enzyme';
import { useSelector as useSelectorMock } from 'react-redux';
import App from '../App';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockImplementationOnce((selector) => selector()),
  useDispatch: () => jest.fn().mockImplementation(),
}));

describe('App', () => {
  beforeEach(() => {});

  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render', () => {
    useSelectorMock.mockImplementationOnce(false);

    const wrapper = shallow(<App />);

    expect(wrapper).toBeDefined();
  });
});
