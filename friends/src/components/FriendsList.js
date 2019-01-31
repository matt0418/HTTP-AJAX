import React from 'react'
import axios from 'axios'
import FriendCard from './FriendCard'
import NavBar from './NavBar'
import './FriendsList.css';
import { withRouter, Route } from 'react-router-dom'
import FriendForm from './FriendForm'

// const blankFriend = {
//     name: '',
//     age: '',
//     email: ''
// }

// class FriendsList extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             friends: [],
//             friend: blankFriend
//         }
//     }

//     componentDidMount() {
//         axios.get('http://localhost:5000/friends')
//         .then(res => {
//             this.setState({
//                 friends: res.data
//             })
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }

//     addFriend = e => {
//         e.preventDefault();
//         axios.post(`http://localhost:5000/friends`, this.state.friend)
//         .then(res => {
//             this.setState({
//                 friends: res.data
//             })
//             this.props.history.push(`/`)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }


//     render() {
//         const friendsList = this.state.friends
//         return(
//             <div className="card-page">
//                 {friendsList.map((friend, ind )=> (
//                     <FriendCard friend = {friend} key = {ind}/>
//                 ))}
//                <Route path="/friend-form" render={props => <FriendForm {...props} addFriend ={this.addFriend}/>}/> 
//             </div>
//         )
//     }
// }

function FriendsList(props) {
    return(
        <div className="card-page">
                {props.friendsList.map((friend, ind )=> (
                    <FriendCard friend = {friend} key = {ind}/>
                ))} 
            </div>
    )
}


// const FriendsListWithRouter = withRouter(FriendsList)
// export default FriendsListWithRouter
export default FriendsList