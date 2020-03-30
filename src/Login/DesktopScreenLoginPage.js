import React from 'react';
import { Component } from 'react';
import LoginContainer from './LoginContainer'
import { Grid, Card, CardContent } from '@material-ui/core'
import "./Login.css"

class DesktopScreenLoginPage extends Component {

    render() {
        return (
            <div className="background-image top-margin-quarter">
                <Grid container spacing={1}>
                    <Grid container alignContent={'center'} item sm={12} md={8} spacing={3}>
                        <Card className="login-paper">
                            <CardContent>
                                <h1>About Us</h1>
                                <p>Two stupid people. One is a lonely straight nerdy dude. The other one is a rich hot Stanford lesbian</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container alignContent={'center'} item sm={12} md={4} spacing={3}>
                        <LoginContainer />
                    </Grid>

                </Grid>
            </div>

        );
    }
}

export default DesktopScreenLoginPage;