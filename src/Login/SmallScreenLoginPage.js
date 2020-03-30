import React from 'react';
import { Component } from 'react';
import LoginContainer from './LoginContainer';
import { Grid } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import "./Login.css";

class SmallScreenLoginPage extends Component {


    render() {
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid className="login-info" item sm={12} spacing={1} >
                        <InfoIcon />
                    </Grid>
                    <Grid container item sm={12} spacing={1}>
                        <LoginContainer />
                    </Grid>

                </Grid>
            </div>

        );
    }
}

export default SmallScreenLoginPage;