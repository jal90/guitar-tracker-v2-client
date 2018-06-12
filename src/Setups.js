import React, {Component} from 'react';

class Setups extends Component {

  render() {
    const userHasSetups = this.props.setups.length === undefined ? false : true
    let setups

    if (userHasSetups) {
    setups = this.props.setups.map(setup => <div className="column is-one-quarter" key={setup.id}>
      <p className="setup-id">{setup.id}</p>
      <p className="guitar-id">{setup.guitar_id}</p>
      <p className="string-gauge">{setup.string_gauge}</p>
      <p className="string-brand">{setup.string_brand}</p>
      <p className="date-strings-changed">{setup.date_strings_changed}</p>
      <p className="date-of-setup">{setup.date_of_setup}</p>
      <p className="setup-notes">{setup.setup_notes}</p>
    </div>)
  }

    return <div>{setups}</div>
  }
}

export default Setups;
