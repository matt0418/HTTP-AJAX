import React from 'react'
import axios from 'axios'
import FriendCard from './FriendCard'
import NavBar from './NavBar'
import './FriendsList.css';

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        
        .then(res => {
            this.setState({
                friends: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        const friendsList = this.state.friends
        return(
            <div className="card-page">
                {friendsList.map((friend, ind )=> (
                    <FriendCard friend = {friend} key = {ind}/>
                ))}
            </div>
        )
    }
}

export default FriendsList