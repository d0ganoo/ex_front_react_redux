import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfils } from '../actions'
import { DisplayProfils } from '../components/DisplayProfils.js'
import SortProfils from './SortProfils'
import FiltredProfils from './FiltredProfils'
import "../css/style.css"

class App extends Component {
  render() {
    const {profils, profilsFiltered, profilsNew} = this.props;
    console.log(profils);
    console.log(profilsFiltered);
    return (
      <div>
        <h1>Listes des profils</h1>
        <FiltredProfils/>
        <table>
          <SortProfils profils={profilsFiltered !== undefined ? profilsNew : profils}/>
          <DisplayProfils profils={profilsFiltered !== undefined ? profilsFiltered : profils}/>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({profils: state.profils, profilsFiltered:state.profilsFiltered, profilsNew:state.profilsNew })

function mapDispatchToProps(dispatch){
     dispatch(fetchProfils())
}

export default connect(mapStateToProps,mapDispatchToProps)(App)