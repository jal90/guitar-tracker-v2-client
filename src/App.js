import React, { Component } from 'react';
import './App.css';
import SigninForm from './signin-form.js';
import SignupForm from './signup-form.js';
import Guitars from './Guitars'
import SignoutButton from './signout-button'
import { signUpCall, signInCall, signOutCall } from './api.js'


import 'bulma/css/bulma.css'
import store from './store.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoggedIn: false, feedback: ''}

    this.signIn = this.signIn.bind(this)
    this.signUp = this.signUp.bind(this)
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
      .then(() => this.setState({feedback: 'Signed up'}))
      .catch(() => this.setState({feedback: 'User exists already (or potentially other error)'}))
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
        this.setState({isLoggedIn: true, feedback: 'Signed in'})
      })
      .catch(() => this.setState({feedback: 'Something\'s wrong, check your credentials'}))
  }

  signOut () {
    // API call from api.js
    signOutCall()
      .then(() => store.token = '')
      .then(() => this.setState({isLoggedIn: false, feedback: 'Signed out'}))
      .catch(() => this.setState({feedback: 'Something went wrong, please try again'}))
  }

  render() {
    const { isLoggedIn } = this.state

    return (
      <div className="App">
        <div>{this.state.feedback}</div>
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
