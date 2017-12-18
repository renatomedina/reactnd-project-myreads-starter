import React from 'react';
import { shallow, mount } from 'enzyme';
import BookDetail from './BookDetail';
import { MemoryRouter } from 'react-router-dom';
import book from '../__mocks__/BookItem'

describe('<BookDetail />', () => {
    const subjectShallow = () => {
        const b = book
        b.book = book
        return shallow(<BookDetail book={book} />)
    }

    const subjectMount = () => {
        return mount(<MemoryRouter><BookDetail book={book} /></MemoryRouter>)
    }

    it('shallow renders correctly', () => {
        expect(subjectShallow()).toMatchSnapshot()
    })

    it('mount renders correctly', () => {
        expect(subjectMount())
    })

})