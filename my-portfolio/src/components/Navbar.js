import React from 'react';
import './Navbar.css';

const Navbar = ({ activeSection }) => {
     const navLinks = ['about', 'experience', 'projects', 'skills', 'certifications', 'contact'];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {navLinks.map(link => (
                    <a
                        key={link}
                        href={`#${link}`}
                        className={`nav-link ${activeSection === link ? 'active' : ''}`}
                    >
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;