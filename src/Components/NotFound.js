import {Link} from 'react-router-dom';
import React from 'react';


const NotFound =() => (
        <header className="bg-dark text-white p-5 hero-container">
            <h1 className="hero-text">404: The page that you looking for does not exist!</h1>
            <Link to="/">

            Go back to homepage

            </Link>
        </header>
    )



export default NotFound;