import React from 'react';
import { Component } from 'react';
import './App.css';
import Firebase from './Firebase/firebase'
import StubHome from './StubHome'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './Login/LoginPage'

import * as ROUTES from './constants/Routes';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      user: null 
    }
  } 

  render() {
    if (user === null) {
      return (<LoginPage />);
    }

    return (
        <Router>
          <div>
            <Route exact path={ROUTES.HOME} component={ StubHome } />
          </div>
        </Router>
      );
  }
}

export default App;
