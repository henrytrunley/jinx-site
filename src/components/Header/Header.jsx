import { Fragment, useState } from "react";
import "./Header.css"


function NavBar({ fadeTo }) {
    
    const goToContents = () => {
      fadeTo("contents");
    };
    const goToAbout = () => {
      fadeTo("about");
    };
    const goToContact = () => {
      fadeTo("contact");
    };
    return (
      <nav className="navbar">
        <a onClick={goToContents}>ARCHIVES</a>
        <a onClick={goToAbout}>ABOUT</a>
        <a onClick={goToContact}>CONTACT</a>
      </nav>
    );
}

function Header({ fadeTo }) {
    const [expandNavBar, setExpandNavBar] = useState(false);
    const toggleNavBar = () => {
      setExpandNavBar(!expandNavBar)
    }
    return (
      <Fragment>
        <div className="hamburger" onClick={toggleNavBar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="title">
          <a href="assets/html/index.html">J I N X</a>
        </div>
        {expandNavBar && <NavBar fadeTo={fadeTo}/>}
      </Fragment>
    );
}

export default Header;