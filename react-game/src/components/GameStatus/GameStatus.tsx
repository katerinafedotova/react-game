import React from 'react';
import './gameStatus.css';
import languageConst from '../../assets/languageConst';

type Props={
  language:string,
};
localStorage.setItem('pairsFound', '0');
const GameStatus:React.FC<Props> = ({language}:Props) => {
  const time:string='00:00';
  const turn:number=0;
  return (
    <div className="game-status">
      <div className="game-status__item time">{languageConst[language].time}: {time}</div>
      <div className="game-status__item turn">{languageConst[language].turn}: {turn}</div>
      <div className="game-status__item pairs">{languageConst[language].pairsFound}: {localStorage.getItem('pairsFound')}</div>
    </div>
  );
};
export default GameStatus;
