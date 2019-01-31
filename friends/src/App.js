import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom'
import './App.css';
import FriendsList from './components/FriendsList'
import FriendCard from './components/FriendCard'
import Friend from "./components/Friend"
import NavBar from './components/NavBar'
import FriendsListWithRouter from './components/FriendsList'
import FriendForm from './components/FriendForm'
import axios from 'axios'

const blankFriend = {
  name: '',
  age: '',
  email: ''
}

class App extends Component {
  constructor() {
    super();
    this.state = {
        friends: [],
        friend: blankFriend
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

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  addFriend = e => {
    e.preventDefault();
    axios.post(`http://localhost:5000/friends`, this.state.friend)
    .then(res => {
        this.setState({
            friends: res.data
        })
        this.props.history.push(`/`)
    })
    .catch(err => {
        console.log(err)
    })
  }





  render() {
    const friendsList = this.state.friends
    return (
      <div className="App">
        {/* <FriendsList /> */}
        <Route path = "/" component={NavBar}/>
        <Route exact path = "/" render={props => <FriendsList {...props} friendsList={friendsList}/>}/>
        <Route 
        path="/friends/:id" 
        render={props => <Friend {...props}/>} />
        <Route 
          path="/friend-form" 
          render={props => 
            <FriendForm 
            {...props} 
            addFriend={this.addFriend} 
            friend={this.state.friend}
            handleChanges={this.handleChanges}
            />}/>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App)
export default AppWithRouter;
