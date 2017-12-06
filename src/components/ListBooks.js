import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'
import { uniq } from 'underscore'
import sortBy from 'sort-by'

class ListBooks extends Component  {

  getTitleShelf(shelfId) {
    switch (shelfId) {
      case "currentlyReading":
        return "Currently Reading"
      case "wantToRead":
        return "Want to Read"
      case "read":
        return "Read"
      default:
        return shelfId
    }
  }

  getBooksByShelf(books) {
    const shelfs = uniq(books.map( book => book.shelf ))
    
    return shelfs.map(shelf => {
      return  {
        "shelfTitle" : this.getTitleShelf(shelf), 
        "books": books.filter(book => book.shelf === shelf)
      }}).sort(sortBy('shelfTitle'))
  } 

    render () {
      const { books, onChangeShelf } = this.props
      const booksByShelf = this.getBooksByShelf(books)
      return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>  
            {booksByShelf.map(shelf => (
              <div key={shelf.shelfTitle} className="bookshelf">
                <h2 className="bookshelf-title">{shelf.shelfTitle}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {shelf.books.map(book => (
                      <li key={book.id}>
                        <BookItem 
                          title={book.title}
                          author={book.authors[0]} 
                          backgroundImage={book.imageLinks.smallThumbnail}
                          shelf={book.shelf}
                          onChangeShelf={ e => onChangeShelf(e, book)}
                        />
                    </li>
                    ))}
                  </ol>
                </div>
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