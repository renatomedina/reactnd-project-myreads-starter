import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle';
import ShelfBooks from './ShelfBooks'
import * as BooksAPI from '../api/BooksAPI'

class SearchBooks extends Component {

  state = {
    searchBooks: []
  }

  handleChange = (query, libaryBooks) => {

    query = query || ' '

    BooksAPI.search(query, 10).then(searchBooks => {

      searchBooks = searchBooks.error ? [] : searchBooks

      libaryBooks.map(libaryBook => {
        return searchBooks.map(searchBook => {
          if (libaryBook.id === searchBook.id) {
            searchBook.shelf = libaryBook.shelf
          }
          return searchBook
        })
      })

      this.setState({ searchBooks })
    })
  }

  render() {

    const { searchBooks } = this.state
    const { addBookHandler, libaryBooks } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={e => this.handleChange(e.target.value, libaryBooks)}
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
        <ShelfBooks
          books={searchBooks}
          onChangeShelf={addBookHandler}
        />
      </div>
    )
  }
}

export default SearchBooks;