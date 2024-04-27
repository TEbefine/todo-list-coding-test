import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoLists from "./features/todoLists/TodoLists";
import "./App.css";
import { addTodoLists } from "./features/todoLists/todoListsSlice";

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
        <h1>Add TODO list</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="description"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            type="text"
            required
          />
        </form>
      </header>
      <main>
        <section className="persist-section">
          <h2 className="header">Important Todo list</h2>
        </section>
        <section className="todo-section">
          <h2 className="header">Todo list</h2>
          <TodoLists />
        </section>
      </main>
    </div>
  );
}

export default App;
