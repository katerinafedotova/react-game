import React from 'react';
import './header.css';

const Header:React.FC = () => (
  <header className="header">
    <div className="header__logo">
      <h1 style={{fontFamily: 'RocknRoll One, sans-serif'}}> Memory Game</h1>
    </div>
    <div className="header__content">
      <ul className="content__list">
        <li>Start Game</li>
        <li>How it works</li>
        {/* make a simple game in 31 steps */}
        <li>Best results</li>
        {/* a table with 10 best games from local storage or backend */}
        <li>Settings</li>
        {/* sound on off, choose how card looks like, theme dark or light */}
      </ul>
    </div>
  </header>
);
export default Header;
