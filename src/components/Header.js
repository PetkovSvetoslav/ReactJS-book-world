import {  NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <h1><NavLink className="home" to="/">Book World</NavLink></h1>
            <nav>
                <NavLink activeClassName="active-navigation-link" to="/books">All books</NavLink>
                <div id="user">
                    <NavLink activeClassName="active-navigation-link" to="/create-book">Create book</NavLink>
                    <NavLink activeClassName="active-navigation-link" to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink activeClassName="active-navigation-link" to="/login">Login</NavLink>
                    <NavLink activeClassName="active-navigation-link" to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;