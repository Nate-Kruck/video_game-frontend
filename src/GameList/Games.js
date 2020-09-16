import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'
// import Popover from 'react-bootstrap/Popover';



const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        >
        {props.symbol}
    </span>
)


export default class Games extends Component {
    render() {
        
        const {
            data
        } = this.props
        
        
        return (
            <>
            <div className = "gameBlock">
            <li key={Math.random()} className="productGrid">
                <h3>{data.name}</h3>
                    <Link to={`/detail/${data.id}`}>
                        <img className="image" src={data.image} alt={data.name} width="200px"/> 
                    </Link>
                <p>Game Genre: {data.genre}</p>
                <p>Price: ${data.price}</p>
                <p> Rating: {
                    data.rating
                } <Emoji symbol = "⭐" /></p>
                <p>Mature: {data.mature ? 'Yes' : 'No'}</p>
            </li>
            </div>
            
            </>
        )
    }
}