import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import Header from './components/Header'
import * as BooksAPI from './api/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  updateShelf = (newShelf, book) => {
    book.shelf = newShelf

    let { books } = this.state
    const i = books.indexOf(book)
    books[i] = book
    this.setState({ books })
    BooksAPI.update(book, newShelf).then(response => {
      console.log(response)
    })
  }

  addBook = (shelf, newBook) => {
    newBook.shelf = shelf

    let { books } = this.state
    books = books.concat(newBook)
    this.setState({ books })
    BooksAPI.update(newBook, shelf).then(response => {
      console.log(response)
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <Header
              title="My Reads"
            />
            <ListBooks
              books={this.state.books}
              onChangeShelf={(shelf, book) => this.updateShelf(shelf, book)}
            />
          </div>
        )} />
        <Route path="/search" render={() => (
          <SearchBooks
            libaryBooks={this.state.books}
            addBookHandler={(shelf, book) => this.addBook(shelf, book)}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
