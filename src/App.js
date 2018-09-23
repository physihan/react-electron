import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import File from './pages/File';
import Main from './pages/Main';
import Talk from './pages/Talk';
import Navigator from './components/Navigator';
import './App.css';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="app">
          <Navigator />

          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/file" component={File} />
            <Route path="/file1" component={File} />
            <Route path="/file1" component={File} />
            <Route path="/talk" component={Talk} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
