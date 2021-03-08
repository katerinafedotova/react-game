import React, {useState, useEffect, useRef} from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Card from './Card';
import BestResultsTable from '../BestResultsTable/BestResultsTable';
import languageConst from '../../assets/languageConst';
import './game.css';

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
  bestResults:boolean,
};
const Game:React.FC<Props> = ({
  numOfImages, soundOn, mode, cardFace,
  selectInitialRef, styleSelect, styleFullscreen,
  setNumOfImages, language,
  gameJustOpened, setGameJustOpened, bestResults,
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
  let gameContainer:any=null;
  if (bestResults) {
    gameContainer=(
      <BestResultsTable language={language} />
    );
  } else if (gameFinished) {
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
          <h3 id="modal-content__title">{languageConst[language].chooseNumOfCards}</h3>
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
            id="modal-content__button"
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
  const fullscreenButton=useRef<HTMLButtonElement>(null!);
  const handleFPress=(event:any) => {
    if (event.key === 'f') {
      fullscreenButton.current.click();
    }
  };
  useEffect(() => {
    window.addEventListener('keypress', handleFPress);
    return () => {
      window.removeEventListener('keypress', handleFPress);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={handle.enter}
        className="fullscreen-btn"
        style={styleFullscreen}
        ref={fullscreenButton}
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
