import React, {useState, useRef} from 'react';
import CSS from 'csstype';
import Modal from './Settings/Modal';
import SettingsModal from './Settings/SettingsModal';
import Game from './Game/Game';
import './Settings/header.css';
import './Settings/modal.css';

const Content:React.FC = () => {
  const [isVisible, setIsVisible] = useState<CSS.Properties>({visibility: 'hidden'});
  const [settingsVisible, setSettingsVisible] = useState<CSS.Properties>({visibility: 'hidden'});
  const [soundOn, setSoundOn] = useState(true);
  const selectRef = useRef<HTMLSelectElement>(null!);
  const selectSoundRef = useRef<HTMLSelectElement>(null!);
  let numOfImages:number=0;
  if (selectRef.current) {
    numOfImages=Number(selectRef.current.value);
  }

  const handleClickOnOpen = ():void => {
    setIsVisible({visibility: 'visible'});
  };
  const handleClickOnCancel =():void => {
    setIsVisible({visibility: 'hidden'});
  };
  const handleClickOnOK=():void => {
    handleClickOnCancel();
  };
  const handleSettingsOnOpen=():void => {
    setSettingsVisible({visibility: 'visible'});
  };
  const handleSettingsOnCancel=():void => {
    setSettingsVisible({visibility: 'hidden'});
  };
  const handleSettingsOnOK=():void => {
    // console.log(selectImageRef.current.value);
    if (selectSoundRef.current) {
      if (selectSoundRef.current.value==='on') {
        setSoundOn(true);
      } else {
        setSoundOn(false);
      }
    }
    handleSettingsOnCancel();
  };
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  return (
    <>
      <div className="overlay" style={isVisible} />
      <div className="overlay" style={settingsVisible} />
      <Modal
        isVisible={isVisible}
        handleClickOnCancel={handleClickOnCancel}
        selectRef={selectRef}
        handleClickOnOK={handleClickOnOK}
      />
      <SettingsModal
        settingsVisible={settingsVisible}
        handleSettingsOnCancel={handleSettingsOnCancel}
        selectSoundRef={selectSoundRef}
        handleSettingsOnOK={handleSettingsOnOK}
      />
      <header className="header">
        <div className="header__logo">
          <h1 style={{fontFamily: 'RocknRoll One, sans-serif'}}> Memory Game</h1>
        </div>
        <div className="header__content">
          <ul className="content__list">
            <li onClick={() => handleClickOnOpen()}>New Game
            </li>
            <li>How it works</li>
            {/* make a simple game in 31 steps */}
            <li>Best results</li>
            {/* a table with 10 best games from local storage or backend */}
            <li onClick={() => handleSettingsOnOpen()}>Settings</li>
            {/* sound on off, choose how card looks like, theme dark or light */}
          </ul>
        </div>
      </header>
      <Game numOfImages={numOfImages} soundOn={soundOn} />
    </>
  );
};
export default Content;
