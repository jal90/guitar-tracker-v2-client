import React, {Component} from 'react';

class Setups extends Component {

  render() {
    const userHasSetups = this.props.setups.length === undefined
      ? false
      : true
    let setups

    // if (userHasSetups) {
    //   setups = this.props.setups
    //   if (setups.guitar_id === this.props.guitar.id) {
    //
    //   setups.map(setup => {
    //
    //       <div key={setup.id}>
    //         <p className="setup-id">Id: {setup.id}</p>
    //         <p className="guitar-id">Guitar_id: {setup.guitar_id}</p>
    //         <p className="string-gauge">String gauge: {setup.string_gauge}</p>
    //         <p className="string-brand">String brand: {setup.string_brand}</p>
    //         <p className="date-strings-changed">Date strings changed: {setup.date_strings_changed}</p>
    //         <p className="date-of-setup">Date of setup: {setup.date_of_setup}</p>
    //         <p className="setup-notes">Setup notes: {setup.setup_notes}</p>
    //       </div>
    //         })
    //     }
    //
    // }

    return <div>{setups}</div>
  }
}

export default Setups;
