import React, { Component } from 'react';
// import './App.css';
// import SigninForm from './signin-form.js';
// import Guitars from './Guitars'
import $ from 'jquery';
const store = require('./store.js')

class UpdateGuitar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      make: '',
      model: '',

    }

    this.handleMakeChange = this.handleMakeChange.bind(this)
    this.handleModelChange = this.handleModelChange.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
  }

  handleMakeChange(e) {
    this.setState({make: e.target.value})
  }

  handleModelChange(e) {
    this.setState({model: e.target.value})
  }

  onUpdate (e) {
    e.preventDefault()
    $.ajax({
      url: 'http://localhost:4741/guitars/' + this.props.id,
      method: 'PATCH',
      headers: {
        contentType: 'application/json',
        Authorization: 'Token token=' + store.token
      },
      data: {
        guitar: {
          make: this.state.make,
          model: this.state.model
        }
      }
    })
      // .then(res => {
        // this.setState({token: res.user.token})
        // store.token = res.user.token
      // })
  }

  render() {
    return (
      <div>
        {/* This is the guitar's id as a prop: {this.props.id} */}
        <form onSubmit={this.onUpdate}>
          <input placeholder="Make" type="text" value={this.state.make} onChange={this.handleMakeChange} />
          <input placeholder="Model" type="text" value={this.state.model} onChange={this.handleModelChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateGuitar;
