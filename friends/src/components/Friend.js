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
        console.log(id)
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

    render() {
        if (!this.state.friend) {
            return <h1>Loading Friend</h1>
        }
        return(
            <div className = "one-card">
                <FriendCard friend={this.state.friend}/>
            </div>
             
        )
    }
}

export default Friend