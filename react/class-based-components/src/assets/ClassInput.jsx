import { Component } from "react";

class Count extends Component {
  render() {
    return (
      <div className="count">
        <span>{this.props.arr.length}</span>
      </div>
    );
  }
}

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Eat breakfast", "Take a shower", "Walk the dog"],
      inputVal: "",
      editIndex: null,
      editInputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.inputVal.trim()) return;
    this.setState((prevState) => ({
      todos: [...prevState.todos, prevState.inputVal],
      inputVal: "",
    }));
  }

  deleteTask(index) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((_, i) => i !== index),
    }));
  }

  startEditing(index) {
    this.setState({
      editIndex: index,
      editInputVal: this.state.todos[index],
    });
  }

  handleEditInputChange(e) {
    this.setState({
      editInputVal: e.target.value,
    });
  }

  handleEditSubmit(e) {
    e.preventDefault();
    if (!this.state.editInputVal.trim()) return;
    const updatedTodos = [...this.state.todos];
    updatedTodos[this.state.editIndex] = this.state.editInputVal;

    this.setState({
      todos: updatedTodos,
      editIndex: null,
      editInputVal: "",
    });
  }

  render() {
    return (
      <section>
        <Count arr={this.state.todos} />
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <div key={index} className="todo-container">
              {this.state.editIndex === index ? (
                <form onSubmit={this.handleEditSubmit}>
                  <label htmlFor="edit-entry">Enter a task: </label>
                  <input
                    type="text"
                    name="edit-entry"
                    value={this.state.editInputVal}
                    onChange={this.handleEditInputChange}
                  />
                  <button type="submit">RESUBMIT</button>
                </form>
              ) : (
                <>
                  <li>{todo}</li>
                  <button
                    className="edit-btn"
                    onClick={() => this.startEditing(index)}
                  >
                    EDIT
                  </button>
                  <button
                    className="del-btn"
                    onClick={() => this.deleteTask(index)}
                  >
                    DEL
                  </button>
                </>
              )}
            </div>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
