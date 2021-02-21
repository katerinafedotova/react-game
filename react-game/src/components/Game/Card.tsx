import React, {useState} from 'react';
import './card.css';
import CSS from 'csstype';

interface Props {
  image:number,
}
const Card: React.FC<Props> = ({image}:Props) => {
  const [flippedCard, setFlippedCard] = useState<CSS.Properties>({});
  const handleClick=(e:React.MouseEvent):void => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('flip-card-front')) {
      setFlippedCard({transform: 'rotateY(180deg)' });
    } else {
      setFlippedCard({transform: 'rotateY(0deg)' });
    }
  };
  /* eslint-disable jsx-a11y/no-static-element-interactions,
  jsx-a11y/click-events-have-key-events */
  return (
    <div className="flip-card">
      <div className="flip-card-inner" style={flippedCard}>
        <div
          className="flip-card-front"
          style={{backgroundImage: 'url(./card-back.png)'}}
          onClick={(e) => handleClick(e)}
        />
        <div
          className="flip-card-back"
          style={{backgroundImage: `url(./${image}.jpg)`}}
          onClick={(e) => handleClick(e)}
        />
      </div>
    </div>
  );
};
export default Card;
