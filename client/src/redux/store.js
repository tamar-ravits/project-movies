import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './reducer/moviesReducer';
const initialState = {};
const store = createStore(moviesReducer, initialState , applyMiddleware(thunk))
export default store;