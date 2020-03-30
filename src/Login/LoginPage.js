import React from 'react';
import { Component } from 'react';
import SmallScreenLoginPage from './SmallScreenLoginPage'
import DesktopScreenLoginPage from './DesktopScreenLoginPage'
import "./Login.css"

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            renderDesktop : true,
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        let currentHideNav = (window.innerWidth > 760);
        if (currentHideNav !== this.state.renderDesktop) {
            this.setState({ renderDesktop: currentHideNav });
        }
    }

    render() {
        return (
            this.state.renderDesktop ? <DesktopScreenLoginPage /> : <SmallScreenLoginPage /> 
        );
    }
}

export default LoginPage;