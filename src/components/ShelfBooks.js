import React from 'react';
import BookItem from './BookItem'
import If from './If'

export default ({ title = "", books = [], onChangeShelf }) => {
    return (
        <div className="bookshelf">
        <If test={title !== 'None'}>
            <div>
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                        <li key={book.id}>
                            <BookItem 
                                title={book.title}
                                author={book.authors} 
                                backgroundImage={book.imageLinks.smallThumbnail}
                                shelf={book.shelf}
                                onChangeShelf={ e => onChangeShelf(e.target.value, book)}
                            />
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        </If>
        </div>
    )
}