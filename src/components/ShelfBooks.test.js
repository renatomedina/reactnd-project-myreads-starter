import React from 'react';
import { shallow, mount } from 'enzyme';
import ShelfBooks from './ShelfBooks';
import { MemoryRouter } from 'react-router-dom'
import book from '../__mocks__/BookItem';

describe('<ShelfBooks />', () => {

    let props = {
        title: 'Test',
        books: [book],
        onChangeShelf: jest.fn()
    }

    const shallowSubject = () => {
        return shallow(<ShelfBooks {...props} />)
    }

    const mountSubject = () => {
        return mount(<MemoryRouter><ShelfBooks {...props} /></MemoryRouter>)
    }

    it('shallow renders correctly', () => {
        expect(shallowSubject()).toMatchSnapshot()
    })

    it('mount renders correctly', () => {
        expect(mountSubject())
    })


    it('render title if text is different to None', () => {
        expect(mountSubject().find('h2').length).toBe(1)
    })

    it('not render title if text is None', () => {
        const wrapper = mount(<ShelfBooks title="None" />)
        expect(wrapper.find('h2').length).toBe(0)
    })

    it('expects to map through an array of books and creates a li tag for each one of then', () => {
        expect(mountSubject().find('li').length).toBe(1)
    })

    it('expects onChangeShelf to be colled on shelf', () => {
        mountSubject().find('select').simulate('change')
        expect(props.onChangeShelf).toHaveBeenCalledTimes(1)
    })
}) 