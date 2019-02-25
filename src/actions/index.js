export const GET_PROFILS = 'GET_PROFILS';
export const GET_BY_NAME = 'GET_BY_NAME';
// export const GET_BY_FIRSTNAME = 'GET_BY_FIRSTNAME';
const PROFILS_URL= "https://demo0050088.mockable.io/simple/profils";

export const getProfils = res => ({
    type: GET_PROFILS,
    profils: res
    });

export const getProfilsSorted = (profilsSorted, orderBy) => ({
    type:GET_BY_NAME,
    profilsSorted:profilsSorted,
    orderBy:orderBy
});

export function fetchProfils(){
    console.log("Action : fetchProfils");
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
    return isNaN(parseFloat(profils[0][name])) === false ? 
        profils.sort((a, b) => a[name] - b[name]) : 
        profils.sort((a, b) => a[name].localeCompare(b[name]));
}

export function sortDesc(profils, name){
    return isNaN(parseFloat(profils[0][name])) === false ? 
        profils.sort((a, b) => b[name] - a[name]) : 
        profils.sort((a, b) => b[name].localeCompare(a[name]));
}

export function SortedByName(profils, name, orderBy){
    return function (dispatch) {
        let profilsSorted;
        orderBy = orderBy === 0 ? 1 : 0;
        if (profils){
            if(orderBy!==0){
                profilsSorted = sortAsc(profils, name);
            }
            else{
                profilsSorted = sortDesc(profils, name);
            }
        }

            dispatch(getProfilsSorted(profilsSorted,orderBy));
    }
}