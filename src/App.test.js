import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
    // global.localStorage.token = '123'
    // const wrapper = mount(<App />)
    // afterEach(() => wrapper.setState({ items: []}))

    xit('shallow renders correctly', () => {
      expect(shallow(<App />))
  })
})