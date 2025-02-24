import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage items-center flex flex-col justify-center">
            <h1>Home Page</h1>
            <div>
                <Link to="/signup">My Signup Page</Link>
            </div>
            <div>
                <Link to="/login">My Login Page</Link>
            </div>
        </div>
    );
}

export default HomePage;
