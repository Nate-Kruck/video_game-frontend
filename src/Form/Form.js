import React, { Component } from 'react'
import { createGame, fetchGames } from '../API-Calls/games-api.js'
import '../App.js'


export default class CreateGameForm extends Component {
    state = {
        name: '',
        platform_id: '',
        genre: '',
        mature: true,
        rating: 5,
        price: 30,
        
    }

    componentDidMount = async () => {
        const gameData = await fetchGames();

        this.setState({
            games: gameData.body
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const postData = await createGame({
            name: this.state.name,
            platform_id: this.state.platform_id,
            genre: this.state.genre,
            mature: this.state.mature,
            rating: this.state.rating,
            price: this.state.price,
        });
        console.log(postData)

        this.setState({
            id: 1,
            name: '',
            platform_id: '',
            genre: '',
            mature: true,
            rating: 5,
            price: 30
        });

    } catch(e) {
        console.log(e.message)
    }
}

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handlePlatformChange = e => {
        this.setState({ platform_id: e.target.value });
    }

    handleGenreChange = e => {
        this.setState({ genre: e.target.value});
    }

    handleMatureChange = e => {
        this.setState({ mature: e.target.value});
    }

    handleRatingChange = e => {
        this.setState({ rating: e.target.value});
    }

    handlePriceChange = e => {
        this.setState({ price: e.target.value});
    }

    render() {
        return (
            <div className="gameContent">
                <h3>Add your own game</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input onChange={this.handleNameChange} type="text" value={this.state.name} />
                    </label>
                    <label>
                        Platform:
                        <select onChange={this.handlePlatformChange} value={this.state.platform_id}>
                            <option value='1'>Xbox One</option>
                            <option value='2'>PS4</option>
                            <option value='3'>PC</option>
                            <option value='4'>Nintendo</option>
                        </select>
                    </label>
                    <label>
                        Genre:
                        <select onChange={this.handleGenreChange} value={this.state.genre}>
                            <option>Action</option>
                            <option>Sports</option>
                            <option>Adventure</option>
                            <option>Battle Royal</option>
                            <option>RPG</option>
                            <option>Racing</option>
                            <option>RTS</option>
                            <option>Simulation</option>
                            <option>FPS</option>
                        </select>
                    </label>
                    <label>
                        Mature:
                        <input onChange={this.handleMatureChange} type="checkbox" value={this.state.mature} />
                    </label>
                    <label>
                        Rating:
                        <select onChange={this.handleRatingChange} value={this.state.rating}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </label>
                    <label>
                        Price:
                        <select onChange={this.handlePriceChange} value={this.state.price}>
                            <option value="1">$9.99</option>
                            <option value="2">$19.99</option>
                            <option value="3">$29.99</option>
                            <option value="4">$59.99</option>
                        </select>
                    </label>
                    {
                    (!this.state.name || !this.state.platform || !this.state.genre || !this.state.mature || !this.state.rating || !this.state.price) ? <button className='disabled'>Add Game</button> : <button>Add Game</button>
                    }
                    {/* <button>Add Game</button> */}
                </form>
            </div>
        )
    }
}

                    
