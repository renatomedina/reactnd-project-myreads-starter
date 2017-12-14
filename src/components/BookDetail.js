import React from 'react';
import Header from './Header'
import { Link } from 'react-router-dom'

export default ({ book }) => {
    const { title = "",
        authors = [],
        description = "",
        imageLinks = {},
    } = book

    return (
        <div>
            <Link
                to="/"
                className="close-search"
            >Close</Link>
            <Header
                title="My Reads"
            />
            <div className="book-detail">
                <div className="book-cover" style={{ width: 140, height: 200, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
            </div>
            <div className="book-title-detail">{title}</div>
            <div className="book-authors.detail">{authors}</div>
            <div className="book-description-detail">{description}</div>
        </div>
    )
}