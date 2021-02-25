import React from 'react';
import './modal.css';

const Modal:React.FC =() => (
  <div className="modal-wrapper">
    <div className="modal">
      <div className="modal-content">
        <img src="./cancel.png" alt="cancel button" className="modal-content__cancel-button" />
        <h3>Choose number of cards</h3>
        <select name="cardsNumber" id="cardsNumber">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <button type="submit" className="modal-content__button">OK</button>
      </div>
    </div>
  </div>
);
export default Modal;
