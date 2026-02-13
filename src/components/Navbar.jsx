import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import luffy from "../images/profile.jpeg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <nav className="navbar">
                <NavLink to="/" className="logo-container">
                    <img src={luffy} alt="Ashish Kumar" className="logo-img" />
                    <span className="logo-text">Ashish Kumar</span>
                </NavLink>

                {/* Hamburger */}
                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Nav Links */}
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/blog" className="nav-link" onClick={() => setMenuOpen(false)}>Blog</NavLink>
                    <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={`overlayNavbar ${menuOpen ? "show" : ""}`}
                onClick={() => setMenuOpen(false)}
            />

        </>
    );
};

export default Navbar;
