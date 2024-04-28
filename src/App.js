import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoLists from "./features/todoLists/TodoLists";
import "./App.css";
import {
  addTodoLists,
  selectTodoList,
} from "./features/todoLists/todoListsSlice";
import PersistLists from "./features/persistLists/PersistLists";
import { selectPersistLists } from "./features/persistLists/persistListsSlice";
import ShowAllStatus from "./features/showAllStatus/ShowAllStatus";
import { addShowLists } from "./features/showAllStatus/showAllStatusSlice";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const todo = useSelector(selectTodoList);
  const persistTodo = useSelector(selectPersistLists);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }

    dispatch(addTodoLists(text));
    dispatch(
      addShowLists({
        show: text,
        status: "incomp",
      })
    );
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
          {persistTodo.length > 0 ? (
            <PersistLists />
          ) : (
            <p className="prepare-message">Top Priorities</p>
          )}
        </section>
        <section className="todo-section">
          <h2 className="header">Tasks</h2>
          {todo.length > 0 ? (
            <TodoLists />
          ) : (
            <p className="prepare-message">To-Do List</p>
          )}
        </section>
      </main>
      <div className="underline"></div>
      <div className="showContainer">
        <ShowAllStatus />
      </div>
    </div>
  );
}

export default App;
