import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container">

      <a className="navbar-brand" href="#">
        Protfolio.
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
      <FontAwesomeIcon icon={faBars} style={{color:'#fff'}}  />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              about me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              how work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Protfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              contact
            </a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
