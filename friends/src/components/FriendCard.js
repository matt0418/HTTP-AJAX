import React from 'react'
import { NavLink } from 'react-router-dom'
import './FriendCard.css';

const FriendCard = (props) => {
    return(
        <div className = "card">
            <NavLink to={`/friends/${props.friend.id}`}>
                <p>Name: {props.friend.name}</p>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
            </NavLink>
        </div>
    )
}

export default FriendCard