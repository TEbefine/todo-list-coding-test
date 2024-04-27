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
          <TextTodo text={text} key={text.id} check="persist">
            <PersistButton
              onClickHandler={() => onRemovePersistHandler(text)}
              icon={`/image/cancelled.png`}
            >
              remove
            </PersistButton>
          </TextTodo>
        </>
      ))}
    </div>
  );
}

export default PersistLists;
