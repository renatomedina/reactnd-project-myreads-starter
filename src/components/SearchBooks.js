import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ShelfBooks from './ShelfBooks'
import * as BooksAPI from '../utils/BooksAPI'

class SearchBooks extends Component {

  state = {
    searchBooks: []
  }

  handleChange = (event, libaryBooks) => {
    const query = event.target.value
    BooksAPI.search(query).then(searchBooks => {

      libaryBooks.map(libaryBook => {
        return searchBooks.map(searchBook => {
          if (libaryBook.id === searchBook.id)
            searchBook.shelf = libaryBook.shelf
          return searchBook
        })
      })

      if (searchBooks.items && searchBooks.items.length === 0) {
        searchBooks = []
      }

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
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.handleChange(e, libaryBooks)}
            />
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