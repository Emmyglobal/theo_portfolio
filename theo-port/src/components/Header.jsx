import React from "react";


function Header() {
    return (
        <>
        <header className="header">
        <div className="logo">MyPortfolio</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}
export default Header;
