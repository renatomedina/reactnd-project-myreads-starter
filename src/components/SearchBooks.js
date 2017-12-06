import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import * as BooksAPI from '../utils/BooksAPI'

class SearchBooks extends Component {

  state = {
    searchBooks : []
  }
  
  handleChange = event => { 
    const query = event.target.value

    BooksAPI.search(query, "100").then(searchBooks => {
      console.log(searchBooks)
      this.setState({ searchBooks })
    })
  }

  render() {
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
            onChange={this.handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
      <ListBooks 
            books={this.state.searchBooks}
            // onChangeShelf={ (event, book) => this.updateShelf(event.target.value, book)}
          />
    </div>
    )
  }
}

export default SearchBooks;