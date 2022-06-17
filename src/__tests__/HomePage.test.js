import React from 'react';
import { shallow } from 'enzyme';
import { useSelector as useSelectorMock } from 'react-redux';
import HomePage from '../pages/HomePage';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockImplementationOnce((selector) => selector()),
  useDispatch: () => jest.fn().mockImplementation(),
}));

describe('App', () => {
  beforeEach(() => {});

  it('should be defined', () => {
    expect(HomePage).toBeDefined();
  });

  it('should render', () => {
    useSelectorMock.mockImplementationOnce(false);

    const wrapper = shallow(<HomePage />);

    expect(wrapper).toBeDefined();
  });
});
