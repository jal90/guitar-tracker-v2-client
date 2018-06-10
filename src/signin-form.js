import React, { Component } from 'react';
import $ from 'jquery';
const store = require('./store.js')

class SigninForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      token: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
    // console.log(this.state.email)
    store.email = e.target.value
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
    store.password = e.target.value
  }

  onLogin (e) {
    e.preventDefault()
    $.ajax({
      url: 'http://localhost:4741/sign-in',
      method: 'POST',
      headers: {
        contentType: 'application/json',
        // Authorization: 'Token token=' + store.user.token
      },
      data: {
        credentials: {
          email: this.state.email,
          password: this.state.password
        }
      }
    })
      .then(res => {
        // this.setState({token: res.user.token})
        store.token = res.user.token
      })
  }

  render() {
    return (
      <form onSubmit={this.onLogin}>
        <input placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmailChange} />
        <input placeholder="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SigninForm;
