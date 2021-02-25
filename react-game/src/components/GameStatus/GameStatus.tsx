import React from 'react';
import './gameStatus.css';

localStorage.setItem('pairsFound', '0');
const GameStatus:React.FC = () => {
  const time:string='00:00';
  const turn:number=0;
  return (
    <div className="game-status">
      <div className="game-status__item time">Time: {time}</div>
      <div className="game-status__item turn">Turn: {turn}</div>
      <div className="game-status__item pairs">Pairs found: {localStorage.getItem('pairsFound')}</div>
    </div>
  );
};
export default GameStatus;
