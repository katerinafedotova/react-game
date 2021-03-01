import React from 'react';
import './card.css';

interface Props {
  imagesNumber:number,
  index:number,
}
const pairElements:any[] =[];
const parents:any[] =[];

const Card: React.FC<Props> = ({imagesNumber, index}:Props) => {
  const handleClick=(e:React.MouseEvent):void => {
    let audioPath: string;
    const target = e.target as HTMLDivElement;
    if (target.dataset.image && pairElements.length<2 && target.parentNode) {
      const targetParent = target.parentNode as HTMLDivElement;
      targetParent.classList.add('rotateToBack');
      pairElements.push(target);
      parents.push(targetParent);
    }
    if (pairElements.length===2) {
      if (pairElements[0].dataset.image===pairElements[1].dataset.image) {
        audioPath = './audio/success_sound.mp3';
        setTimeout(() => {
          /* eslint-disable array-callback-return */
          Array.from(parents).forEach((parent:any):void => {
            parent.classList.add('correct');
          });
          pairElements.length=0;
          parents.length=0;
        }, 500);
      } else {
        audioPath = '../../audio/mistake_sound.mp3';
        setTimeout(() => {
          /* eslint-disable array-callback-return */
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
        }, 1500);
      }
      const audio = new Audio(audioPath);
      setTimeout(() => audio.play(), 500);
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
          style={{backgroundImage: 'url(./card-back.png)' }}
          data-image={imagesNumber}
          data-index={index}
          onClick={(e) => handleClick(e)}
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
