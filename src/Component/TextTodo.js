import React from "react";
import { useDispatch /*useSelector*/ } from "react-redux";
import {
  removeTodoList,
  toggleChecked,
} from "../features/todoLists/todoListsSlice";
import {
  removePersistLists,
  togglePersistChecked,
} from "../features/persistLists/persistListsSlice";
import {
  addShowLists,
  removeShowList,
} from "../features/showAllStatus/showAllStatusSlice";

export default function TextTodo({ text, completed, children, check }) {
  const dispatch = useDispatch();

  const onRemoveTodoHandler = (text) => {
    if (check === "nomal") {
      dispatch(removeTodoList(text));
    } else if (check === "persist") {
      dispatch(removePersistLists(text));
    }

    dispatch(
      removeShowList({
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
  };

  const toggleCrossedOut = (e) => {
    const checkbox = e.target;
    dispatch(toggleChecked(text));
    dispatch(togglePersistChecked(text));

    if (checkbox.checked) {
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
        checked={completed}
      />
      {children}
      <h3 className={`text-name ${completed ? "crossed-out" : ""}`}>{text}</h3>
      <button className="deleteBtn" onClick={() => onRemoveTodoHandler(text)}>
        <img src="/image/close.png" alt="delete" width="12px" />
      </button>
    </div>
  );
}
