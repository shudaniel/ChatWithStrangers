import React from 'react';
import { Component } from 'react';
import './App.css';
import StubHome from './StubHome'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import * as ROUTES from './constants/Routes';

class App extends Component {
  
  constructor() {
    super();
  } 

  render() {
    return (
          <Router>
            <div>
              <Route exact path={ROUTES.HOME} component={StubHome} />
            </div>
          </Router>
      );
  }
}

export default App;
