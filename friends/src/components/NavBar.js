import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';

function NavBar() {
    return(
        <div className="home">
            <NavLink to="/">
                <div>Go Home</div>
            </NavLink>
        </div>
    )
}

export default NavBar