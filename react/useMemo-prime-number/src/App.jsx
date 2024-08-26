import { useState, useEffect, useMemo } from 'react'
import { format } from 'date-fns/format';

function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    }
  }, []);

  return time;
}

function isPrime(n) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

function App() {
  const [selectedNum, setSelectedNum] = useState(100);
  const time = useTime();

  const allPrimes = useMemo(() => {
    const result = [];

    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        result.push(counter);
      }
    }

    return result;
  }, [selectedNum]);
  
  function handleInput(e) {
    // to prevent slowing down, limit max input at 100k
    let num = Math.min(100_000, Number(e.target.value));
    setSelectedNum(num);
  }

  return (
    <>
      <p className='clock'>
        {format(time, 'hh:mm:ss a')}
      </p>
      <form>
        <label htmlFor="num">Your number:</label>
        <input 
          type="number" 
          value={selectedNum} 
          onChange={(e) => handleInput(e)}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:
        {' '}
        <span className="prime-list">
          {allPrimes.join(', ')}
        </span>
      </p>
    </>
  );
}

export default App;
