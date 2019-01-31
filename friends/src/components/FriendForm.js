import React from 'react'

function FriendForm(props) {
    return(
        <div>
            <form onSubmit={props.addFriend}>
                <input
                type="text"
                name="name"
                value={props.name}
                placeholder="Name"
                onChange={props.handleChanges}
                />
                <input
                type="number"
                name="age"
                value={props.age}
                placeholder="Age"
                onChange={props.handleChanges}
                />
                <input
                type="text"
                name="email"
                value={props.email}
                placeholder="Email"
                onChange={props.handleChanges}
                />
                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}


export default FriendForm