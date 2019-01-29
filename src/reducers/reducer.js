import { GET_PROFILS, GET_BY_LASTNAME } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILS:
       return { profils: action.profils };
    case GET_BY_LASTNAME:
        return { profils: action.profils };
    default:
       return state;
  }
};

export default reducer;