import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/comments">Comments</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;