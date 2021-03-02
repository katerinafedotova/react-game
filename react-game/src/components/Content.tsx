import React, {useState, useRef} from 'react';
import CSS from 'csstype';
import Modal from './Settings/Modal';
import SettingsModal from './Settings/SettingsModal';
import Game from './Game/Game';
import Footer from './Footer/Footer';
import './Settings/header.css';
import './Settings/modal.css';
import {darkMode, lightMode} from '../assets/modeStyles';
import languageConst from '../assets/languageConst';

const Content:React.FC = () => {
  const [isVisible, setIsVisible] = useState<CSS.Properties>({visibility: 'hidden'});
  const [settingsVisible, setSettingsVisible] = useState<CSS.Properties>({visibility: 'hidden'});
  const [numOfImages, setNumOfImages]=useState<number>(0);
  const [soundOn, setSoundOn] = useState(true);
  const [cardFace, setCardFace] = useState('card-back.png');
  const [mode, setMode] = useState(lightMode);
  const [language, setLanguage] =useState('english');
  const selectRef = useRef<HTMLSelectElement>(null!);
  const selectInitialRef= useRef<HTMLSelectElement>(null!);
  const selectSoundRef = useRef<HTMLSelectElement>(null!);
  const selectCardFaceRef = useRef<HTMLSelectElement>(null!);
  const selectModeRef = useRef<HTMLSelectElement>(null!);
  const selectLanguageRef = useRef<HTMLSelectElement>(null!);
  const handleClickOnOpen = ():void => {
    setIsVisible({visibility: 'visible'});
  };
  const handleClickOnCancel =():void => {
    setIsVisible({visibility: 'hidden'});
  };
  const handleClickOnOK=():void => {
    if (selectRef.current) {
      console.log(selectRef.current.value);
      setNumOfImages(Number(selectRef.current.value));
    }
    handleClickOnCancel();
  };
  const handleSettingsOnOpen=():void => {
    setSettingsVisible({visibility: 'visible'});
  };
  const handleSettingsOnCancel=():void => {
    setSettingsVisible({visibility: 'hidden'});
  };
  const handleSettingsOnOK=():void => {
    if (selectSoundRef.current) {
      if (selectSoundRef.current.value==='on') {
        setSoundOn(true);
      } else {
        setSoundOn(false);
      }
    }
    if (selectCardFaceRef.current) {
      if (selectCardFaceRef.current.value==='default') {
        setCardFace('card-back.png');
      } else if (selectCardFaceRef.current.value==='paysage') {
        setCardFace('paysage.jpg');
      } else {
        setCardFace('city.jpg');
      }
    }
    if (selectModeRef.current) {
      if (selectModeRef.current.value==='light') {
        setMode(lightMode);
        document.body.style.background = '#f0f8ff';
      } else {
        setMode(darkMode);
        document.body.style.background = '#37638a';
      }
    }
    if (selectLanguageRef.current) {
      if (selectLanguageRef.current.value==='english') {
        setLanguage('english');
      } else {
        setLanguage('russian');
      }
    }
    handleSettingsOnCancel();
  };
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  return (
    <div style={mode.content}>
      <div style={{paddingBottom: '30px'}}>
        <div className="overlay" style={isVisible} />
        <div className="overlay" style={settingsVisible} />
        <Modal
          isVisible={isVisible}
          handleClickOnCancel={handleClickOnCancel}
          selectRef={selectRef}
          handleClickOnOK={handleClickOnOK}
          style={mode.modal}
          styleSelect={mode.select}
          language={language}
        />
        <SettingsModal
          settingsVisible={settingsVisible}
          handleSettingsOnCancel={handleSettingsOnCancel}
          selectSoundRef={selectSoundRef}
          selectCardFaceRef={selectCardFaceRef}
          selectModeRef={selectModeRef}
          selectLanguageRef={selectLanguageRef}
          handleSettingsOnOK={handleSettingsOnOK}
          style={mode.modal}
          styleSelect={mode.select}
          language={language}
        />
        <header className="header" style={mode.header}>
          <div className="header__logo">
            <h1 style={{fontFamily: 'RocknRoll One, sans-serif'}}> Memory Game</h1>
          </div>
          <div className="header__content">
            <ul className="content__list">
              <li onClick={() => handleClickOnOpen()}>{languageConst[language].newGame}
              </li>
              <li>{languageConst[language].bestResults}</li>
              {/* a table with 10 best games from local storage */}
              <li onClick={() => handleSettingsOnOpen()}>{languageConst[language].settings}</li>
              {/* sound on off, choose how card looks like, theme dark or light */}
            </ul>
          </div>
        </header>
        <Game
          numOfImages={numOfImages}
          soundOn={soundOn}
          cardFace={cardFace}
          selectInitialRef={selectInitialRef}
          styleSelect={mode.select}
          setNumOfImages={setNumOfImages}
          language={language}
        />
      </div>
      <Footer style={mode.content} />
    </div>

  );
};
export default Content;
