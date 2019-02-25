import { GET_PROFILS, GET_BY_NAME } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILS:
    console.log("GET_PROFILS");
       return { profils: action.profils };
    case GET_BY_NAME:
    console.log("GET_BY_LASTNAME");
        return { 
                profilsSorted: action.profilsSorted,
                orderBy: action.orderBy
             };
   // case GET_BY_FIRSTNAME:
   //  console.log("GET_BY_FIRSTNAME");
   //      return { 
   //              profilsFiltered: action.profilsFiltered
   //           };
    default:
       return state;
  }
};

export default reducer;