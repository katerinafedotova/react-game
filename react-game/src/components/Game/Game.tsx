import React, {useState} from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Card from './Card';
import GameStatus from '../GameStatus/GameStatus';
import './game.css';
import languageConst from '../../assets/languageConst';

type Props={
  numOfImages:number,
  soundOn:boolean,
  mode:string,
  cardFace:string,
  selectInitialRef:React.MutableRefObject<HTMLSelectElement>,
  styleSelect:any,
  styleFullscreen:any,
  setNumOfImages:(value:number)=>void,
  language:string,
  gameJustOpened:boolean,
  setGameJustOpened:(value:boolean)=>void,
};
const Game:React.FC<Props> = ({
  numOfImages, soundOn, mode, cardFace,
  selectInitialRef, styleSelect, styleFullscreen,
  setNumOfImages, language,
  gameJustOpened, setGameJustOpened,
}:Props) => {
  const handle = useFullScreenHandle();
  const [gameFinished, setGameFinished] =useState<boolean>(false);
  const handleClickOnOK=():void => {
    if (selectInitialRef.current) {
      setNumOfImages(Number(selectInitialRef.current.value));
    }
    setGameJustOpened(false);
  };
  const imagesArray:number[] = [];
  for (let i=0; i<numOfImages/2; i+=1) {
    imagesArray.push(i+1);
    imagesArray.push(i+1);
  }
  const getRandomImages=():number[] => imagesArray.sort(() => Math.random() - 0.5);
  const images=getRandomImages();
  const generateKey = (index: string) => `${index}_${new Date().getMilliseconds()}`;
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  let gameContainer:any=null;
  if (gameFinished) {
    gameContainer= (
      <div className="game-container__game-end">
        <h2 className="game-end__title">{languageConst[language].gameFinished} {localStorage.getItem('numberOfTurns')} {languageConst[language].turns}! </h2>
        <img src="./firework.gif" alt="firework" className="game-end__image" />
      </div>
    );
    setTimeout(() => {
      setGameFinished(false);
    }, 5500);
  } else if (gameJustOpened) {
    gameContainer=(
      <div className="modal">
        <div className="modal-content">
          <h3>{languageConst[language].chooseNumOfCards}</h3>
          <select
            name="cardsNumber"
            id="cardsNumber"
            ref={selectInitialRef}
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
            style={styleSelect}
          >{languageConst[language].start}
          </button>
        </div>
      </div>
    );
  } else {
    gameContainer=(
      images.map((image:number, index:number) => (
        <Card
          imagesNumber={image}
          key={generateKey(String(index))}
          index={index}
          soundOn={soundOn}
          cardFace={cardFace}
          numberOfCards={imagesArray.length}
          setGameFinished={setGameFinished}
          setGameJustOpened={setGameJustOpened}
        />
      ))
    );
  }
  return (
    <>
      <GameStatus language={language} />
      <button
        type="button"
        onClick={handle.enter}
        className="fullscreen-btn"
        style={styleFullscreen}
      >{languageConst[language].fullscreen}
      </button>
      <FullScreen
        handle={handle}
        className={`${mode==='light' ? 'fullscreen--light' : 'fullscreen--dark'}`}
      >
        <div className="game-container">
          {gameContainer}
        </div>
      </FullScreen>
    </>
  );
};
export default Game;
