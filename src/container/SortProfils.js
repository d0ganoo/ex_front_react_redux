import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filtredByLastname } from '../actions'

export class SortProfils extends Component {
  render() { 
    const {profils} = this.props;
    return (
      <thead>
        <tr>
          <th>Pictures</th>
          <th onClick={() => filtredByLastname(profils, "lastname")}>LastName</th>
          <th>Firstname</th>
          <th>Balance</th>
        </tr>
      </thead>
    )
  }
}

const mapStateToProps = (state) => ({profils: state.profils})

const mapDispatchToProps = (dispatch) =>{
  dispatch(filtredByLastname())
}

export default connect(mapStateToProps, mapDispatchToProps)(SortProfils)
