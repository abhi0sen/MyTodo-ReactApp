import React from 'react'
import PropTypes from 'prop-types' 


let Navbar = (props) => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
          <a className="navbar-brand" href="/">
            <span>{props.title}</span>
          </a>
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
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us/">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-us/">Contact us</a>
            </li>
          </ul>

          {props.searchBar? <form action="#">
            <input type="text" className="me-2 p-1"/>
            <button type="button" className="btn btn-outline-dark"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>: ""}
          </div>
        </nav>
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