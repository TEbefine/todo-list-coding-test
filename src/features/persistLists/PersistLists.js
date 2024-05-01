import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PersistButton from "../../Component/PersistButton";
import TextTodo from "../../Component/TextTodo";
import { selectPersistLists, removePersistLists } from "./persistListsSlice";
import { addTodoLists } from "../todoLists/todoListsSlice";

function PersistLists() {
  const persistTodo = useSelector(selectPersistLists);
  const dispatch = useDispatch();

  const onRemovePersistHandler = (text) => {
    dispatch(
      addTodoLists({
        text: text.text,
        completed: text.completed,
      })
    );
    dispatch(removePersistLists(text.text));
  };

  return (
    <div className="Todo-container">
      {persistTodo.map((text) => (
        <>
          <TextTodo
            text={text.text}
            key={text.id}
            completed={text.completed}
            check="persist"
          >
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
