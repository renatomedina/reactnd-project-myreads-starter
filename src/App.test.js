import React from 'react';
import { shallow } from 'enzyme';
// import App from './App';

describe('<App />', () => {
    global.localStorage = { getItem: jest.fn(), setItem: jest.fn() }
    afterEach(() => wrapper.setState({ items: []}))
    xit('shallow renders without crashing', () => {
      expect(shallow(<App />))
    })
})