import React from 'react';
import { shallow, mount } from 'enzyme';
import ListBooks from './ListBooks';

describe('<ListBooks />', () => {
    it('shallow renders correctly', () => {
      expect(shallow(<ListBooks />))
    })

    xit('mount renders correctly', () => {
        const mockOnChangeShelf = jest.fn()
        expect(mount(<ListBooks books={[]} onChangeShelf={mockOnChangeShelf} />))
      })
    
    
    xit('test getTitleShelf function return correctly title ', () => {
        const wrapper = <ListBooks books={[]}/>
        expect(wrapper.getTitleShelf('currentlyReading')).toEqual("Currently Reading")
        // expect(shallow())
      })
})