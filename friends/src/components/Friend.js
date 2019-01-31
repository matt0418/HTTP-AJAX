import React from 'react'
import axios from 'axios'
import FriendCard from './FriendCard'
import './Friend.css';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchID(id)
    }

    fetchID = id => {
        axios.get(`http://localhost:5000/friends/${id}`)
        .then(res => {
            this.setState({
                friend: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(props) {
        console.log(this.props)
        if (!this.state.friend) {
            return <h1>Loading Friend</h1>
        }
        return(
            <div className = "one-card">
                <FriendCard 
                    friend={this.state.friend} 
                    // deleteFriend={this.props.deleteFriend}
                    // populateForm={this.props.populateForm}
                />
                <button onClick={e => this.props.populateForm(e, this.state.friend.id)}>Update Friend</button>
                <button onClick={e => this.props.deleteFriend(e, this.state.friend.id)}>Delete Friend</button>
            </div>
             
        )
    }
}

export default Friend