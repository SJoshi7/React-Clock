import React from 'react';
import clock from './clock.png';
import './App.css';
import Clock from './clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={clock} className="App-logo" alt="logo" />
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
