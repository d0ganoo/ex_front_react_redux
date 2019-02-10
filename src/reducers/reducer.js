import { GET_PROFILS, GET_BY_LASTNAME } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILS:
    console.log("GET_PROFILS");
       return { profils: action.profils };
    case GET_BY_LASTNAME:
    console.log("GET_BY_LASTNAME");
        return { profilsFiltered: action.profilsFiltered };
    default:
       return state;
  }
};

export default reducer;