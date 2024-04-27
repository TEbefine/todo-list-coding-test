import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TextTodo from "../../Component/TextTodo";
import PersistButton from "../../Component/PersistButton";
import { selectTodoList, removeTodoList } from "./todoListsSlice";
import { addPersistLists } from "../persistLists/persistListsSlice";

function TodoLists() {
  const dispatch = useDispatch();
  const todoLists = useSelector(selectTodoList);

  const onAddPersistHandler = (text) => {
    dispatch(addPersistLists(text));
    dispatch(removeTodoList(text));
  };

  const onRemoveTodoHandler = (text) => {
    dispatch(removeTodoList(text));
  };

  return (
    <div className="Todo-container">
      {todoLists.map((text) => (
        <>
          <input type="checkbox" id="scales" name="scales" />
          <TextTodo text={text} key={text.id}>
            <PersistButton
              onClickHandler={() => onAddPersistHandler(text)}
              /*icon={favoriteIconURL}*/
            >
              Add to Favorites
            </PersistButton>
          </TextTodo>
          <button onClick={() => onRemoveTodoHandler(text)}>
            <img src="/image/close.png" width="15px" />
          </button>
        </>
      ))}
    </div>
  );
}

export default TodoLists;
