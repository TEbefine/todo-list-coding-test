import React from "react";

function PersistButton({ children, onClickHandler }) {
  return (
    <button className="persist-button" onClick={onClickHandler}>
      ⭐️
      {children}
    </button>
  );
}

export default PersistButton;
