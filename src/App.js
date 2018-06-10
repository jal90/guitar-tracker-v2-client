import React, { Component } from 'react';
import './App.css';
import SigninForm from './signin-form.js';
import Guitars from './Guitars'
// const store = require('./store.js')

class App extends Component {

  render() {
    return (
      <div>
        <SigninForm />
        <Guitars />
      </div>
    );
  }
}

export default App;
