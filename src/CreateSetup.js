import React, { Component } from 'react';
import { createSetupCall } from './api.js'


// TODO: I think this is going to be a ton of stuff for user to edit (plus all the guitar properties) I think the site should display all info in a streamlined fashion,
// with little edit buttons for each individual piece of information. So rather than having text stating properties, then extra inputs popping up for editing, have the text turn into
// the inputs on the click of a button, and then turn it back into text. Maybe something like a "is-being-edited" prop or class that will return a div or input accordingly
class CreateSetup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      string_brand: '',
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

  handleStringBrandChange(e) {
    this.setState({string_brand: e.target.value})
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
    const data = {guitar:
      {
        make: this.state.make,
        model: this.state.model,
        year: this.state.year,
        price: this.state.price
      }
    }
    createGuitarCall(data)
      .then(() => this.props.getGuitarsAction())
      .then(() => this.setState({make: '', model: '', year: '', price: ''}))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onCreate}>
          <input placeholder="Sting brand" type="text" value={this.state.string_brand} onChange={this.handleStringBrandChange} />
          <input placeholder="Model" type="text" value={this.state.model} onChange={this.handleModelChange} />
          <input placeholder="Year" type="text" value={this.state.year} onChange={this.handleYearChange} />
          <input placeholder="Price" type="text" value={this.state.price} onChange={this.handlePriceChange} />
          <input placeholder="Model" type="text" value={this.state.model} onChange={this.handleModelChange} />
          <input placeholder="Year" type="text" value={this.state.year} onChange={this.handleYearChange} />
          <input placeholder="Price" type="text" value={this.state.price} onChange={this.handlePriceChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateSetup;
