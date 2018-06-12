import React, { Component } from 'react';
import $ from 'jquery';
import 'bulma/css/bulma.css'
const store = require('./store.js')


class SignoutButton extends Component {
  constructor(props) {
    super(props)

    this.signOut = this.signOut.bind(this)
  }

  signOut() {
    this.props.logUserOut()
    this.props.getGuitars()
    $.ajax({
      url: 'http://localhost:4741/sign-out',
      method: 'DELETE',
      headers: {
        contentType: 'application/json',
        Authorization: 'Token token=' + store.token
      }
    })
      .then(() => {
        store.token = ''
        store.email = ''
      })
  }

  render() {
    return (
      <button onClick={this.signOut}>Sign out</button>
    );
  }
}

export default SignoutButton;
