import React from "react";

function ShowText({ text, children }) {
  return (
    <div key={text.id} className="text" tabIndex={0}>
      {children}
      <h3 className="text-name">{text}</h3>
    </div>
  );
}

export default ShowText;
