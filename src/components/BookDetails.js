import { useState, useEffect } from 'react';
import * as bookService from '../services/bookService';

const BookDetails = ({
    match,
}) => {
    const [book, setBook] = useState({});

    useEffect(async () => {
        let result = await bookService.getOne(match.params.bookId);
        setBook(result);
    }, []);

    return (
        <section id="book-details">
            <h1>Book Details</h1>
            <div className="info-section">

                <div className="book-header">
                    <img className="book-img" src={book.imageUrl} />
                    <h1>{book.title}</h1>
                    <span className="levels">Author: {book.author}</span>
                    <p className="type">{book.category}</p>
                </div>

                <p className="text">
                    {book.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best book.</p>
                        </li>
                    </ul>
                    <p className="no-comment">No comments.</p>
                </div>

                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}

export default BookDetails;