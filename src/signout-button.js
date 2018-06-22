import React, { Component } from 'react';

// TODO: Perhaps delete this whole component, and have the signout button rendered by App.js
class SignoutButton extends Component {
  constructor(props) {
    super(props)

    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleSignOut(e) {
    e.preventDefault()

    this.props.signOutAction()
  }

  render() {
    // const isLoggedIn = this.props.isLoggedIn
    let button
    // if (isLoggedIn) {
      button = <button onClick={this.handleSignOut}>Sign out</button>
    // }


    return (
      <div>{button}</div>
    );
  }
}

export default SignoutButton;
