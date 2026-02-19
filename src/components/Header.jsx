import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div className="container">
            <NavLink className="navbar-brand fw-bold text-uppercase">
            John Doe 
            </NavLink>

           {/*Bouton burger*/}
           <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/*Les liens de nav*/}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto text-uppercase">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to= "/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/realisations">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/mentions-legales">Mentions Légales</NavLink>
                    </li>
                </ul>
            </div>
            </div>
            </nav>
        </header>
    )
}

export default Header;