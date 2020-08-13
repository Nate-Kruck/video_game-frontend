import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import ListPage from './GameList/ListPage.js'
import Header from './Header.js'

export default class extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
            <Switch>
              <Route
                path="/"
                exact render={(routerProps) => <ListPage {...routerProps} />}
                />
            </Switch>
        </Router>
      </div>
    )
  }
}

