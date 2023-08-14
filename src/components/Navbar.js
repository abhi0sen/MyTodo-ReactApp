import React from 'react'
import PropTypes from 'prop-types' 
import {Outlet, Link} from 'react-router-dom'

let Navbar = (props) => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
          <Link className="navbar-brand" to="/">
            <span>{props.title}</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-me/">About Us</Link>
            </li>
          </ul>

          {props.searchBar? <form action="/">
            <input type="text" className="me-2 p-1"/>
            <button type="button" className="btn btn-outline-dark"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>: ""}
          </div>
        </nav>
        <Outlet />
      </div>
    );
  };
  
  export default Navbar;
  
// Default Prop Values
Navbar.defaultProps = {
    title: "Title", 
    // searchBar : true 
}


//   Prop Types
  Navbar.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
  }