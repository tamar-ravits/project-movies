import { moviesAction } from '../actions/moviesAction'

export default function moviesReducer(state = {}, action) {
    const { type, payload } = action || { payload: {} };
    let nextState;
    switch (type) {
        case moviesAction.SET_BASIC_MOVIES_LIST:
            nextState = { ...state, basicMoviesList: payload }
            break;
        case moviesAction.SET_SEARCH_MOVIES_LIST:
            nextState = { ...state, searchMoviesResults: payload }
            break;
        default:
            nextState = state;
            break;
    }
    return nextState;
}
