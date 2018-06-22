import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleSignUp (e) {
    e.preventDefault()
    // Pass values to signUp in App.js
    this.props.signUpAction(this.state.email, this.state.password)
  }

  render() {
    return (
      <form onSubmit={this.handleSignUp}>
        <label>Sign up</label>
        <input placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmailChange} />
        <input placeholder="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignupForm;
