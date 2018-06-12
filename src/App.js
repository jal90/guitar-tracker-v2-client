import React, { Component } from 'react';
import './App.css';
import SigninForm from './signin-form.js';
import SignupForm from './signup-form.js';
import Guitars from './Guitars'
import 'bulma/css/bulma.css'
import $ from 'jquery';
const store = require('./store.js')


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guitars: []
    }

    this.getGuitars = this.getGuitars.bind(this)
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

  render() {
    return (
      <div>
        <SigninForm getGuitars={this.getGuitars} />
        <SignupForm />
        <Guitars getGuitars={this.getGuitars} guitars={this.state.guitars}/>
      </div>
    );
  }
}

export default App;
