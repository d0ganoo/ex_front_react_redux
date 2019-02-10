export const GET_PROFILS = 'GET_PROFILS';
export const GET_BY_LASTNAME = 'GET_BY_LASTNAME';
const PROFILS_URL= "https://demo0050088.mockable.io/simple/profils";

export const getProfils = res => ({
    type: GET_PROFILS,
    profils: res
    });

export function fetchProfils(){
    console.log("Action : fetchProfils");
    return function (dispatch) {
        fetch(PROFILS_URL)
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error),
        )
        .then((res) => {
            console.log(res);
            dispatch(getProfils(res));
        },
       );
      };
}

export const getProfilsFiltered = (profils, profilsFiltered) => ({
    type:GET_BY_LASTNAME,
    profilsFiltered:profilsFiltered,
    profilsNew:profils
});

export function sortAsc(profils, name){
    return isNaN(parseFloat(profils[0][name])) === false ? 
        profils.sort((a, b) => a[name] - b[name]) : 
        profils.sort((a, b) => a[name].localeCompare(b[name]));
}

export function filtredByLastname(profils, name){
    console.log("Action : filtredByLastname");
    return function (dispatch) {
        let profilsFiltered = profils && sortAsc(profils, name);
        if (profils === undefined){
            console.log("JE CAPTE PLUS RIEN");
            dispatch(fetchProfils());
        }
        else{
            dispatch(getProfilsFiltered(profils, profilsFiltered));
        } 
    }
}