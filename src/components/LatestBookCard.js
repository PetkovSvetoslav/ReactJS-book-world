import { Link } from 'react-router-dom';

const LatestBookCard = ({
    book,
}) => {
    return (
        <div className="book">
            <div className="image-wrap">
                <img src={book.imageUrl} />
            </div>
            <h3>{book.title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                
                <Link
                    to={`/books/${book._id}`}
                    className="btn details-btn"
                >
                    Details
                </Link>
                         {/* Осигурява декларативна, достъпна навигация на бутона в приложението. */}
            </div>
        </div>
    );
}

export default LatestBookCard;
