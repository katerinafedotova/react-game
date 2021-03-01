import React from 'react';
import Card from './Card';
import GameStatus from '../GameStatus/GameStatus';
import './game.css';

type Props={
  numOfImages:number,
  soundOn:boolean,
  cardFace:string
};
const Game:React.FC<Props> = ({numOfImages, soundOn, cardFace}:Props) => {
  const imagesArray:number[] = [];
  for (let i=0; i<numOfImages/2; i+=1) {
    imagesArray.push(i+1);
    imagesArray.push(i+1);
  }
  const getRandomImages=():number[] => imagesArray.sort(() => Math.random() - 0.5);
  const images=getRandomImages();
  const generateKey = (index: string) => `${index}_${new Date().getMilliseconds()}`;
  return (
    <>
      <GameStatus />
      <div className="game-container">
        {images.map((image:number, index:number) => (
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
