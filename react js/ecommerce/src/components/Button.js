import React from "react";

export default function Button({ title, onClick }) {
  return (
    <button
      className="btn text-white"
      onClick={onClick}
      style={{ background: "tomato" }}
    >
      {title}
    </button>
  );
}
