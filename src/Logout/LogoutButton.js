import React from 'react';
import { withFirebase } from '../Firebase';
import "./LogoutButton.css";
import Button from '@material-ui/core/Button';
const LogoutButton = ({ firebase }) => (
    <Button className="signout-con" variant="contained" color="secondary" onClick={firebase.doSignOut}>
        Sign Out
    </Button>
);
export default withFirebase(LogoutButton);