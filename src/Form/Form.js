import React, { Component } from 'react'
import { createGame } from '../API-Calls/games-api.js'
import '../App.js'

export default class CreateGameForm extends Component {
    state = {
        name: '',
        genre: '',
        mature: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createGame({
            name: this.state.name,
            genre: this.state.genre,
            mature: this.state.mature
        });

        this.setState({
            name: '',
            genre: '',
            mature: ''
        })
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleGenreChange = e => {
        this.setState({ genre: e.target.value});
    }

    handleMatureChange = e => {
        this.setState({ mature: e.target.value});
    }

    render() {
        return (
            <div className="gameContent">
                <h3>Add your own game</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input onChange={this.handleNameChange} value={this.state.name} />
                    </label>
                    <label>
                        Genre:
                        <input onChange={this.handleGenreChange} value={this.state.genre} />
                    </label>
                    <label>
                        Mature:
                        <input onChange={this.handleMatureChange} type="boolean" value={this.state.mature} />
                    </label>
                    <button>Add Game</button>
                </form>
            </div>
        )
    }
}