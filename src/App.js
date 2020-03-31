import React from 'react';
import { Component } from 'react';
import './App.css';
import StubHome from './StubHome';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withFirebase } from './Firebase';
import LoginPage from './Login/LoginPage';


import * as ROUTES from './constants/Routes';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      authStatusReported: false,
      isUserSignedIn: false,
    }
  } 

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(user => this.setState({
      authStatusReported: true,
      isUserSignedIn: !!user
    }));
  }

  render() {
    if (this.state.isUserSignedIn) {
        return (
          <Router>
            <div>
              <Route exact path={ROUTES.HOME} component={StubHome} />
            </div>
          </Router>
        );
    }
    return <LoginPage />;

  }
}

export default withFirebase(App);
