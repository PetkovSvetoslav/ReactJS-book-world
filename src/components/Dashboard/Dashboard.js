import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BookCard from './BookCard/BookCard';
import { getAll } from '../../services/booksService';

const Dashboard = () => {
    const [books, setBooks] = useState([]);

    async function fetchPets() {
        const data = await getAll();
        setBooks(data);
    }

    useEffect(() => {
        fetchPets();
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Book World</h1>
            <nav>
                <Routes>
                    <Route path="/all" />
                </Routes>
            </nav>
            <ul className="other-pets-list">
                {books.map((e) => (
                    <BookCard key={e._id} pet={e} />
                ))}
            </ul>
     
        </section>
    );
};

export default Dashboard;
