import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage,faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <p className="payment-head-left">Payments <span> &#8857; How it works</span> </p>
      <div className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-main'/>
        <input type="text" placeholder="Search features, tutorials, etc."/>
      </div>
      <div className="btns-nav">
        <button className="btn-1-nav"><FontAwesomeIcon icon={faMessage} className="icon"/></button>
        <button className="btn-2-nav"><FontAwesomeIcon icon={faCaretDown}  className="icon"/></button>
      </div>
    </div>
  );
};

export default Navbar;
