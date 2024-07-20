import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);

    return <ul className="nav-links">
        <li><NavLink to='/doctors'>All doctors</NavLink></li>
        {auth.isLoggedIn &&
            (<li><NavLink to='/d1/appointments'>My appointments</NavLink></li>)
        }
        {
            !auth.isLoggedIn &&
            (<li><NavLink to='/signup'>Sign Up</NavLink></li>)
        }
        {!auth.isLoggedIn &&
            (<li><NavLink to='/signin'>Sign In</NavLink></li>)
        }
        {
            auth.isLoggedIn && <li>
                <button className="btn-lg" onClick={auth.logout}>Logout</button>
            </li>
        }
    </ul>
}

export default NavLinks;