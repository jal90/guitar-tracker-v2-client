import React, { Component } from 'react';
import './App.css';
import SigninForm from './signin-form.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {token: ''}
  }

  render() {
    return (
      <SigninForm onLogin={this.props.login} />
    );
  }
}

export default App;
