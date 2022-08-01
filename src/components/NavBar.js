import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Comments">Comments</NavLink>
                <NavLink to="/About">About</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;