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
    dispatch(
      addPersistLists({
        text: text.text,
        completed: text.completed,
      })
    );
    dispatch(removeTodoList(text.text));
  };

  return (
    <div className="Todo-container">
      {todoLists.map((text) => (
        <div>
          <TextTodo
            text={text.text}
            key={text.id}
            completed={text.completed}
            check="nomal"
          >
            <PersistButton
              onClickHandler={() => onAddPersistHandler(text)}
              icon={`/image/favourite.png`}
            >
              <img
                className="star-icon"
                src="/image/favouriteY.png"
                alt="star"
                width="18"
              />
            </PersistButton>
          </TextTodo>
        </div>
      ))}
    </div>
  );
}

export default TodoLists;
