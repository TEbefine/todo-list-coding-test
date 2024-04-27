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
    dispatch(addTodoLists(text));
    dispatch(removePersistLists(text));
  };

  const onRemoveHandler = (text) => {
    dispatch(removePersistLists(text));
  };

  return (
    <div className="Todo-container">
      {persistTodo.map((text) => (
        <>
          <input type="checkbox" id="scales" name="scales" />
          <TextTodo text={text} key={text.id}>
            <PersistButton
              onClickHandler={() => onRemovePersistHandler(text)}
              /*icon={favoriteIconURL}*/
            >
              remove
            </PersistButton>
          </TextTodo>
          <button onClick={() => onRemoveHandler(text)}>
            <img src="/image/close.png" width="15px" />
          </button>
        </>
      ))}
    </div>
  );
}

export default PersistLists;
