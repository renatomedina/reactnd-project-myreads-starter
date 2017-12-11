import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBooks from './SearchBooks';


describe('<SearchBooks />', () => {
    it('shallow renders correctly', () => {
      expect(shallow(<SearchBooks />))
    })

    xit('mount renders correctly', () => {
      expect(mount(<SearchBooks />))
    })
})