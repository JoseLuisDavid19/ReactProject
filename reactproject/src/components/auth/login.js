import React, { Component } from 'react';
import NavBar from '../navbar/navbar';


export default class login extends Component {

    render() {
        const uiConfig= this.props.uiConfig;
        const isSignedIn=this.props.isSignedIn;
        return (
            <div>
               <NavBar config={uiConfig} isSignedIn={isSignedIn} />
            </div>
        );
        
    }
}
