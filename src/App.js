import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state && this.state.isLoading === false) {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      )
    } else {
      return (
        <div>Loading..</div>
      )
    }
  }
}

export default connect(null, {})(App);
