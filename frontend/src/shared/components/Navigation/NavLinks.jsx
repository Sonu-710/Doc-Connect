import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
        <li><NavLink to='/doctors'>All doctors</NavLink></li>
        <li><NavLink to='/d1/appointments'>My appointments</NavLink></li>
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signin'>Sign In</NavLink></li>
    </ul>
}

export default NavLinks;