import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login/Login'
import * as ROUTES from './constants/Routes';

function App() {
  return (
    <Router>
      <div>
        <Route exact path={ROUTES.HOME} component={Login} />
      </div>
    </Router>
  );
}

export default App;
