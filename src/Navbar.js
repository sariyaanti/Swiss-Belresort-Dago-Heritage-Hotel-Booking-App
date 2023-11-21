import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/Product">PRODUCT</Link>
                </li>
                <li>
                    <Link to="/Pricelist">PRICE LIST</Link>
                </li>
                <li>
                    <Link to="/About">ABOUT US</Link>
                </li>
                <li>
                    <Link to="/BookRoom">ROOM BOOKING</Link>
                </li>
                <li>
                    <Link to="/Blog">BLOG</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
