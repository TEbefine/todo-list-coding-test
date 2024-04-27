import React from "react";

export default function TextTodo({ text, children }) {
  return (
    <div key={text.id} className="recipe" tabIndex={0}>
      {children}
      <h3 className="text-name">{text}</h3>
    </div>
  );
}
