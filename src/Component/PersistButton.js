import React from "react";

function PersistButton({ children, onClickHandler, icon }) {
  return (
    <button className="persist-button" onClick={onClickHandler}>
      <img className="heart-icon" alt="" src={icon} width="30px" />
      {children}
    </button>
  );
}

export default PersistButton;
