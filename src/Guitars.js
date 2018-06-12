import CreateGuitar from './CreateGuitar'
import UpdateGuitar from './UpdateGuitar'
import DeleteGuitar from './DeleteGuitar'
import React, {Component} from 'react';
import $ from 'jquery';
import './Guitars.css'
const store = require('./store.js')

class Guitars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guitars: []
    }

    this.getGuitars = this.getGuitars.bind(this)
  }

  getGuitars() {
    $.ajax({
      url: 'http://localhost:4741/guitars',
      method: 'GET',
      headers: {
        contentType: 'application/json',
        Authorization: 'Token token=' + store.token
      }
    })
      .then(res => {
        const guitars = res
        this.setState({guitars})
      })
   }

  render() {
    const userHasGuitars = this.state.guitars.length === undefined ? false : true
    let catalog

    if (userHasGuitars) {
      catalog =
      this.state.guitars.map(guitar => <div className="column is-one-quarter" key={guitar.id}>
        <div className="card">
          <div className="card-content">
            <p className="title">{guitar.make}</p>
            <p className="model">{guitar.model}</p>
            <p className="year">{guitar.year}</p>
            <p className="price">{guitar.price}</p>

            <UpdateGuitar id={guitar.id} getGuitars={this.getGuitars}/>
            <DeleteGuitar id={guitar.id} getGuitars={this.getGuitars}/>
          </div>
        </div>
      </div>)
    } else {
      catalog = <div className="column">Create a guitar with the form that doesn't exist yet!</div>
    }


    return (<div>
      <button onClick={this.getGuitars}>See guitars</button>
      <CreateGuitar getGuitars={this.getGuitars}/>

      <div className="container">
      <div className="columns">
        {catalog}
      </div>
    </div>
    </div>);
  }
}

export default Guitars;
