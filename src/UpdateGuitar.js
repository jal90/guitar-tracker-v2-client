import React, { Component } from 'react';
import { updateGuitarCall } from './api.js'

class UpdateGuitar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      make: '',
      model: '',
      year: '',
      price: '',
      isVisible: false
    }

    this.handleMakeChange = this.handleMakeChange.bind(this)
    this.handleModelChange = this.handleModelChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)

    this.toggleUpdateView = this.toggleUpdateView.bind(this)

    this.onUpdate = this.onUpdate.bind(this)
  }

  componentDidMount() {
    this.setState({
      make: this.props.guitar.make,
      model: this.props.guitar.model,
      year: this.props.guitar.year,
      price: this.props.guitar.price
    })
  }

  toggleUpdateView() {
    this.setState({isVisible: !this.state.isVisible})
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

  onUpdate (e) {
    e.preventDefault()
    const data = {
      guitar: {
        make: this.state.make,
        model: this.state.model,
        year: this.state.year,
        price: this.state.price
      }
    }
    updateGuitarCall(data, this.props.guitar.id)
      .then(() => this.props.getGuitarsAction())
      .then(() => this.setState({isVisible: false}))
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleUpdateView}>{this.state.isVisible ? 'Never mind, hide this form' : 'Update this guitar'}</button>

        <form onSubmit={this.onUpdate} className={this.state.isVisible ? 'visible' : 'invisible'}>
          <input placeholder="Make" type="text" defaultValue={this.props.guitar.make} onChange={this.handleMakeChange} />
          <input placeholder="Model" type="text" defaultValue={this.props.guitar.model} onChange={this.handleModelChange} />
          <input placeholder="Year" type="text" defaultValue={this.props.guitar.year} onChange={this.handleYearChange} />
          <input placeholder="Price" type="text" defaultValue={this.props.guitar.price} onChange={this.handlePriceChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateGuitar;
