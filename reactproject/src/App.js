import React, { Component } from 'react'
import firebase from 'firebase';
import DashBoard from './components/dashboard/Dashboard';
import Login from './components/auth/login';


firebase.initializeApp({
  apiKey: "AIzaSyCCisMgUteKiMgdplvrnoVM77-vy9Q3ZPs",
  authDomain: "myreactproject-60271.firebaseapp.com"
})
class App extends Component{
constructor(props) {
  super(props)

  this.state = {
    isSignedIn:false
  }
}
uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
}
componentDidMount = () => {
   
  firebase.auth().onAuthStateChanged(user => {
    this.setState({ isSignedIn: !!user })
    console.log("user", user)
  })
}

  render(){
    
      if(this.state.isSignedIn){
        return (
          <DashBoard uiConfig={this.uiConfig} isSignedIn={this.state.isSignedIn}/>
          );    
    }else{
      return(<Login uiConfig={this.uiConfig} isSignedIn={this.state.isSignedIn}/>);
    }
  
  }
}
export default App;