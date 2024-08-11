import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [textCol, setTextCol] = useState("cyan");

  useEffect(() => {
    document.title = `Count: ${count} Col: ${textCol}`;

    return() => {
      // Cleanup
      // not needed this time
    }
  }, [count, textCol]);
  
  function handleAddition() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleSubstraction() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleChangeCol() {
    setTextCol((prevCol) => prevCol === "cyan" ? "magenta" : "cyan");
  }

  return (
    <div>
      <p style={{color: textCol}} >Count: {count}</p>
      <button onClick={handleAddition} >Add</button>
      <button onClick={handleSubstraction} >Substract</button>
      <button onClick={handleChangeCol} >Change Color</button>
    </div>
   
  )
}

export default App
