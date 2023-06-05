import { useState } from "react";
import "./Header.css"


function NavBar({ setCurrentPage }) {
    const goToHome = () => {
      setCurrentPage("home")
    }
    const goToAbout = () => {
      setCurrentPage("about")
    }
    const goToContact = () => {
      setCurrentPage("contact")
    }
    return (
      <nav className="navbar">
        <a onClick={goToHome}>HOME</a>
        <a onClick={goToAbout}>ABOUT</a>
        <a onClick={goToContact}>CONTACT</a>
      </nav>
    );
}

function Header({ setCurrentPage }) {
    const [expandNavBar, setExpandNavBar] = useState(false);
    const toggleNavBar = () => {
      setExpandNavBar(!expandNavBar)
    }
    return (
      <header>
        <div className="hamburger" onClick={toggleNavBar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="title">
          <a href="assets/html/index.html">J I N X</a>
        </div>
        {expandNavBar && <NavBar setCurrentPage={setCurrentPage}/>}
      </header>
    );
}

export default Header;