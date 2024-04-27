import React from "react";
import { useDispatch } from "react-redux";
import { removeTodoList } from "../features/todoLists/todoListsSlice";
import { removePersistLists } from "../features/persistLists/persistListsSlice";

export default function TextTodo({ text, children, check }) {
  const dispatch = useDispatch();

  const onRemoveTodoHandler = (text) => {
    if (check === "nomal") {
      dispatch(removeTodoList(text));
    } else if (check === "persist") {
      dispatch(removePersistLists(text));
    }
  };

  return (
    <div key={text.id} className="text" tabIndex={0}>
      <input type="checkbox" id="scales" name="scales" />
      {children}
      <h3 className="text-name">{text}</h3>
      <button onClick={() => onRemoveTodoHandler(text)}>
        <img src="/image/close.png" alt="delete" width="15px" />
      </button>
    </div>
  );
}
