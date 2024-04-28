import React from "react";
import { useDispatch } from "react-redux";
import { removeTodoList } from "../features/todoLists/todoListsSlice";
import { removePersistLists } from "../features/persistLists/persistListsSlice";
import { removeShowList } from "../features/showAllStatus/showAllStatusSlice";

export default function TextTodo({ text, children, check }) {
  const dispatch = useDispatch();

  const onRemoveTodoHandler = (text) => {
    if (check === "nomal") {
      dispatch(removeTodoList(text));
      dispatch(
        removeShowList({
          show: text,
          status: "incomp",
        })
      );
    } else if (check === "persist") {
      dispatch(removePersistLists(text));
      dispatch(
        removeShowList({
          show: text,
          status: "incomp",
        })
      );
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
        id="scales"
        name="scales"
        className="checkbox"
        onChange={(e) => toggleCrossedOut(e)}
      />
      {children}
      <h3 className="text-name">{text}</h3>
      <button className="deleteBtn" onClick={() => onRemoveTodoHandler(text)}>
        <img src="/image/close.png" alt="delete" width="12px" />
      </button>
    </div>
  );
}
