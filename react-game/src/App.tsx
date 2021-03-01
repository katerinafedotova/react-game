import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Content from './components/Content';

const App:React.FC = () => (
  <div className="App">
    <Content />
    <Footer />
  </div>
);

export default App;
