import { createActionTypes, createActionCreator } from '../../utils/util';

export const moviesAction = createActionTypes([
    'SET_BASIC_MOVIES_LIST',
    'SET_SEARCH_MOVIES_LIST'
]);

export const setBasicMoviesList = createActionCreator(moviesAction.SET_BASIC_MOVIES_LIST);
export const setSearchMoviesList = createActionCreator(moviesAction.SET_SEARCH_MOVIES_LIST);

// export const getLocationIdByName = function (apiKey, city) {
//     return (dispatch) => {
//         fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}`)
//             .then((res) => {
//                 if (res.ok) {
//                     return res.json()
//                 }
//                 dispatch(openErrorModal({ isOpen: true, title: 'failed To retrieve data...' }))
//             }).catch((err) => {
//                 dispatch(openErrorModal({ isOpen: true, title: 'error with apiKey , pls replace apiKey...', disabled: true }));
//             })
//             .then((res) => {
//                 const locationKey = res[0].Key + '_PC';
//                 dispatch(getCurrentWeather(locationKey, city, apiKey))
//             }
//             );
//     }
// }
