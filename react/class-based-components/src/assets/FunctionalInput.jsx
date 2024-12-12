import { useState } from "react";

const FunctionalCount = ({ arr }) => {
  return (
    <div className="count">
      <span>{arr.length}</span>
    </div>
  );
};

const FunctionalInput = ({ name }) => {
  const [todos, setTodos] = useState([
    "Eat breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal("");
  };

  const deleteTask = (index) => {
    const updatedArray = todos.filter((_, i) => i !== index);
    setTodos(updatedArray);
  };

  return (
    <section>
      <h3>{name}</h3>
      <FunctionalCount arr={todos} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
      <h4>All the tasks!</h4>
      <ul>
        {todos.map((todo, index) => (
          <div key={index} className="todo-container">
            <li>{todo}</li>
            <button className="del-btn" onClick={() => deleteTask(index)}>
              DEL
            </button>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput;
