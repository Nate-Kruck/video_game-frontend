import React, { Component } from 'react';
import { fetchGames } from '../API-Calls/games-api.js'


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
        isLoading: false,
        name: '',
        platform_id: '',
        genre: '',
        console: '',
        rating: '',
        price: '',
        image: ''
}

    componentDidMount = async () => {
        this.state.isLoading = true;
        

        const data = await fetchGames(this.props.match.params.id)

        this.setState({
            games: data.body
        })
    }

    render() {
        return (
        <div className="gameBlock">
            {this.state.games.name} cost {this.state.games.price}, has {this.state.games.rating}/5 <Emoji symbol ="⭐" /> rating.
        </div>
        )
    }

}