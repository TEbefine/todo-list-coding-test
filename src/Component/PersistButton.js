import React from "react";

function PersistButton({ children, onClickHandler, icon }) {
  return (
    <button className="persist-button" onClick={onClickHandler}>
      <img
        className="important-icon"
        alt="important icon"
        src={icon}
        width="18px"
      />
      {children}
    </button>
  );
}

export default PersistButton;
