import CreateGuitar from './CreateGuitar'
import UpdateGuitar from './UpdateGuitar'
import DeleteGuitar from './DeleteGuitar'
import React, {Component} from 'react';
import Setups from './Setups'
import './Guitars.css'
import { getGuitarsCall } from './api.js'

class Guitars extends Component {
  constructor(props) {
    super(props)
    this.state = {guitars: []}
  }

  componentDidMount () {
    // API call from api.js
    getGuitarsCall()
      .then(res => {
        this.setState({guitars: res})
      })
   }

  render() {
    const userHasGuitars = this.state.guitars.length === undefined ? false : true
    let catalog

    { userHasGuitars ?
      catalog =
      this.state.guitars.map(guitar => <div className="column is-one-quarter" key={guitar.id}>
        <div className="card">
          <div className="card-content">
            <p className="title">{guitar.make}</p>
            <p className="model">{guitar.model}</p>
            <p className="year">{guitar.year}</p>
            <p className="price">{guitar.price}</p>

            {/* TODO: pass appropriate function to components */}
            <UpdateGuitar guitar={guitar} getGuitars={this.props.getGuitars}/>
            <DeleteGuitar id={guitar.id} getGuitars={this.props.getGuitars}/>
            {/* <Setups guitar={guitar} setups={this.props.setups} /> */}
          </div>
        </div>
      </div>)
      :
      catalog = <div className="column">Create a guitar with the form that doesn't exist yet!</div>
    }


    return (<div>
      {/* TODO: pass appropriate funciton to CreateGuitar */}
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
