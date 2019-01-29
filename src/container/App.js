import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfils } from '../actions'
import { DisplayProfils } from '../components/DisplayProfils.js'
import SortProfils from './SortProfils'
import FiltredProfils from './FiltredProfils'
import "../css/style.css"

class App extends Component {
  render() {
    const {profils} = this.props;
    return (
      <div>
        <h1>Listes des profils</h1>
        <FiltredProfils/>
        <table>
          <SortProfils/>
          <DisplayProfils profils={profils}/>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({profils: state.profils})

const mapDispatchToProps = (dispatch) => (
     dispatch(fetchProfils())
)

export default connect(mapStateToProps,mapDispatchToProps)(App)