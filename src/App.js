import React, { Component } from 'react';
import './App.css';
import SigninForm from './signin-form.js';
import SignupForm from './signup-form.js';
import Guitars from './Guitars'
import SignoutButton from './signout-button'

import 'bulma/css/bulma.css'
import $ from 'jquery';
const store = require('./store.js')


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guitars: [],
      setups: [],
      isLoggedIn: false
    }

    this.getGuitars = this.getGuitars.bind(this)
    this.signUserIn = this.signUserIn.bind(this)
    this.logUserOut = this.logUserOut.bind(this)
    this.getSetups = this.getSetups.bind(this)
  }

  getGuitars() {
    $.ajax({
      url: 'http://localhost:4741/guitars',
      method: 'GET',
      headers: {
        contentType: 'application/json',
        Authorization: 'Token token=' + store.token
      }
    })
      .then(res => {
        const guitars = res
        this.setState({guitars})
      })
   }

   getSetups() {
     $.ajax({
       url: 'http://localhost:4741/setups',
       method: 'GET',
       headers: {
         contentType: 'application/json',
         Authorization: 'Token token=' + store.token
       }
     })
       .then(res => {
         const setups = res
         this.setState({setups})
       })
    }

   signUserIn() {
     this.setState({isLoggedIn: true})
   }

   logUserOut() {
     this.setState({isLoggedIn: false})
   }

  render() {

    return (
      <div>
        <SigninForm getGuitars={this.getGuitars} getSetups={this.getSetups} signUserIn={this.signUserIn} isLoggedIn={this.state.isLoggedIn} />
        <SignupForm />
        <SignoutButton getGuitars={this.getGuitars} logUserOut={this.logUserOut} isLoggedIn={this.state.isLoggedIn} />
        <Guitars getGuitars={this.getGuitars} guitars={this.state.guitars} setups={this.state.setups} isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}

export default App;
