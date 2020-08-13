import React, { Component } from 'react'
import request from 'superagent'
import List from './List.js'

export default class ListPage extends Component {
    state = {
        emptyGamesArr: []
    }

    componentDidMount = async () => {
        const data = await request.get(`https://lab-08-backend.herokuapp.com/games`)

        const parsed = data.body;

        this.setState({
            emptyGamesArr: parsed
        })

    }

    render() {
        return (
            <div>
                <List data={this.state.emptyGamesArr} />
            </div>
        )
    }
}