import React, { Component } from 'react';
import $ from 'jquery';
import 'bulma/css/bulma.css'
const store = require('./store.js')

class UpdateGuitar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      make: '',
      model: '',

    }

    this.deleteGuitar = this.deleteGuitar.bind(this)

  }

  deleteGuitar() {
    if (window.confirm("Do you really want to delete this guitar?")) {
      $.ajax({
        url: 'http://localhost:4741/guitars/' + this.props.id,
        method: 'DELETE',
        headers: {
          contentType: 'application/json',
          Authorization: 'Token token=' + store.token
        }
      })
      .then(this.props.getGuitars)
    }
  }

  render() {
    return (
    <button onClick={this.deleteGuitar}>Delete Guitar</button>
    );
  }
}

export default UpdateGuitar;
