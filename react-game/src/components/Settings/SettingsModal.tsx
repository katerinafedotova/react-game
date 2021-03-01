import React from 'react';
import './modal.css';

type Props={
  settingsVisible:any,
  handleSettingsOnCancel:()=>void,
  selectSoundRef:any,
  selectCardFaceRef:any,
  selectModeRef:any,
  handleSettingsOnOK:()=>void,
  style:any,
  styleSelect:any
};
const SettingsModal:React.FC<Props> = ({
  settingsVisible, handleSettingsOnCancel,
  selectSoundRef, selectCardFaceRef, selectModeRef,
  handleSettingsOnOK, style, styleSelect,
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
          <h3>Sound</h3>
          <select
            name="sound"
            id="sound"
            ref={selectSoundRef}
            style={styleSelect}
          >
            <option value="on">on</option>
            <option value="off">off</option>
          </select>
        </div>
        <div className="modal-content__cardFace">
          <h3>Card face</h3>
          <select
            name="cardFace"
            id="cardFace"
            ref={selectCardFaceRef}
            style={styleSelect}
          >
            <option value="default">default</option>
            <option value="paysage">paysage</option>
            <option value="city">city</option>
          </select>
        </div>
        <div className="modal-content__mode">
          <h3>Mode</h3>
          <select
            name="theme"
            id="theme"
            ref={selectModeRef}
            style={styleSelect}
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
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
