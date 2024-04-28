import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodoList,
  toggleChecked,
} from "../features/todoLists/todoListsSlice";
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

  // const toggleCrossedOut = (e) => {
  //   const checkbox = e.target;
  //   const textName = checkbox.parentNode.querySelector(".text-name");
  //   dispatch(toggleChecked(text.id));

  //   if (checkbox.checked) {
  //     textName.classList.add("crossed-out");
  //   } else {
  //     textName.classList.remove("crossed-out");
  //   }
  // };

  // const isChecked = useSelector((state) =>
  //   state.todos.checkedTodos.includes(text.id)
  // );

  return (
    <div
      key={text.id}
      className="text"
      tabIndex={0}
    >
      <input
        type="checkbox"
        id={`checkbox-${text.id}`}
        name="scales"
        className="checkbox"
        // onChange={toggleCrossedOut}
        // checked={isChecked}
      />
      {children}
      <h3 className="text-name">{text}</h3>
      <button className="deleteBtn" onClick={() => onRemoveTodoHandler(text)}>
        <img src="/image/close.png" alt="delete" width="12px" />
      </button>
    </div>
  );
}
