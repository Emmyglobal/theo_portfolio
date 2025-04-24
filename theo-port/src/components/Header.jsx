import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Header.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">MyPortfolio</div>
      <div className="hamburger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;