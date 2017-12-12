import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
    it('shallow renders correctly', () => {
      expect(shallow(<Header />)).toMatchSnapshot()
    })
})