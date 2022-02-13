import React from "react";
import "./style/header2.css";
import { useDispatch } from "react-redux";
import { catogry } from "../config/redux/catogries";

function Header2() {
  const dispatch = useDispatch();
  const catogries = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="header2">
      {catogries.map((item, ind) => {
        return (
          <div
            key={ind}
            className="mx-2 custom"
            onClick={() => {
              dispatch(catogry(item));
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Header2;
