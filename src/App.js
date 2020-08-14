import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import ListPage from './GameList/ListPage.js'
import Header from './Header.js'
import CreateGameForm from './Form/Form.js'
import DetailPage from './DetailPage/DetailPage.js'

export default class extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <div className="sidebar">
            <Link to='/create'>Add Game</Link>
            <Link to='/'>List</Link>
          </div>
            <Switch>
              <Route
                path="/"
                exact render={(routerProps) => <ListPage {...routerProps} />}
                />
              <Route
                path="/create" exact render={(routerProps) => <CreateGameForm {...routerProps} />}
              />
              <Route
                path="/detail/:id" exact render={(routerProps) => <DetailPage {...routerProps} />}
              />
            </Switch>
        </Router>
      </div>
    )
  }
}

