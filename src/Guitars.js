import CreateGuitar from './CreateGuitar'
import UpdateGuitar from './UpdateGuitar'
import DeleteGuitar from './DeleteGuitar'
import React, {Component} from 'react';
import Setups from './Setups'
import './Guitars.css'
import {getGuitarsCall} from './api.js'

class Guitars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guitars: []
    }

    this.getGuitars = this.getGuitars.bind(this)
  }

    getGuitars () {
      // API call from api.js
      getGuitarsCall()
      .then(res => {
        this.setState({guitars: res})
      })
      // TODO: write catch statement
    }

  componentDidMount() {
    this.getGuitars()
  }


  render() {
    const userHasGuitars = this.state.guitars.length === undefined
      ? false
      : true

    return (<div>
      {/* TODO: move out of here and into App.js? */}
      <CreateGuitar getGuitarsAction={this.getGuitars} />

      <div className="container">
        <div className="columns">
          {
            userHasGuitars
              ? this.state.guitars.map(guitar => <div className="column is-one-quarter" key={guitar.id}>
                <div className="card">
                  <div className="card-content">
                    {/* <p className="title">ID: {guitar.id}</p> */}
                    <p className="title">{guitar.model}</p>
                    <p className="subtitle is-3">{guitar.make}</p>
                    <p className="year">{guitar.year}</p>
                    <p className="price">${guitar.price}</p>

                    <UpdateGuitar guitar={guitar} getGuitarsAction={this.getGuitars} />
                    <DeleteGuitar id={guitar.id} getGuitarsAction={this.getGuitars} />
                    <div className="content">
                      <Setups guitarId={guitar.id} />
                    </div>
                  </div>
                </div>
              </div>)
              :
              <div className="column">Create a guitar with the form!</div>
          }
          </div>
      </div>
    </div>);
  }
}

export default Guitars;
