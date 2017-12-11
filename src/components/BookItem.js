import React from 'react';
import PropTypes from 'prop-types'

const BookItem =  ({ title = "", author = "", backgroundImage, onChangeShelf, shelf = "none" }) => {

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${backgroundImage})` }}></div>
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
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.arrayOf(PropTypes.string).isRequired,
    shelf: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }

  export default BookItem;