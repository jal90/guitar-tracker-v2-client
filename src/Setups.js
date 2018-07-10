import React, {Component} from 'react';
import CreateSetup from './CreateSetup'
import {getSetupsCall, createSetupCall} from './api.js'

class Setups extends Component {
  constructor(props) {
    super(props)
    this.state = {setups: [], newestSetup: [], isVisible: false}

    this.getSetups = this.getSetups.bind(this)
    this.toggleSetupsView = this.toggleSetupsView.bind(this)
  }

  toggleSetupsView() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  getSetups() {
    getSetupsCall().then((res) => {
      const setups = res.filter(setup => setup.guitar_id === this.props.guitarId)
      let newestSetup = setups[0]
      this.setState({setups: setups, newestSetup: newestSetup})
    })
  }

  componentDidMount() {
    this.getSetups()
  }

  render() {
    // let setups = this.state.setups.filter(setup => setup.guitar_id === this.props.guitarId)
    // let newestSetup = setups[0]

    const userHasSetups = this.state.setups.length === 0
      ? false
      : true

    return (<div>
      <CreateSetup guitarId={this.props.guitarId} getSetups={this.getSetups}/>

      <button onClick={this.toggleSetupsView}>{
          this.state.isVisible
            ? 'hide history'
            : 'See all setups'
        }</button>

      <div>{
          this.state.newestSetup === undefined
            ? ''
            : <div>
                <p>string brand: {this.state.newestSetup.string_brand}</p>
                <p>gauge: {this.state.newestSetup.string_gauge}</p>
                <p>string change date {this.state.newestSetup.date_strings_changed}</p>
                <p>date of setup {this.state.newestSetup.date_of_setup}</p>
                <p>setup notes{this.state.newestSetup.setup_notes}</p>
              </div>
        }</div>
      {
        userHasSetups
          ? this.state.setups.map(setup => <div key={setup.id} className={this.state.isVisible
              ? 'visible'
              : 'invisible'}>
            {/* <p className="setup-id">Id: {setup.id}</p> */}
            {/* <p className="guitar-id">Guitar_id: {setup.guitar_id}</p> */}
            <p className="string-gauge">String gauge: {setup.string_gauge}</p>
            <p className="string-brand">String brand: {setup.string_brand}</p>
            <p className="date-strings-changed">Date strings changed: {setup.date_strings_changed}</p>
            <p className="date-of-setup">Date of setup: {setup.date_of_setup}</p>
            <p className="setup-notes">Setup notes: {setup.setup_notes}</p>
            <h4 className="created-at">created at: {setup.created_at}</h4>

          </div>)

          : <div>No setups on this guitar</div>
      }

      </div>)
  }
}

export default Setups;
