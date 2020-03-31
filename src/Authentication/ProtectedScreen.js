import React from 'react';
import { PureComponent } from 'react';
import FirebaseAuthContext from './context';
import LoginPage from '../Login/LoginPage';


class ProtectedScreen extends PureComponent {
    render() {
        const { children } = this.props;
        return (
            <FirebaseAuthContext.Consumer>
                {
                    ({ isUserSignedIn, firebase }) => {
                        if (isUserSignedIn) {
                            return children;
                        }
                        return <LoginPage />;
                    }
                }
            </FirebaseAuthContext.Consumer>
        );
    }
};

export default ProtectedScreen;