import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1};
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function handleIncrement() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function handleDecrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;