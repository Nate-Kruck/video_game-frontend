import React, { Component } from 'react'
import request from 'superagent'
import List from './List.js'
// import { fetchGames } from '../API-Calls/games-api.js'
// import { Link } from 'react-router-dom'
import '../App.css'

export default class ListPage extends Component {
    state = {
        emptyGamesArr: [],
        isLoading: false
    }

    componentDidMount = async () => {
        this.state.isLoading = true;
        
        const data = await request.get(`https://lab-08-backend.herokuapp.com/games`)

        const parsed = data.body;

        this.setState({
            emptyGamesArr: parsed
        })

        this.state.isLoading = false

    }


    render() {
    
        return (
            <div className="gameBlock">
                
                <List data={this.state.emptyGamesArr} />        
            </div>
        )
    }
}