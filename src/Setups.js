import React, {Component} from 'react';
import {getSetupsCall, createSetupCall} from './api.js'

class Setups extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setups: []
    }

    this.getSetups = this.getSetups.bind(this)
    // this.createSetupAction = this.createSetupAction.bind(this)
    this.toggleSetupsView = this.toggleSetupsView.bind(this)
  }

  toggleSetupsView() {
    this.setState({isVisible: !this.state.isVisible})
  }

  // TODO: a new setupCreateCall needs to be called every time a user updates their guitar (and just after creation as well). To the user experience, creating the guitars first setup should seem
  // completely streamlined with creating the guitar itself.

  getSetups() {
    getSetupsCall().then((res) => {
      this.setState({setups: res})
    })
  }

  componentDidMount() {
    this.getSetups()
  }

  //
  // createSetupAction () {
  //   const data = {setup: {
  //     guitar_id: 23,
  //     string_gauge: 10,
  //     string_brand: 'elixer',
  //     date_strings_changed: 12-12-1990,
  //     setup_notes: 'this is a hardcoded setup'
  //     }
  //   }
  //   createSetupCall(data)
  //     .then((res) => this.setState({setups: res.string_brand}))
  // .then((res) => console.log(res))
  // }

  render() {
    let setups = this.state.setups.filter(setup => setup.guitar_id === this.props.guitarId)

      const newestSetup = setups[0]


    const userHasSetups = setups.length === 0
      ? false
      : true

    return (<div>
      <button onClick={this.createSetupAction}>Create setup for guitar</button>

      <button onClick={this.toggleSetupsView}>{this.state.isVisible ? 'hide history' : 'See all setups'}</button>

      {/* This is one way to show the newest setup... */}
      <div>{newestSetup === undefined ? '' :
      <div>  <p>{newestSetup.string_brand}</p>
        <p>{newestSetup.string_gauge}</p> </div>
      }</div>
      {userHasSetups
        // TODO: Show only most recent setup on home page (use created_at/ updated_at properties to do this). Only Map over all guitar's setups when user wants to see a history
        ?


        setups.map(setup =>
            <div key={setup.id} className={this.state.isVisible ? 'visible' : 'invisible'}>
              {/* <p className="setup-id">Id: {setup.id}</p> */}
              {/* <p className="guitar-id">Guitar_id: {setup.guitar_id}</p> */}
              <p className="string-gauge">String gauge: {setup.string_gauge}</p>
              <p className="string-brand">String brand: {setup.string_brand}</p>
              <p className="date-strings-changed">Date strings changed: {setup.date_strings_changed}</p>
              <p className="date-of-setup">Date of setup: {setup.date_of_setup}</p>
              <p className="setup-notes">Setup notes: {setup.setup_notes}</p>
              <h4 className="created-at">created at: {setup.created_at}</h4>

            </div>
        )

        :
        <div>No setups on this guitar</div>
      }

    </div>)
  }
}

export default Setups;
