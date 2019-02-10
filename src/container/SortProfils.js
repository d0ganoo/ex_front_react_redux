import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filtredByLastname } from '../actions'
import {bindActionCreators} from 'redux'

export class SortProfils extends Component {
  render() { 
    const {profils, filtredByLastname} = this.props;
    console.log("sort = "+ profils);
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
  return bindActionCreators({filtredByLastname:filtredByLastname}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SortProfils)
