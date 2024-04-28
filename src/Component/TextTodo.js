import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodoList,
  toggleChecked,
} from "../features/todoLists/todoListsSlice";
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

  const toggleCrossedOut = (e) => {
    const checkbox = e.target;
    const textName = checkbox.parentNode.querySelector(".text-name");

    if (checkbox.checked) {
      textName.classList.add("crossed-out");
    } else {
      textName.classList.remove("crossed-out");
    }
  };

  return (
    <div key={text.id} className="text" tabIndex={0}>
      <input
        type="checkbox"
        name="scales"
        className="checkbox"
        onChange={toggleCrossedOut}
      />
      {children}
      <h3 className="text-name">{text}</h3>
      <button className="deleteBtn" onClick={() => onRemoveTodoHandler(text)}>
        <img src="/image/close.png" alt="delete" width="12px" />
      </button>
    </div>
  );
}
