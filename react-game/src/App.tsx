import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Game from './components/Game/Game';
import GameStatus from './components/GameStatus/GameStatus';

const App:React.FC = () => (
  <div className="App">
    <Header />
    <GameStatus />
    <Game />
    <Footer />
  </div>
);

export default App;
