import 'bulma/css/bulma.css'
import React, { Component } from 'react';

class SigninForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleSignIn (e) {
    e.preventDefault()

    this.props.signInAction(this.state.email, this.state.password)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignIn}>
          <label>Sign in</label>
          <input placeholder="Email" type="text" value={this.state.email} onChange={this.handleEmailChange} />
          <input placeholder="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SigninForm;
