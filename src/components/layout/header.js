import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Goals for this year</h1>
            <Link to="/" style={linkstyle}>Home</Link> |
            <Link to="/about" style={linkstyle}>About</Link>
        </header>
    );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkstyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;