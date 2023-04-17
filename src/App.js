import React from 'react';
import './App.css';

function App() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="App" style={{backgroundColor: '#212936'}}>
      <div className="header">
        <h1>Choose a marking period and view its newsletter</h1>
      </div>
      <div className="buttons" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <button onClick={() => handleClick('https://english-newsletter-mp2.vercel.app')}>MP2</button>
        <button onClick={() => handleClick('https://english-newsletter-mp3.vercel.app')}>MP3</button>
      </div>
    </div>
  );
}

export default App;
