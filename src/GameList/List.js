import React, { Component } from 'react'
import Games from './Games.js'


export default class List extends Component {
    render() {
        const {
            data
        } = this.props
        return (
            <ul>
                {data.map(game => <Games data={game} key={Math.random()*200} />)}
            </ul>
        )
    }
}