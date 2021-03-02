import React from 'react';
import './modal.css';
import languageConst from '../../assets/languageConst';

type Props={
  settingsVisible:any,
  handleSettingsOnCancel:()=>void,
  selectSoundRef:any,
  selectCardFaceRef:any,
  selectModeRef:any,
  selectLanguageRef:any,
  handleSettingsOnOK:()=>void,
  style:any,
  styleSelect:any,
  language:string
};
const SettingsModal:React.FC<Props> = ({
  settingsVisible, handleSettingsOnCancel,
  selectSoundRef, selectCardFaceRef, selectModeRef, selectLanguageRef,
  handleSettingsOnOK, style, styleSelect, language,
}:Props) => (
/* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  <div className="modal-wrapper" style={settingsVisible}>
    <div className="modal" style={style}>
      <div className="modal-content">
        <img
          src="./cancel.png"
          alt="cancel button"
          className="modal-content__cancel-button"
          onClick={() => handleSettingsOnCancel()}
        />
        <div className="modal-content__sound">
          <h3>{languageConst[language].sound}</h3>
          <select
            name="sound"
            id="sound"
            ref={selectSoundRef}
            style={styleSelect}
          >
            <option value="on">{languageConst[language].on}</option>
            <option value="off">{languageConst[language].off}</option>
          </select>
        </div>
        <div className="modal-content__cardFace">
          <h3>{languageConst[language].cardFace}</h3>
          <select
            name="cardFace"
            id="cardFace"
            ref={selectCardFaceRef}
            style={styleSelect}
          >
            <option value="default">{languageConst[language].default}</option>
            <option value="paysage">{languageConst[language].paysage}</option>
            <option value="city">{languageConst[language].city}</option>
          </select>
        </div>
        <div className="modal-content__mode">
          <h3>{languageConst[language].language}</h3>
          <select
            name="language"
            id="language"
            ref={selectLanguageRef}
            style={styleSelect}
          >
            <option value="english">{languageConst[language].en}</option>
            <option value="russian">{languageConst[language].ru}</option>
          </select>
        </div>
        <div className="modal-content__mode">
          <h3>{languageConst[language].mode}</h3>
          <select
            name="theme"
            id="theme"
            ref={selectModeRef}
            style={styleSelect}
          >
            <option value="light">{languageConst[language].light}</option>
            <option value="dark">{languageConst[language].dark}</option>
          </select>
        </div>
        <button
          type="submit"
          className="modal-content__button"
          onClick={() => handleSettingsOnOK()}
        >OK
        </button>
      </div>
    </div>
  </div>
);
export default SettingsModal;
