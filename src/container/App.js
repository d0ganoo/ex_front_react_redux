import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfils } from '../actions'
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
        <SortProfils profils={profils}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({profils: state.profils })

function mapDispatchToProps(dispatch){
     dispatch(fetchProfils())
}

export default connect(mapStateToProps,mapDispatchToProps)(App)