import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <Link to="/" className="navbar-brand">Welcome</Link>
                <Link to="/login" className="nav-item nav-link">Login</Link>
                <Link to="/list" className="nav-item nav-link">List</Link>
                <Link to="/todo" className="nav-item nav-link">Todo</Link>
            </nav>
        );
    }
}

export default Header;
