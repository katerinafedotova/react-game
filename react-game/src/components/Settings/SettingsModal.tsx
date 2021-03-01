import React from 'react';

type Props={
  settingsVisible:any,
  handleSettingsOnCancel:()=>void,
  selectSoundRef:any,
  handleSettingsOnOK:()=>void,
};
const SettingsModal:React.FC<Props> = ({
  settingsVisible, handleSettingsOnCancel, selectSoundRef, handleSettingsOnOK,
}:Props) => (
/* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  <div className="modal-wrapper" style={settingsVisible}>
    <div className="modal">
      <div className="modal-content">
        <img
          src="./cancel.png"
          alt="cancel button"
          className="modal-content__cancel-button"
          onClick={() => handleSettingsOnCancel()}
        />
        <h3>Sound</h3>
        <select
          name="cardsNumber"
          id="cardsNumber"
          ref={selectSoundRef}
        >
          <option value="on">on</option>
          <option value="off">off</option>
        </select>
        <h3>Card face</h3>
        <select
          name="cardsNumber"
          id="cardsNumber"
          // ref={selectRef}
        >
          {/* eslint-disable jsx-a11y/control-has-associated-label */}
          <option value="image 1" style={{backgroundImage: 'url(./card-back.png)' }} />
          <option value="off">off</option>
        </select>
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
