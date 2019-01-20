import { GET_PROFILS } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILS:
       return { profils: action.profils };
    default:
       return state;
  }
};

export default reducer;