import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import FriendsList from './components/FriendsList'
import FriendCard from './components/FriendCard'
import Friend from "./components/Friend"
import NavBar from './components/NavBar'

class App extends Component {
  render(props) {
    return (
      <div className="App">
        {/* <FriendsList /> */}
        <Route path = "/" component={NavBar}/>
        <Route exact path = "/" component={FriendsList}/>
        <Route 
        path="/friends/:id" 
        render={props => <Friend {...props}/>} />
      </div>
    );
  }
}

export default App;
