import React from 'react';
import { shallow } from 'enzyme';
import BookItem from './BookItem';

describe('<BookItem />', () => {
    it('shallow renders correctly', () => {
        expect(shallow(<BookItem />))
    })

    it('expects render 5 options in select', () => {
        const wrapper = shallow(<BookItem />)
        expect(wrapper.find('option').length).toBe(5)
    })

    it('expects onChangeShelf to be colled on shelf', () => {
        const onChangeShelf = jest.fn()
        const wrapper = shallow(<BookItem onChangeShelf={onChangeShelf} />)
        wrapper.find('select').simulate('change')
        expect(onChangeShelf).toHaveBeenCalledTimes(1)
    })
}) 