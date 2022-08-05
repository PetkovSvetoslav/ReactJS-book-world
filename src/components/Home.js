import { useState, useEffect} from 'react';

import * as bookService from '../services/bookService';

import LatestBookCard from './LatestBookCard';

const Welcome = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getLatest()
            .then(result => {
                setBooks(result);
            })
    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Your Books are here in</h2>            
                <h3>Book World</h3>
               
            </div>
            <div className="row-down"> <h1> </h1></div>
            <div id="home-page">
                <h1>Your Books</h1>
                {
                    books.length > 0
                        ? books.map(x => 
                            <LatestBookCard 
                                key={x._id} 
                                game={x} 
                            />)
                        : <p className="no-articles">No added books yet</p>
                }
            </div>
        </section>
    );
}

export default Welcome;