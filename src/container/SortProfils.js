import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SortedByName } from '../actions'
import {bindActionCreators} from 'redux'
import { DisplayProfils } from '../components/DisplayProfils.js'

export class SortProfils extends Component {
  render() { 
    const {profils, SortedByName, profilsSorted, orderBy}  = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Pictures</th>
            <th onClick={profilsSorted ? () => SortedByName(profilsSorted, "lastname", orderBy) : () => SortedByName(profils, "lastname", orderBy)}>LastName</th>
            <th onClick={profilsSorted ? () => SortedByName(profilsSorted, "firstname", orderBy) : () => SortedByName(profils, "firstname", orderBy)}>Firstname</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <DisplayProfils profils={profilsSorted !== undefined ? profilsSorted : profils}/>
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({profils: state.profils, profilsSorted:state.profilsSorted, orderBy:state.orderBy})

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({SortedByName:SortedByName}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SortProfils)

// onClick={() => filtredByBalance(profils, "balance")}