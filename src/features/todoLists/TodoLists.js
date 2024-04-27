import React from "react";
import { useSelector } from "react-redux";
import TextTodo from "../../Component/TextTodo";
import PersistButton from "../../Component/PersistButton";
import { selectTodoList } from "./todoListsSlice";

function TodoLists() {
  const todoLists = useSelector(selectTodoList);

  return (
    <div className="recipes-container">
      {todoLists.map((text) => (
        <>
          <input type="checkbox" id="scales" name="scales" />
          <TextTodo text={text} key={text.id}>
            <PersistButton
            /*onClickHandler={() => onAddFavoriteRecipeHandler(recipe)}
            icon={favoriteIconURL}*/
            >
              Add to Favorites
            </PersistButton>
          </TextTodo>
          <button>
            <img src="/image/close.png" width="15px" />
          </button>
        </>
      ))}
    </div>
  );
}

export default TodoLists;
