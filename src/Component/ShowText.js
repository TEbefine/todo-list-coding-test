import React from "react";

export default function ShowText({ text, children }) {
  return (
    <div key={text.id} className="text" tabIndex={0}>
      {children}
      <h3 className="text-name">{text}</h3>
    </div>
  );
}
