import React, { Component } from 'react';
import $ from 'jquery';
import 'bulma/css/bulma.css'
const store = require('./store.js')

class CreateGuitar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      make: '',
      model: '',
      year: '',
      price: ''
    }

    this.handleMakeChange = this.handleMakeChange.bind(this)
    this.handleModelChange = this.handleModelChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)

    this.onCreate = this.onCreate.bind(this)
  }

  handleMakeChange(e) {
    this.setState({make: e.target.value})
  }

  handleModelChange(e) {
    this.setState({model: e.target.value})
  }

  handleYearChange(e) {
    this.setState({year: e.target.value})
  }

  handlePriceChange(e) {
    this.setState({price: e.target.value})
  }

  onCreate (e) {
    e.preventDefault()
    $.ajax({
      url: 'http://localhost:4741/guitars/',
      method: 'POST',
      headers: {
        contentType: 'application/json',
        Authorization: 'Token token=' + store.token
      },
      data: {
        guitar: {
          make: this.state.make,
          model: this.state.model,
          year: this.state.year,
          price: this.state.price
        }
      }
    })
    // refresh the catalog view
      .then(this.props.getGuitars)
      .then(() => this.setState({make: '', model: '', year: '', price: ''}))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onCreate}>
          <input placeholder="Make" type="text" value={this.state.make} onChange={this.handleMakeChange} />
          <input placeholder="Model" type="text" value={this.state.model} onChange={this.handleModelChange} />
          <input placeholder="Year" type="text" value={this.state.year} onChange={this.handleYearChange} />
          <input placeholder="Price" type="text" value={this.state.price} onChange={this.handlePriceChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateGuitar;
