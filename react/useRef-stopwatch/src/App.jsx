import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [startTime, setStartTime] = useState(null); 
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h2>Time passed: {secondsPassed.toFixed(3)}</h2>
      <button onClick={handleStart} >Start</button>
      <button onClick={handleStop} >Stop</button>
    </div>
  );
}

export default App
