import React, { Component } from 'react';
import { deleteGuitarCall } from './api.js'

class DeleteGuitar extends Component {
  constructor(props) {
    super(props)

    this.deleteGuitar = this.deleteGuitar.bind(this)
  }

  deleteGuitar() {
    if (window.confirm("Do you really want to delete this guitar?")) {
    // put api.js function here
    deleteGuitarCall(this.props.id)
      .then(() => this.props.getGuitarsAction())
    }
  }

  render() {
    return (
    <button onClick={this.deleteGuitar}>Delete Guitar</button>
    );
  }
}

export default DeleteGuitar;
