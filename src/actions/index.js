export const GET_PROFILS = 'GET_PROFILS';
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