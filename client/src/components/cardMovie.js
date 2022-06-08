import '../App.css';
import React, { useState } from 'react'
import ViewModal from './viewModal';

function CardMovie({ detailsMovie }) {
    const [saveDetailsMovie, setSaveDetailsMovie] = useState('')
    const [showModal, setShowModal] = useState(false)

    const getDetailsMovie = async (title) => {
        const response = await fetch(`/movies/detailsMovie/${title}`);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    const mappingDetailsMovie = (detailsMovie) => {
        const mappingObject = {
            title: detailsMovie.Title,
            Actors: detailsMovie.Actors,
            Plot: detailsMovie.Plot,
            Director: detailsMovie.Director,
            Year: detailsMovie.Year,
            Poster: detailsMovie.Poster
        }
        setSaveDetailsMovie(mappingObject);
        setShowModal(true);
    }

    const detailsSpecificMovie = (title) => {
        getDetailsMovie(title).then(res =>
            mappingDetailsMovie(res)
        ).catch(err => console.log(err))
    }
    const renderModal = () => {
        return <ViewModal
            detailsMovie={saveDetailsMovie}
            show={showModal}
            onHide={() => setShowModal(false)}
        />
    }

    return (
        <>
            <div className='col-3 d-flex align-items-center justify-content-center'>
                <img className='img-movie' src={detailsMovie.Poster} alt="" data-toggle="modal" data-target="#exampleModalCenter"
                    onClick={() => detailsSpecificMovie(detailsMovie.imdbID)}></img>
            </div>
            {renderModal()}
        </>
    );
}

export default CardMovie;
