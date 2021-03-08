import React from 'react';
import './card.css';

interface Props {
  imagesNumber:number,
  index:number,
  soundOn:boolean,
  cardFace:string,
  numberOfCards:number,
  setGameFinished:any,
  setGameJustOpened:any,
}
const pairElements:any[] =[];
const parents:any[] =[];
let guessedElements:number=0;
let numberOfTurns:number=0;

const Card: React.FC<Props> = ({
  imagesNumber, index, soundOn, cardFace,
  numberOfCards, setGameFinished, setGameJustOpened,
}:Props) => {
  const handleClick=(e:React.MouseEvent) => {
    let audioPath: string;
    const target = e.target as HTMLDivElement;
    if (target.dataset.image && pairElements.length<2 && target.parentNode) {
      const targetParent = target.parentNode as HTMLDivElement;
      targetParent.classList.add('rotateToBack');
      pairElements.push(target);
      parents.push(targetParent);
    }
    if (pairElements.length===2) {
      numberOfTurns+=1;
      if (pairElements[0].dataset.image===pairElements[1].dataset.image) {
        guessedElements+=1;
        if (guessedElements===numberOfCards/2) {
          const array=JSON.parse(localStorage.getItem('bestResultsStats')||'[]');
          const obj={
            turns: numberOfTurns,
            cards: numberOfCards,
            date: new Date(),
          };
          array.push(obj);
          localStorage.setItem('bestResultsStats', JSON.stringify(array));
          localStorage.setItem('numberOfTurns', `${numberOfTurns}`);
          guessedElements=0;
          numberOfTurns=0;
          audioPath = '../../audio/success.mp3';
          const successAudio = new Audio(audioPath);
          setTimeout(() => {
            if (soundOn) {
              successAudio.play();
            }
            setGameJustOpened(true);
            setGameFinished(true);
          }, 1000);
        }
        audioPath = './audio/success_sound.mp3';
        setTimeout(() => {
          Array.from(parents).forEach((parent:any):void => {
            parent.classList.add('correct');
          });
          pairElements.length=0;
          parents.length=0;
        }, 500);
      } else {
        audioPath = '../../audio/mistake_sound.mp3';
        setTimeout(() => {
          Array.from(parents).forEach((parent:any):void => {
            parent.classList.add('wrong');
          });
        }, 500);
        setTimeout(() => {
          Array.from(parents).forEach((parent:any):void => {
            parent.classList.remove('wrong');
            parent.classList.remove('rotateToBack');
          });
          pairElements.length=0;
          parents.length=0;
        }, 1000);
      }
      if (soundOn) {
        const audio = new Audio(audioPath);
        setTimeout(() => audio.play(), 500);
      }
    }
  };
  /* eslint-disable jsx-a11y/no-static-element-interactions,
  jsx-a11y/click-events-have-key-events */
  return (
    <div className="flip-card">
      <div
        className="flip-card-inner"
      >
        <div
          className="flip-card-front"
          style={{backgroundImage: `url(./${cardFace})`}}
          data-image={imagesNumber}
          data-index={index}
          onClick={handleClick}
        />
        <div
          className="flip-card-back"
          style={{backgroundImage: `url(./${imagesNumber}.jpg)`}}
        />
      </div>
    </div>
  );
};
export default Card;
