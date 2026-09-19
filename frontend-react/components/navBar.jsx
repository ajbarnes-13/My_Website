import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navBar.css';

function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="nav-bar">
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/portfolio')}>Portfolio</button>
            <button onClick={() => navigate('/resume')}>Resume</button>
        </div>
    );
}

export default NavBar;