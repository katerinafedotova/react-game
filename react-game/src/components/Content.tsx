import React, {useState, useRef} from 'react';
import CSS from 'csstype';
import Modal from './Settings/Modal';
// import SettingsModal from './Settings/SettingsModal';
import Game from './Game/Game';
import './Settings/header.css';
import './Settings/modal.css';

const Content:React.FC = () => {
  // const [pairs, setPairs] = useState(0);
  const [isVisible, setIsVisible] = useState<CSS.Properties>({visibility: 'hidden'});
  const [settingsVisible, setSettingsVisible] = useState<CSS.Properties>({visibility: 'hidden'});
  const selectRef = useRef<HTMLSelectElement>(null!);
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
    console.log(selectRef.current.value);
    handleClickOnCancel();
  };
  const handleSettingsOnOpen=():void => {
    setSettingsVisible({visibility: 'visible'});
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
      {/* <SettingsModal
        settingsVisible={settingsVisible}
        handleClickOnCancel={handleClickOnCancel}
        selectRef={selectRef}
        handleClickOnOK={handleClickOnOK}
      /> */}
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
      <Game numOfImages={numOfImages} />
    </>
  );
};
export default Content;
