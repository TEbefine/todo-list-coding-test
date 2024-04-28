import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PersistButton from "../../Component/PersistButton";
import TextTodo from "../../Component/TextTodo";
import { selectPersistLists, removePersistLists } from "./persistListsSlice";
import { addTodoLists } from "../todoLists/todoListsSlice";
import {
  addShowLists,
  removeShowList,
} from "../showAllStatus/showAllStatusSlice";

function PersistLists() {
  const persistTodo = useSelector(selectPersistLists);
  const dispatch = useDispatch();

  const onRemovePersistHandler = (text) => {
    dispatch(addTodoLists(text));
    dispatch(removePersistLists(text));
    dispatch(
      addShowLists({
        show: text,
        status: "incomp",
        kind: "regular",
      })
    );
    dispatch(
      removeShowList({
        show: text,
        status: "incomp",
        kind: "persist",
      })
    );
  };

  return (
    <div className="Todo-container">
      {persistTodo.map((text) => (
        <>
          <TextTodo text={text} key={text.id} check="persist">
            <PersistButton
              onClickHandler={() => onRemovePersistHandler(text)}
              icon={`/image/favouriteF.png`}
            >
              <img
                className="star-icon"
                src="/image/cancelled.png"
                alt="star"
                width="18"
              />
            </PersistButton>
          </TextTodo>
        </>
      ))}
    </div>
  );
}

export default PersistLists;
