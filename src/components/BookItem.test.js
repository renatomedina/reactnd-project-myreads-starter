import React from 'react';
import { shallow } from 'enzyme';
import BookItem from './BookItem';

describe('<BookItem />', () => {
    let props = {
        backgroundImage: 'https://i.ytimg.com/vi/PKffm2uI4dk/maxresdefault.jpg',
        title: 'React Development',
        author: ['Marcio G.'],
        shelf: 'read',
        onChangeShelf: jest.fn()
    }

    const subject = () => {
        return shallow(<BookItem {...props} />)
    }

    it('shallow renders correctly', () => {
        expect(subject())
    })

    it('expects render 5 options in select', () => {
        expect(subject().find('option').length).toBe(5)
    })

    it('sets the prop backgroundImage as the background image for the book-cover div', () => {
        const div = subject().find('div.book > div.book-top > div.book-cover')
        expect(div.props().style.backgroundImage).toBe(`url(${props.backgroundImage})`)
    })

    it('expects onChangeShelf to be colled on shelf', () => {
        const onChangeShelf = jest.fn()
        const wrapper = shallow(<BookItem onChangeShelf={onChangeShelf} />)
        wrapper.find('select').simulate('change')
        expect(onChangeShelf).toHaveBeenCalledTimes(1)
    })
}) 