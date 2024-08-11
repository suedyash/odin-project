import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const prevName = useRef("");
  const renderCount = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
      <p>My name is {name}, and it used to be {prevName.current}</p>
      <p>I rendered {renderCount.current} times</p>
      <button onClick={focusInput} >Focus on input</button>
    </div>
  );
}

export default App
