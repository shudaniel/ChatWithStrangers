import React from 'react';
import { Component, PureComponent } from 'react';
import Firebase from "./firebase";
import FirebaseAuthContext, { defaultFirebaseContext } from './context';

// type FireAuthProviderProps = {
//     children: React.Node
// };

// type FireAuthProviderState = {
//     authStatusReported: boolean,
//     isUserSignedIn: boolean
// };


class FirebaseAuthProvider extends Component {
    constructor() {
        super();
        console.log("FirebaseAuthProvider");
        this.state = defaultFirebaseContext;
        this.firebase = new Firebase();
    }

    componentDidMount() {
        this.firebase.auth.onAuthStateChanged(user => this.setState({
            authStatusReported: true,
            isUserSignedIn: !!user
        }));
    }

    render() {
        const { children } = this.props.children;
        const { firebase } = this.firebase;
        const { authStatusReported, isUserSignedIn } = this.state;
        return (
            <FirebaseAuthContext.Provider value={{ isUserSignedIn, firebase }} >
                {authStatusReported && children}
            </FirebaseAuthContext.Provider>
        );
    }
}

export default FirebaseAuthProvider;