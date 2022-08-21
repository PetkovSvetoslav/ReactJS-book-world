import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    return (
        <li className="otherBooks">
            <h3>Name: {book.name}</h3>
            <p>Type: {book.type}</p>
            <p className="img">
                <img src={book.imageUrl} alt=""/>
            </p>
            <Link className="button" to={`/details/${book._id}`}>
                Details
            </Link>
        </li>
    );
};

export default BookCard;
