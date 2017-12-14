import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BookItem = ({ id = "", title = "", author = "", backgroundImage = "", onChangeShelf, clickBook, shelf = "none" }) => {
    return (
        <div className="book">
            <div className="book-top">
                <button onClick={e => { clickBook(e) }} style={{ border: 'none' }}>
                    <Link to={`/book/${id}`}>
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${backgroundImage})` }}></div>
                    </Link>
                </button>
                <div className="book-shelf-changer">
                    <select value={shelf} onChange={e => { onChangeShelf(e) }}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
        </div>
    );
}

BookItem.propTypes = {
    backgroundImage: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.arrayOf(PropTypes.string),
    shelf: PropTypes.string,
    onChangeShelf: PropTypes.func,
    clickBook: PropTypes.func
}

export default BookItem;