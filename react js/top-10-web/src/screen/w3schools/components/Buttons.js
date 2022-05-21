import React from "react";
import { styled } from "@mui/system";

const W3Button = styled("button")((props) => ({
  border: "none",
  backgroundColor: props.bgColor,
  color: props.fontColor,
  borderRadius: "32px",
  padding: "10px 20px",
  fontSize: "20px",
  fontWeight: 500,
  width: props.width,
}));

const Button = ({ children, color, width }) => {
  return (
    <W3Button
      bgColor={
        (color === "success" && "#00ac6d") ||
        (color === "dark" && "#282A35") ||
        (color === "warning" && "#FFF4A3") ||
        (color === "white" && "white") ||
        (color === "pink" && "#FFC0C7")
      }
      fontColor={
        color === "pink"
          ? "#000"
          : "fff" && color === "white"
          ? "#000"
          : "#fff" && color === "warning"
          ? "#000"
          : "#fff"
      }
      width={width || "auto"}
    >
      {children}
    </W3Button>
  );
};

export default Button;
