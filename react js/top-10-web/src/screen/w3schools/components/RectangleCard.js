import React from "react";
import Button from "./Buttons";
import { styled } from "@mui/system";

const CardWrpper = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  padding: "50px",
  backgroundColor: props.color,
  color: "#000",
  borderRadius: "10px",
}));

const H1 = styled("h1")({
  fontSize: "60px",
  fontWeight: 700,
});
const P = styled("p")({
  fontSize: "24px",
  fontWeight: 500,
});

const RectangleCard = ({ item }) => {
  return (
    <CardWrpper color={item.cardColor}>
      <H1>{item.title}</H1>
      <P>{item.description}</P>
      <Button color={item.btnColor} width="200px">
        {item.btnText}
      </Button>
    </CardWrpper>
  );
};

export default RectangleCard;
