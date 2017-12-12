import React from 'react';
import { shallow, mount } from 'enzyme';
import ListBooks from './ListBooks';
import { MemoryRouter } from 'react-router-dom';
import book from '../__mocks__/BookItem'

describe('<ListBooks />', () => {

  let props = {
    books: [book],
    onChangeShelf: jest.fn()
  }

  const shallowSubject = () => {
    return shallow(<ListBooks {...props} />)
  }

  const mountSubject = () => {
    return mount(<MemoryRouter><ListBooks {...props} /></MemoryRouter>)
  }

  it('shallow renders correctly', () => {
    expect(shallowSubject()).toMatchSnapshot()
  })

  it('mount renders correctly', () => {
    expect(mountSubject())
  })


  it('test getTitleShelf function return correctly title ', () => {
    expect(shallowSubject().instance().getTitleShelf('currentlyReading')).toEqual('Currently Reading')
    expect(shallowSubject().instance().getTitleShelf('wantToRead')).toEqual('Want to Read')
    expect(shallowSubject().instance().getTitleShelf('read')).toEqual('Read')
    expect(shallowSubject().instance().getTitleShelf('teste')).toEqual('None')
  })

  it('test getBooksByShelf function return correctly object', () => {
    const obj = shallowSubject().instance().getBooksByShelf([book])[0]
    expect(obj.shelfTitle).toEqual('Currently Reading')
    expect(obj.books.length).toBe(1)
  })
})