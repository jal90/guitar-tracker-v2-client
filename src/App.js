import React, { Component } from 'react';
import './App.css';
import SigninForm from './signin-form.js';
import SignupForm from './signup-form.js';
import Guitars from './Guitars'
import SignoutButton from './signout-button'
import { signUpCall, signInCall, signOutCall, getGuitarsCall } from './api.js'


import 'bulma/css/bulma.css'
import $ from 'jquery';
import store from './store.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: false}

    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
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
        password: password
      }
    }
    // API call from api.js
    signInCall(credentials)
      .then(res => {
        store.token = res.user.token
        this.setState({isLoggedIn: true})
      })
      // TODO: write error catching
  }

  signOut () {
    // API call from api.js
    signOutCall()
      .then(this.setState({isLoggedIn: false}))
      .then(store.token = '')
    // TODO: catch error
  }

  render() {
    const { isLoggedIn } = this.state

    return (
      <div className="App">
        { isLoggedIn ?
          <div>
          <SignoutButton signOutAction={this.signOut} />
          <Guitars />
        </div>
          :
          <div>
          <SigninForm signInAction={this.signIn} />
          <SignupForm signUpAction={this.signUp} />
        </div>
        }
      </div>
    );
  }
}

export default App;
