import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({
    book,
}) => {
    return (
        <div className="allBooks">
            <div className="allBooks-info">
                <img src={book.imageUrl} />
                <h6>{book.category}</h6>
                <h2>{book.title}</h2>
                <Link to={`/books/${book._id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}

export default BookCard;