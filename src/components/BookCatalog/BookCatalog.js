
import { useEffect, useState, lazy, Suspense } from 'react';

import * as bookService from '../../services/bookService';

const BookCard = lazy(() => import('./BookCard'));

const BookCatalog = ({
    navigationChangeHandler
}) => {
    // добавяме състояние на функционалният обект книги
    const [books, setBooks] = useState([]);
    
// тук използваме useEffect за всеки път когато се създава книга 
    useEffect(() => {
        setTimeout(() => {
            bookService.getAll()
                .then(result => {
                    setBooks(result);
                })
        }, 1000);
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Books</h1>
           {/* тук зареждаме компонента динамично с  Suspense*/}
            <Suspense fallback={<p>Loading...</p>}>
                                  {/* правиме проверка дали изобщо има книги и ако има ги мапваме */}
                {books.length > 0
                    ? books.map(x => <BookCard key={x._id} book={x} navigationChangeHandler={navigationChangeHandler} />)
                    : <h3 className="no-articles">No books yet</h3>
                }
            </Suspense>
        </section>
    );
}

export default BookCatalog;
