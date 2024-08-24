import { useState, useReducer } from "react";
import Todo from "./Todo.jsx";

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'tog-todo',
  DELETE_TODO: 'del-todo'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  }

  return (
    <div className="todoContainer" onSubmit={handleSubmit}>
      <form>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        );
      })}
    </div>
  );
}

export default App;
