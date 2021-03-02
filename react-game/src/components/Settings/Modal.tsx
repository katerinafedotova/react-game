import React from 'react';
import languageConst from '../../assets/languageConst';

type Props={
  isVisible:any,
  handleClickOnCancel:()=>void,
  selectRef:any,
  handleClickOnOK:any,
  style:any,
  styleSelect:any,
  language:string,
};
const Modal:React.FC<Props> = ({
  isVisible, handleClickOnCancel, selectRef,
  handleClickOnOK, style, styleSelect, language,
}:Props) => (
/* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  <div className="modal-wrapper" style={isVisible}>
    <div className="modal" style={style}>
      <div className="modal-content">
        <img
          src="./cancel.png"
          alt="cancel button"
          className="modal-content__cancel-button"
          onClick={() => handleClickOnCancel()}
        />
        <h3>{languageConst[language].chooseNumOfCardsModal}</h3>
        <select
          name="cardsNumber"
          id="cardsNumber"
          ref={selectRef}
          style={styleSelect}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <button
          type="submit"
          className="modal-content__button"
          onClick={() => handleClickOnOK()}
        >OK
        </button>
      </div>
    </div>
  </div>
);
export default Modal;
