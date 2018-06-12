import React, { Component } from 'react';
import $ from 'jquery';
import 'bulma/css/bulma.css'
const store = require('./store.js')

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      token: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.onSignup = this.onSignup.bind(this)
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
    store.email = e.target.value
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
    store.password = e.target.value
  }

  onSignup (e) {
    e.preventDefault()
    $.ajax({
      url: 'http://localhost:4741/sign-up',
      method: 'POST',
      headers: {
        contentType: 'application/json',
      },
      data: {
        credentials: {
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password
        }
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.onSignup}>
        <label>Sign up</label>
        <input placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmailChange} />
        <input placeholder="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignupForm;
