import React, { Component } from 'react';
import './App.css';
import SigninForm from './signin-form.js';
import SignupForm from './signup-form.js';
import Guitars from './Guitars'
import SignoutButton from './signout-button'
import { signUpCall, signInCall, signOutCall, getGuitarsCall } from './api.js'


import 'bulma/css/bulma.css'
import $ from 'jquery';
const store = require('./store.js')


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // TODO: move guitars and setups out of here and into components.
      guitars: [],
      setups: [],
      isLoggedIn: false
    }

    this.getGuitars = this.getGuitars.bind(this)
    this.signUserIn = this.signUserIn.bind(this)
    this.logUserOut = this.logUserOut.bind(this)
    // this.getSetups = this.getSetups.bind(this)
  }

  signUp (email, password) {
    const credentials = {
      credentials:{
        email: email,
        password: password,
        password_confirmation: password
      }
    }
    // API call from api.js
    signUpCall(credentials)
    // TODO: this is where success and error should go
  }

  signIn (email, password) {
    const credentials = {
      credentials:{
        email: email,
        password: password      }
    }
    // API call from api.js
    signInCall(credentials)
    // TODO: reconfigure the `isLoggedIn` logic
      .then(res => {
        store.token = res.user.token
        // this.setState({isLoggedIn: true})
      })
      // TODO: if getGuitars is moved to Guitars component, import this function from there.
      .then(this.getGuitars)
      // TODO: write error catching
  }

  signOut () {
    // API call from api.js
    signOutCall()
    // TODO: then and catch

          // .then(() => {
          //   store.token = ''
          // })
  }


// TODO: move this into guitars component?
  getGuitars() {
    // API call from api.js
    getGuitarsCall()
      .then(res => {
        const guitars = res
        this.setState({guitars})
      })
   }

   // getSetups() {
   //   $.ajax({
   //     url: 'http://localhost:4741/setups',
   //     method: 'GET',
   //     headers: {
   //       contentType: 'application/json',
   //       Authorization: 'Token token=' + store.token
   //     }
   //   })
   //     .then(res => {
   //       const setups = res
   //       this.setState({setups})
   //     })
   //  }

// TODO: change this to an on success API call in the sign in function, or rework another way
   signUserIn() {
     this.setState({isLoggedIn: true})
   }

   logUserOut() {
     this.setState({isLoggedIn: false})
   }

  render() {

    return (
      <div>
        <SigninForm getGuitars={this.getGuitars} getSetups={this.getSetups} signInAction={this.signIn} signUserIn={this.signUserIn} isLoggedIn={this.state.isLoggedIn} />
        <SignupForm signUpAction={this.signUp}/>
        <SignoutButton signOutAction={this.signOut} isLoggedIn={this.state.isLoggedIn} />
        <Guitars getGuitarsAction={this.getGuitars} guitars={this.state.guitars} setups={this.state.setups} isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}

export default App;
