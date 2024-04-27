import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoLists from "./features/todoLists/TodoLists";
import "./App.css";
import { addTodoLists } from "./features/todoLists/todoListsSlice";
import PersistLists from "./features/persistLists/PersistLists";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }

    dispatch(addTodoLists(text));
    setText("");
  };
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="description"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            type="text"
            placeholder="Enter your task here"
            required
          />
          <div>
            <button>Add Task</button>
          </div>
        </form>
      </header>
      <main>
        <section className="persist-section">
          <h2 className="header">Priority Tasks</h2>
          <PersistLists />
        </section>
        <section className="todo-section">
          <h2 className="header">Tasks</h2>
            <TodoLists />
        </section>
      </main>
    </div>
  );
}

export default App;
