import React, { Component } from 'react';
import './App.css';
import SigninForm from './signin-form.js';
import SignupForm from './signup-form.js';
import Guitars from './Guitars'

class App extends Component {

  render() {
    return (
      <div>
        <SigninForm />
        <SignupForm />
        <Guitars />
      </div>
    );
  }
}

export default App;
