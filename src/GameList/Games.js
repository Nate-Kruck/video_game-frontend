import React, { Component } from 'react'

export default class Games extends Component {
    render() {
        const {
            data
        } = this.props
        return (
            <li key={Math.random()*200} className="gameBlock">
                <h1>{data.name}</h1>
                <p><img className="image" src={data.image} alt={data.name} width="200px" /></p>
                <p>Game Genre: {data.genre}</p>
                <p>Price: {data.price}</p>
                <p>Rating: {data.rating}</p>
                <p>Mature: {data.mature ? 'Yes' : 'No'}</p>
            </li>
        )
    }
}