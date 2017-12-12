import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBooks from './SearchBooks';
import { MemoryRouter } from 'react-router-dom'
import { Debounce } from 'react-throttle'
import book from '../__mocks__/BookItem'

describe('<SearchBooks />', () => {

  let props = {
    libaryBooks: [book],
    addBookHandler: jest.fn()
  }

  const shallowSubject = () => {
    return shallow(<SearchBooks {...props} />)
  }

  const mountSubject = () => {
    return mount(<MemoryRouter><SearchBooks {...props} /></MemoryRouter>)
  }

  it('shallow renders correctly', () => {
    expect(shallowSubject())
  })

  it('mount renders correctly', () => {
    expect(mountSubject())
  })

  it('has a time interval of 400ms', () => {
    expect(shallowSubject().find(Debounce).prop('time')).toBe('400')
  })

  it('is fired when the user types on the search input', () => {
    expect(shallowSubject().find(Debounce).prop('handler')).toBe('onChange')
  })

  describe('Search input', () => {
    const input = () => mountSubject().find('input')
    
    it('is rendered', () => {
      expect(input().exists()).toBe(true)
    })
  })
})