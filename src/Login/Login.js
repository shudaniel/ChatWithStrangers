import React from 'react';
import { Component } from 'react';
import { Button, FormGroup, Input, InputLabel } from "@material-ui/core";
import logo from '../logo.svg';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = { 
        };
    }

    render() {
        return (
            <div className="Login">
                <FormGroup controlId="username" bsSize="large">
                    <InputLabel htmlFor="username-input">Username</InputLabel>
                    <Input id="username-input" aria-describedby="my-username-input" />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <Input id="password-input" aria-describedby="my-password-input" />
                </FormGroup>
                <Button className="Login-btn" variant="contained">Submit</Button>
            </div>
        );
    }
}

export default Login;