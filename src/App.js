import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './Login/LoginPage'
import * as ROUTES from './constants/Routes';

function App() {
  return (
    <Router>
      <div>
        <Route exact path={ROUTES.HOME} component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
