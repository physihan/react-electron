import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main';

class App extends Component {
  state = {};

  render() {
    // const { qrData, wifiName } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default App;
