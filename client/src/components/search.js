import '../App.css';
import React, { useCallback, useEffect, useState } from 'react'
import { MDBCol, MDBIcon } from 'mdbreact';
import * as moviesAction from '../redux/actions/moviesAction';
import { connect } from 'react-redux'

function Search({ dispatch }) {
    const [movieSearch, setMovieSearch] = useState('');

    const getSearchMovies = async (value) => {
        const response = await fetch(`/movies/searchMovie/${value}`);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    useEffect(() => {
        if (movieSearch !== '') {
            getSearchMovies(movieSearch).then(res => {
                if (!res.Search) {
                    dispatch(moviesAction.setSearchMoviesList(res.Error))
                } else {
                    dispatch(moviesAction.setSearchMoviesList(res.Search))
                }
            })
        }
        else {
            dispatch(moviesAction.setSearchMoviesList(undefined))
        }
    }, [movieSearch])

    const updateMovieSearch = (e) => {
        setMovieSearch(e.target.value)
    }

    const debounceFunction = (updateMovieSearch, delay) => {
        let debounceTimer;
        return (...args) => {
            if (debounceTimer)
                clearTimeout(debounceTimer)
            debounceTimer = setTimeout(() => {
                updateMovieSearch(...args)
            }, delay)
        }
    }

    const searchMovie = useCallback(debounceFunction(updateMovieSearch, 500), [])

    return (
        <MDBCol md="12">
            <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                    <span className="input-group-text purple lighten-3" id="basic-text1">
                        <MDBIcon className="text-white" icon="search" />
                    </span>
                </div>
                <input
                    className="form-control my-0 py-1"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    defaultValue={movieSearch}
                    onChange={(e) => searchMovie(e)}
                />
            </div>
        </MDBCol>
    );
}
const mapStateToProps = (state) => {
    const { dispatch } = state;
    return {
        dispatch
    }
}
export default connect(mapStateToProps)(Search);
