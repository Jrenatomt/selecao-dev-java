import React from 'react';
import {  NavLink } from 'react-router-dom';
import './styles.scss';


const Navbar = () => {

  return (
    <nav className="row bg-primary main-nav">
        <div className="col-9 main-menu nav-link">
           <NavLink to="/">
           <h4>Soft Person</h4>
           </NavLink>
        </div>
      
    </nav>
)
};

export default Navbar;