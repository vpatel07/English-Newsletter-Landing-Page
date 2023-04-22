import React from 'react';
import './App.css';

function App() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="App" style={{backgroundColor: '#212936'}}>
      <div className="header">
        <h1>AI Thing</h1>
      </div>
      <div className='text'>
        <h4>
          Weclome to our AI bot that allows you to do our Brain Tumor Decector.
        </h4>
      </div>
      <div className="buttons" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh'}}>
        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">Choose File</input>
        <p id="display-output">Output</p>
      </div>
      <div className='text'> 
        This AI can detect: 
        <ul>
          <li>Scoliosis</li>
          <li>Brain Tumors</li>
          <li>Brain Hemorrages</li>
        </ul> 
      </div>
        Why is this AI Useful:
        <ul>
          <li></li>
        </ul>
    </div>
  );
}

export default App;
