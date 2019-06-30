import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Button from '@material-ui/core/Button';
export default class navbar extends Component {
    render() {
      const uiConfig =this.props.config;
        return (
            <div>
            <AppBar>
            <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{flexGrow:1}}>
            React Projet
          </Typography>
          {this.props.isSignedIn ? <Button color="inherit" onClick={() => firebase.auth().signOut()}>Sign Out</Button> :
          <StyledFirebaseAuth uiConfig={uiConfig}  firebaseAuth={firebase.auth()}/>}
        </Toolbar>
            </AppBar>
            </div>
        )
    }
}
