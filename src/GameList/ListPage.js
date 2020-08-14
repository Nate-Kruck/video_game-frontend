import React, { Component } from 'react'
// import request from 'superagent'
import List from './List.js'
import { fetchGames } from '../API-Calls/games-api.js'
import { Link } from 'react-router-dom'

export default class ListPage extends Component {
    state = {
        emptyGamesArr: []
    }

    componentDidMount = async () => {
        const data = await fetchGames()
        // const data = await request.get(`https://lab-08-backend.herokuapp.com/games`)

        // const parsed = data.body;

        this.setState({
            emptyGamesArr: data.body
        })

    }

    render() {
        return (
            <div>
            {
                this.state.emptyGamesArr.map((game) => {
                    return <Link className="game" to={`/detail/${game.id}`} key={`${game.id}-${game.name}`}>
                        <p>Name: {game.name}</p>
                        <p>Genre: {game.genre}</p>
                        <p>Mature: {game.mature}</p>
                    </Link>
                })
            }
                <List data={this.state.emptyGamesArr} />
            </div>
        )
    }
}