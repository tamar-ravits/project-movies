import '../App.css';
import React from 'react'
import { Modal } from 'react-bootstrap';

function ViewModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>

                <Modal.Title id="contained-modal-title-vcenter">
                    <p className='font-title'>{props.detailsMovie.title}</p>

                </Modal.Title><span className='pointer' onClick={props.onHide}>x</span>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-row'>
                    <div style={{ width: '60%' }}>
                        <span className='d-flex flex-row'>
                            <p className='font'>Plot: </p>
                            <p className='font'>{props.detailsMovie.Plot}</p>
                        </span>
                        <span className='d-flex flex-row'>
                            <p className='font'>Actors: </p>
                            <p className='font'>{props.detailsMovie.Actors}</p>
                        </span>
                        <span className='d-flex flex-row'>
                            <p className='font'>Director: </p>
                            <p className='font'>{props.detailsMovie.Director}</p>
                        </span>
                        <span className='d-flex flex-row'>
                            <p className='font'>Year: </p>
                            <p className='font'>{props.detailsMovie.Year}</p>
                        </span>
                    </div>
                    <div className='d-flex align-items-center justify-content-end' style={{ width: '40%' }}>
                        <img className='img-modal' src={props.detailsMovie.Poster} alt=""
                        ></img>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ViewModal;