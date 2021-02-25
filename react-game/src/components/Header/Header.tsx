import React, {useState, useRef} from 'react';
import CSS from 'csstype';
import './header.css';
import './modal.css';

const Header:React.FC = () => {
  const [isVisible, setIsVisible] = useState<CSS.Properties>({visibility: 'hidden'});
  const selectRef = useRef<HTMLSelectElement>(null!);
  const handleClickOnOpen = ():void => {
    setIsVisible({visibility: 'visible'});
  };
  const handleClickOnCancel =():void => {
    setIsVisible({visibility: 'hidden'});
  };
  const handleClickOnSelect=(e:React.MouseEvent):void => {
    const target = e.target as HTMLSelectElement;
    console.log(target.value);
  };
  const handleClickOnOK=():void => {
    console.log(selectRef.current.value);
    handleClickOnCancel();
  };
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  return (
    <>
      <div className="overlay" style={isVisible} />
      <div className="modal-wrapper" style={isVisible}>
        <div className="modal">
          <div className="modal-content">
            <img
              src="./cancel.png"
              alt="cancel button"
              className="modal-content__cancel-button"
              onClick={() => handleClickOnCancel()}
            />
            <h3>Choose number of cards</h3>
            <select
              name="cardsNumber"
              id="cardsNumber"
              onClick={(e) => handleClickOnSelect(e)}
              ref={selectRef}
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
            <li>Settings</li>
            {/* sound on off, choose how card looks like, theme dark or light */}
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
