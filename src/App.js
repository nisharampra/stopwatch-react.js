import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const pad = (num) => num.toString().padStart(2, '0');
    const seconds = pad(time % 60);
    const minutes = pad(Math.floor(time / 60) % 60);
    const hours = pad(Math.floor(time / 3600));
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stopwatch</h1>
        <p>{formatTime(time)}</p>
        <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
