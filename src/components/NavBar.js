import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-container">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/comments">Comments</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;