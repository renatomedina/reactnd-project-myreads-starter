import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { uniq } from 'underscore'
import sortBy from 'sort-by'

import ShelfBooks from './ShelfBooks'

class ListBooks extends Component {

  getTitleShelf(shelfId) {
    switch (shelfId) {
      case "currentlyReading":
        return "Currently Reading"
      case "wantToRead":
        return "Want to Read"
      case "read":
        return "Read"
      default:
        return "None"
    }
  }

  getBooksByShelf(books) {
    const shelfs = uniq(books.map(book => book.shelf))

    return shelfs.map(shelf => {
      return {
        "shelfTitle": this.getTitleShelf(shelf),
        "books": books.filter(book => book.shelf === shelf)
      }
    }).sort(sortBy('shelfTitle'))
  }

  render() {
    const { books = [], onChangeShelf } = this.props
    const booksByShelf = this.getBooksByShelf(books)
    
    return (
      <div>
        <div className="list-books-content">
          <div>
            {booksByShelf.map(shelf => (
              <div key={shelf.shelfTitle}>
                <ShelfBooks
                  title={shelf.shelfTitle}
                  books={shelf.books}
                  onChangeShelf={onChangeShelf}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks