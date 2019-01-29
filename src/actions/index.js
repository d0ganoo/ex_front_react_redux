export const GET_PROFILS = 'GET_PROFILS';
export const GET_BY_LASTNAME = 'GET_BY_LASTNAME';
const PROFILS_URL= "https://demo0050088.mockable.io/simple/profils";

export const getProfils = res => ({
    type: GET_PROFILS,
    profils: res,
    });

export function fetchProfils(){
    return function (dispatch) {
        return fetch(PROFILS_URL)
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error),
        )
        .then((res) => {
            dispatch(getProfils(res));
        },
       );
      };
}

export function sortAsc(profils, name){
    console.log('tatat')
    return isNaN(parseFloat(profils[0][name])) === false ? 
        profils.sort((a, b) => a[name] - b[name]) : 
        profils.sort((a, b) => a[name].localeCompare(b[name]));
}

export function filtredByLastname(profils, name){
    if (profils){
        console.log(profils);
        console.log(name);
    
        profils = profils && sortAsc(profils, name);
        console.log(profils)
        
    }
    return {
        type:GET_BY_LASTNAME,
        profils:profils
    }
}