import '../App.css';
import React, { useEffect, useState } from 'react'
import * as moviesAction from '../redux/actions/moviesAction';
import { connect } from 'react-redux'
import CardMovie from './cardMovie';

function Content({ searchMoviesResults, basicMoviesList, dispatch }) {
  const [flag, setFlag] = useState(false)

  const getMovies = async () => {
    const response = await fetch(`/movies/getAllMovies`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  const renderCardMovie = (listMovies) => {
   return listMovies && listMovies.map(movie => {
      return (<CardMovie detailsMovie={movie} />)
    })
  }

  useEffect(() => {
    getMovies()
      .then(res => {
        dispatch(moviesAction.setBasicMoviesList(res.Search))
        setFlag(true)
      })
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    if (!searchMoviesResults) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  }, [searchMoviesResults])

  return (
    <div className='container-fluid' >
      <div className='row row-wrap-movie-card'>
        {flag === true ? renderCardMovie(basicMoviesList) :
          typeof searchMoviesResults === 'string' ? searchMoviesResults :
            renderCardMovie(searchMoviesResults)
        }
      </div>
    </div >
  );
}

const mapStateToProps = (state) => {
  const { searchMoviesResults, basicMoviesList, dispatch } = state;
  return {
    searchMoviesResults,
    basicMoviesList,
    dispatch
  }
}
export default connect(mapStateToProps)(Content);

