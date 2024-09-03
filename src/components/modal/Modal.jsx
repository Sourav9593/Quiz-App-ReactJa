// src/Modal.js
import React from 'react';
import './modal.css';
import {Link} from 'react-router-dom'

const Modal = ({ show, score, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Your Score</h2>
        <p>{score}</p>
        <Link className='nav-link' to={'/'}>Go to Home page</Link>
      </div>
    </div>
  );
};

export default Modal;
