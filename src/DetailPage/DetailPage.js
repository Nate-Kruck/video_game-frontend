import React, { Component } from 'react';
import { fetchGames, updateGameList, fetchGame, deleteGame } from '../API-Calls/games-api.js'


const Emoji = props => (
    <span className = "emoji"
    role = "img"
    aria-label = {props.label ? props.label : ""}
    aria-hidden = {props.label ? "false" : "true"}
    >
    {props.symbol} 
    </span>
)

export default class DetailPage extends Component {
    state = {
        games: {},
        name: '',
        platform_id: 1,
        genre: '',
        mature: true,
        rating: '',
        price: '',
        image: '',
        isLoading: false
}

    componentDidMount = async () => {
        this.state.isLoading = true;
        const data = await fetchGame(this.props.match.params.id)
        const gameData = await fetchGames();

        this.setState({
            games: gameData.body,
            name: data.body.name,
            genre: data.body.genre,
            mature: data.body.mature,
            rating: data.body.rating,
            price: data.body.price,
        })

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await updateGameList(
                this.props.match.params.id,
                {
                    name: this.state.name,
                    platform_id: this.state.platform_id,
                    genre: this.state.genre,
                    mature: this.state.mature,
                    rating: this.state.rating,
                    price: this.state.price,
                    image: this.state.image
                });


                const updatedGameList = await fetchGame(this.props.match.params.id)

                this.setState({
                    name: '',
                    platform_id: 1,
                    genre: '',
                    mature: '',
                    rating: 5,
                    price: '',
                    games: updatedGameList.body
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

    handleDelete = async () => {
        await deleteGame(this.props.match.params.id);

        this.props.history.push('/');
    }


    render() {
        return (
        <div className="gameBlock">
            {this.state.games.name} cost {this.state.games.price}, has {this.state.games.rating}/5 <Emoji symbol ="⭐" /> rating.
        <button style={{ background: 'yellow' }} onClick={this.handleDelete}>Delete</button>
        </div>
        )
    }

}