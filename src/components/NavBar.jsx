import { useState } from "react";
import "./NavBar.css"


function NavBar() {
    return (
      <nav class="navbar">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </nav>
    );
}

function Header() {
    const [expanded, setExpanded] = useState(false);
    const toggleNav = () => {
      setExpanded(!expanded)
    }
    return (
      <header>
        <div className="hamburger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="title">
          <a href="assets/html/index.html">J I N X</a>
        </div>
        {expanded && NavBar()}
      </header>
    );
}

export default Header;