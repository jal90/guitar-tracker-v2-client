import CreateGuitar from './CreateGuitar'
import UpdateGuitar from './UpdateGuitar'
import DeleteGuitar from './DeleteGuitar'
import React, {Component} from 'react';
import Works from './Works'
import './Guitars.css'

class Guitars extends Component {

  render() {
    const userHasGuitars = this.props.guitars.length === undefined ? false : true
    let catalog
    let isLoggedIn = this.props.isLoggedIn

    if (isLoggedIn) {
    if (userHasGuitars) {
      catalog =
      this.props.guitars.map(guitar => <div className="column is-one-quarter" key={guitar.id}>
        <div className="card">
          <div className="card-content">
            <p className="title">{guitar.make}</p>
            <p className="model">{guitar.model}</p>
            <p className="year">{guitar.year}</p>
            <p className="price">{guitar.price}</p>

            <UpdateGuitar guitar={guitar} getGuitars={this.props.getGuitars}/>
            <DeleteGuitar id={guitar.id} getGuitars={this.props.getGuitars}/>
            <Works guitar={guitar} setups={this.props.setups} />
          </div>
        </div>
      </div>)
    } else {
      catalog = <div className="column">Create a guitar with the form that doesn't exist yet!</div>
    }
  }


    return (<div>
      <CreateGuitar getGuitars={this.props.getGuitars}/>

      <div className="container">
      <div className="columns">
        {catalog}
      </div>
    </div>
    </div>);
  }
}

export default Guitars;
