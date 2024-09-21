// import { Link } from 'react-dom';
// import React from 'react-dom'
import './Nav.css';
// import logo from 

export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
};