import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FiltredProfils extends Component {

  render() {
    return (
      <div>
        <label>Recherche: </label>
        <input type="text"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({profils: state.profils})


export default connect(mapStateToProps)(FiltredProfils)
