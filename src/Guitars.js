import UpdateGuitar from './UpdateGuitar'
import React, {Component} from 'react';
import $ from 'jquery';
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
      this.state.guitars.map(guitar => <div className="column is-one-third" key={guitar.id}>
        <div className="card">
          <div className="card-content">
            <p className="title">{guitar.make}</p>
            <p className="answer">{guitar.model}</p>
            <UpdateGuitar id={guitar.id} getGuitars={this.getGuitars}/>
          </div>
        </div>
      </div>)
    } else {
      catalog = <div className="column">Create a guitar with the form that doesn't exist yet!</div>
    }


    return (<div>
      <button onClick={this.getGuitars}>See guitars</button>

      <div className="columns">
        {catalog}
      </div>
    </div>);
  }
}

export default Guitars;
