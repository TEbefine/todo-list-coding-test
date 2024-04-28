import React from "react";
import { useDispatch, /*useSelector*/} from "react-redux";
import {
  removeTodoList,
  toggleChecked,
} from "../features/todoLists/todoListsSlice";
<<<<<<< HEAD
<<<<<<< HEAD
import { removePersistLists } from "../features/persistLists/persistListsSlice";
=======
import {
  addPersistLists,
  removePersistLists,
} from "../features/persistLists/persistListsSlice";
=======
import { removePersistLists } from "../features/persistLists/persistListsSlice";
>>>>>>> c0daa99 (format and add bonus points)
import {
  addShowLists,
  removeShowList,
} from "../features/showAllStatus/showAllStatusSlice";
<<<<<<< HEAD
import { selectCheckedStatus } from "../features/todoLists/todoListsSlice";
>>>>>>> a9cf6af (add bonus points)
=======
// import { selectCheckedStatus } from "../features/todoLists/todoListsSlice";
>>>>>>> c0daa99 (format and add bonus points)

export default function TextTodo({ text, children, check }) {
  const dispatch = useDispatch();
  // const isChecked = useSelector(selectCheckedStatus);

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
    dispatch(toggleChecked(text));

    if (checkbox.checked) {
      textName.classList.add("crossed-out");
      dispatch(
        addShowLists({
          show: text,
          status: "comp",
        })
      );
      dispatch(
        removeShowList({
          show: text,
          status: "incomp",
        })
      );
    } else {
      textName.classList.remove("crossed-out");
      dispatch(
        addShowLists({
          show: text,
          status: "incomp",
        })
      );
      dispatch(
        removeShowList({
          show: text,
          status: "comp",
        })
      );
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
