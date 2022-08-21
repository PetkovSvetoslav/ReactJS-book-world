import { useParams } from 'react-router-dom';
import { getById } from '../../services/booksService';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { deletePet } from '../../services/booksService';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [book, setBook] = useState({});
    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${id}`}>Edit</Link>
            <button className="button" onClick={deleteHandler}>Delete</button>
        </>
    );
    const userButtons = <Link className="button" to={`/delete/${book._id}`}>Like</Link>;


    function deleteHandler() {
        deletePet(id, user.accessToken);
        navigate(`/`);
    }

    useEffect(() => {
        fetchPetData();
    });

    async function fetchPetData() {
        const data = await getById(id);
        setBook(data);
    }

    return (
        <section id="details-page" className="details">
            <div className="book-information">
                <h3>Name: {book.name}</h3>
                <p className="type">Type: {book.type}</p>
                <p className="img">
                    <img src={book.imageUrl} alt=""/>
                </p>
                <div className="actions">
                    { user._id && (user._id === book._ownerId ? ownerButtons : userButtons)}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" alt=""/>
                        <span id="total-likes">Likes: { book.likes?.length }</span>
                    </div>
                </div>
            </div>
            <div className="book-description">
                <h3>Description:</h3>
                <p>{book.description}</p>
            </div>
        </section>
    );
};

export default Details;
