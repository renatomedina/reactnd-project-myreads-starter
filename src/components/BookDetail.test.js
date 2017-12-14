import React from 'react';
import { shallow } from 'enzyme';
import BookDetail from './BookDetail';
import { MemoryRouter } from 'react-router-dom';
import book from '../__mocks__/BookItem'

describe('<BookDetail />', () => {

    const subjectShallow = () => {
        return shallow(<BookDetail />)
    }

    const subjectMount = () => {
        return mount(<MemoryRouter><SearchBooks book={book} /></MemoryRouter>)
    }

    it('shallow renders correctly', () => {
        expect(subject()).toMatchSnapshot()
    })

    it('mount renders correctly', () => {
        expect(mountSubject())
    })
})