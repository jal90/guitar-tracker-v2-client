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
      string_gauge: '',
      date_strings_changed: '',
      date_of_setup: '',
      setup_notes: '',
      isVisible: false
    }

    this.handleStringBrandChange = this.handleStringBrandChange.bind(this)
    this.handleStringGaugeChange = this.handleStringGaugeChange.bind(this)
    this.handleStringChangeDateChange = this.handleStringChangeDateChange.bind(this)
    this.handleSetupDateChange = this.handleSetupDateChange.bind(this)
    this.handleSetupNotesChange = this.handleSetupNotesChange.bind(this)
    this.toggleCreateSetupView = this.toggleCreateSetupView.bind(this)

    this.onCreate = this.onCreate.bind(this)
  }

  toggleCreateSetupView() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  handleStringBrandChange(e) {
    this.setState({string_brand: e.target.value})
  }

  handleStringGaugeChange(e) {
    this.setState({string_gauge: e.target.value})
  }

  handleSetupDateChange(e) {
    this.setState({date_of_setup: e.target.value})
  }

  handleSetupNotesChange(e) {
    this.setState({setup_notes: e.target.value})
  }

  handleStringChangeDateChange(e) {
    this.setState({date_strings_changed: e.target.value})
  }

  onCreate (e) {
    e.preventDefault()
    const data = {setup:
      {
        string_brand: this.state.string_brand,
        guitar_id: this.props.guitarId,
        string_gauge: this.state.string_gauge,
        date_strings_changed: this.state.date_strings_changed,
        date_of_setup: this.state.date_of_setup,
        setup_notes: this.state.setup_notes
      }
    }
    createSetupCall(data)
      .then(() => this.props.getSetups())
      .then(() => this.setState({string_brand: '', string_gauge: '', date_of_setup: '', date_strings_changed: '', setup_notes: ''}))
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleCreateSetupView}>{
            this.state.isVisible
              ? 'hide form'
              : 'Update guitar\'s SETUP'
          }</button>

        <form onSubmit={this.onCreate} className={this.state.isVisible
            ? 'visible'
            : 'invisible'}>
          <input placeholder="Sting brand" type="text" value={this.state.string_brand} onChange={this.handleStringBrandChange} />
          <input placeholder="StringGauge" type="text" value={this.state.string_gauge} onChange={this.handleStringGaugeChange} />
          <input placeholder="SetupDate" type="text" value={this.state.date_of_setup} onChange={this.handleSetupDateChange} />
          <input placeholder="String change Date" type="text" value={this.state.date_strings_changed} onChange={this.handleStringChangeDateChange} />
          <input placeholder="SetupNotes" type="text" value={this.state.setup_notes} onChange={this.handleSetupNotesChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateSetup;
