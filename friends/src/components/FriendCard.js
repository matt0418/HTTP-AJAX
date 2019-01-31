import React from 'react'
import { NavLink } from 'react-router-dom'
import './FriendCard.css';

const FriendCard = (props) => {
    console.log(props)
    return(
        <div className = "card">
            <NavLink to={`/friends/${props.friend.id}`}>
                <p>Name: {props.friend.name}</p>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
            </NavLink>
            <button onClick={e => props.populateForm(e, props.friend.id)}>Update Friend</button>
            <button onClick={e => props.deleteFriend(e, props.friend.id)}>Delete Friend</button>
        </div>
    )
}

export default FriendCard