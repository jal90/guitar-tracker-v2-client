import React, { Component } from 'react';

import 'bulma/css/bulma.css'

class SignoutButton extends Component {

  signOut() {
    // e.preventDefault()
    $.ajax({
      url: 'http://localhost:4741/sign-out',
      method: 'DELETE',
      headers: {
        contentType: 'application/json',
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
