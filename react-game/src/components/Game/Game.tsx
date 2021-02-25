import React from 'react';
import Card from './Card';
import './game.css';

const Game:React.FC = () => {
  const imagesArray:number[] = [];
  const numOfImages = 14;
  for (let i=0; i<numOfImages/2; i+=1) {
    imagesArray.push(i+1);
    imagesArray.push(i+1);
  }
  const getRandomImages=():number[] => imagesArray.sort(() => Math.random() - 0.5);
  const images=getRandomImages();
  const generateKey = (index: string) => `${index}_${new Date().getMilliseconds()}`;
  return (
    <div className="game-container">
      {images.map((image:number, index:number) => (
        <Card
          imagesNumber={image}
          key={generateKey(String(index))}
          index={index}
        />
      ))}
    </div>
  );
};
export default Game;
