import { ACTIONS } from "./App.jsx";

function Todo({ todo, dispatch }) {
  return (
    <div className="todo">
      <span 
        style={{ 
          color: todo.complete ? '#ffffff54' : '#ffffffde', 
          textDecoration: todo.complete ? 'line-through' : ''
        }}
      >
        {todo.name}
      </span>
      <div className="todo-action">
        <button 
          onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })} 
        >
          Toggle
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id} })} 
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;