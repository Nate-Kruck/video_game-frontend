import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'
import CreateGameForm from '../Form/Form.js'
// import Games from '../GameList/Games.js'

// const Emoji = props => (
//     <span className = "emoji"
//     role = "img"
//     aria-label = {props.label ? props.label : ""}
//     aria-hidden = {props.label ? "false" : "true"}
//     >
//     {props.symbol} 
//     </span>
// )

export default class GameCard extends Component {

    state = {
        editGame: false
    }

    gameForm = () => {
        this.setState({ editGame: true })
    }

    render() {
        const {
            data,
            id,
            history
        } = this.props

        return (
            <div className='gameBlock'>
                <h1>{data}</h1>
                <p><Link to='/' className='home_page'>Go Back</Link></p>
                {
                    this.state.editGame &&
                    <CreateGameForm history={history} id={id} data={data}/>
                }
                <p onClick={this.props.delete}>Delete Game</p>        
            </div>
        )
    }
}
