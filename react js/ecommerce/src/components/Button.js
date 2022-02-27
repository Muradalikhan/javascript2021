import React from "react";

export default function Button({ title }) {
  return (
    <button className="btn text-white" style={{ background: "tomato" }}>
      {title}
    </button>
  );
}
