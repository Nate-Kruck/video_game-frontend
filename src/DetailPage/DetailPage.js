import React, { Component } from 'react';
// import { fetchGames, updateGameList, fetchGame, deleteGame } from '../API-Calls/games-api.js'
import request from 'superagent';
import GameCard from './GameCard.js';

export default class DetailPage extends Component {
    state = {
        gameData: null,
        name: 'BF4',
        platform_id: 2,
        genre: 'FPS',
        mature: true,
        rating: 5,
        price: 29,
        isLoading: true
}

    componentDidMount = async () => {
        this.state.isLoading = true;
        // const data = await fetchGame(this.props.match.params.id)
        const gameId = this.props.match.params.id

        // const gameData = await fetchGames();
        const data = await request.get(`https://lab-08-backend.herokuapp.com/games/${gameId}`)

        // this.setState({
        //     games: gameData.body,
        //     name: gameData.body.name,
        //     genre: data.body.genre,
        //     mature: data.body.mature,
        //     rating: data.body.rating,
        //     price: data.body.price,
        // })
        // this.state.isLoading = false;

        const thisGame = data.body;
        this.setState({
            gameData: thisGame
        })

        this.state.isLoading = false;

    }


    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleDelete = async () => {
        const gameId = this.props.match.params.id

        await request.delete(`https://lab-08-backend.herokuapp.com/games/${gameId}`)
        // await deleteGame(this.props.match.params.id);

        this.props.history.push('/');
    }

    render() {
        return (
        <div className="gameBlock">
        {
            this.state.isLoading ?
            <GameCard history={this.props.history} id={this.props.match.params.id} delete={this.handleDelete} gameData={this.state.gameData}/>
            :
            <img src="http://placekitten.com/200/200" alt="" className="loading"/>
        }
            {/* {this.state.games.name} cost {this.state.games.price}, has {this.state.games.rating}/5 <Emoji symbol ="⭐" /> rating.
        <button style={{ background: 'yellow' }} onClick={this.handleDelete}>Delete</button> */}
        </div>
        )
    }

}