import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BookCatalog from './components/BookCatalog/BookCatalog';
import CreateBook from './components/CreateBook';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import BookDetails from './components/BookDetails.js';
import {Footer} from './components/Footer.js';

function App() {
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/books" exact component={BookCatalog} />
                    <Route path="/create-book" component={CreateBook} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/books/:bookId" component={BookDetails} />
                    <Route path="/custom">
                        <h2>Custom Page</h2>
                        <p>dasklfjasldf </p>
                    </Route>
                    <Route path="/logout" render={(props) => {
                        console.log('Logged Out!!!');

                        return <Redirect to="/" />
                    }} />
                </Switch>
            </main>
             <Footer />
        </div>
    );
}

export default App;
