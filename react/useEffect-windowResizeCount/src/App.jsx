import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return() => {
      window.removeEventListener("resize", handleResize);
    }
  }, []); 
  // here we use "[]" as useEffect dependencies
  // because we only want it to mount the event listener once 

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  )
}

export default App
