import { useState } from 'react'
import './App.css'

const COLORS = ["LavenderBlush", "Aquamarine", "SkyBlue", "PapayaWhip", "Plum"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[2]);
  const [counter, setCounter] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setCounter(counter + 1);
  }

  return (
    <div id='container'>
      <div className='App' style={{backgroundColor}}>
        {COLORS.map((color) => (
          <button key={color} onClick={onButtonClick(color)} className={backgroundColor === color ? "selected": ""}>
            {color}
          </button>
        ))}
      </div>
      <p>This is part of assignment from Odin Project's lesson: Introduction to state [React].</p>
      <span>
        Number of times the background has been altered: <span style={{color: backgroundColor}}>{counter}</span>
      </span>
    </div>
  )
}

export default App