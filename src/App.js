import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import BookDetail from './components/BookDetail'
import Header from './components/Header'
import * as BooksAPI from './api/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    selectedBook: {}
  }

  updateShelf = (newShelf, book) => {

    book.shelf = newShelf

    let { books } = this.state
    const i = books.indexOf(book)
    books[i] = book
    this.setState({ books })
    BooksAPI.update({ id: book.id }, newShelf).then(response => {
      this.setState(prev => {
        const booksUpdating = prev.books.filter(bookUpdatingId =>
          bookUpdatingId !== book.id
        )
        console.log("atualizou estado para ")
        booksUpdating.map(book => console.log(`book: titulo: ${book.title} shelf: ${book.shelf}`))
        return { book: booksUpdating }
      })
      this.loadBooks()
    })
  }

  addBook = (shelf, newBook) => {
    newBook.shelf = shelf

    let { books } = this.state
    books = books.concat(newBook)
    this.setState({ books })
    BooksAPI.update(newBook, shelf).then(response => {
      this.loadBooks()
    })
  }

  loadBooks = () => {
    console.log('entrou load books')
    BooksAPI.getAll().then((books) => {
      console.log(books)

      this.setState({ books })
    })
  }
  componentDidMount() {
    this.loadBooks()
  }

  selectedBook(selectedBook) {
    this.setState({ ...this.state, selectedBook })
  }

  render() {
    const { books, selectedBook } = this.state

    return (
      <div className="app" >
        <Route exact path="/" render={() => (
          <div className="list-books">
            <Header
              title="My Reads"
            />
            <ListBooks
              books={books}
              clickBook={selectedBook => this.selectedBook(selectedBook)}
              onChangeShelf={(shelf, book) => this.updateShelf(shelf, book)}
            />
          </div>
        )} />
        <Route path="/search" render={() => (
          <SearchBooks
            libaryBooks={books}
            addBookHandler={(shelf, book) => this.addBook(shelf, book)}
          />
        )} />
        <Route path="/book/:id" render={() => (
          <BookDetail
            book={selectedBook}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
