import React from 'react';
import languageConst from '../../assets/languageConst';
import './modal.css';

type Props={
  settingsVisible:any,
  handleSettingsOnCancel:()=>void,
  setVolume:(a:number)=>void,
  volume:number,
  selectSoundRef:React.MutableRefObject<HTMLSelectElement>,
  selectMusicRef:React.MutableRefObject<HTMLSelectElement>,
  selectCardFaceRef:React.MutableRefObject<HTMLSelectElement>,
  selectModeRef:React.MutableRefObject<HTMLSelectElement>,
  selectLanguageRef:React.MutableRefObject<HTMLSelectElement>,
  handleSettingsOnOK:()=>void,
  style:any,
  styleSelect:any,
  language:string
};
const SettingsModal:React.FC<Props> = ({
  settingsVisible, handleSettingsOnCancel,
  selectSoundRef, setVolume, volume, selectMusicRef, selectCardFaceRef,
  selectModeRef, selectLanguageRef, handleSettingsOnOK, style, styleSelect, language,
}:Props) => (
  <div className="modal-wrapper" style={settingsVisible}>
    <div className="modal" style={style}>
      <div className="modal-content">
        <button
          type="button"
          aria-label="cancel"
          className="modal-content__cancel-button"
          style={{backgroundImage: 'url(./cancel.png)'}}
          onClick={handleSettingsOnCancel}
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
        <div className="modal-content__sound">
          <h3>{languageConst[language].music}</h3>
          <select
            name="sound"
            id="sound"
            ref={selectMusicRef}
            style={styleSelect}
          >
            <option value="on">{languageConst[language].on}</option>
            <option value="off">{languageConst[language].off}</option>
          </select>
        </div>
        <div className="modal-content__volume">
          <h3>{languageConst[language].volume}</h3>
          <span><input
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            type="range"
            step=".05"
            min="0"
            max="1"
            value={volume}
          />
          </span>
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
        <div className="modal-content__language">
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
        <div className="modal-content__hotkeys">
          <h3>{languageConst[language].hotkeys}</h3>
          <p><strong>1</strong>: {languageConst[language].startNewGame}.</p>
          <p><strong>3</strong>: {languageConst[language].openSettings}.</p>
          <p><strong>f</strong>: {languageConst[language].fullscreen.toLowerCase()}.</p>
          <p><strong>s</strong>: {languageConst[language].toggleSound}.</p>
          <p><strong>r</strong>: {languageConst[language].openBestResults}.</p>
        </div>
        <button
          type="submit"
          className="modal-content__button"
          onClick={handleSettingsOnOK}
        >OK
        </button>
      </div>
    </div>
  </div>
);
export default SettingsModal;
