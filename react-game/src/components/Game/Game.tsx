import React, {useState} from 'react';
import Card from './Card';
import GameStatus from '../GameStatus/GameStatus';
import './game.css';
import languageConst from '../../assets/languageConst';

type Props={
  numOfImages:number,
  soundOn:boolean,
  cardFace:string,
  selectInitialRef:any,
  styleSelect:any,
  setNumOfImages:any,
  language:string
};
const Game:React.FC<Props> = ({
  numOfImages, soundOn, cardFace,
  selectInitialRef, styleSelect, setNumOfImages, language,
}:Props) => {
  const [gameJustOpened, setGameJustOpened] =useState(true);
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
  return (
    <>
      <GameStatus language={language} />
      <div className="game-container">
        {gameJustOpened
          ? (
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
                >{languageConst[language].start}
                </button>
              </div>
            </div>
          )
          : images.map((image:number, index:number) => (
            <Card
              imagesNumber={image}
              key={generateKey(String(index))}
              index={index}
              soundOn={soundOn}
              cardFace={cardFace}
            />
          ))}
      </div>
    </>
  );
};
export default Game;
