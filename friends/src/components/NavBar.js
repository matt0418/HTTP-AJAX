import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';

function NavBar(props) {
    return(
        <div>
            <NavLink to ="/"><h1>Friends</h1></NavLink>
            <div  className="home">
                <NavLink to="/">
                    <div>Home</div>
                </NavLink>
                <NavLink to="/friend-form">
                    <div className="add">{props.isUpdating ? "Update Friend" : "Add Friend"}</div>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar