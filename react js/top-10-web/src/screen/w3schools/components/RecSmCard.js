import React from "react";
import { styled } from "@mui/system";

const Card = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "50px",
  backgroundColor: props.color,
  color: "#000",
  borderRadius: "10px",
  fontSize: "32px",
  fontWeight: 700,
}));

const RecSmCard = ({ item }) => {
  return <Card color={item.cardColor}>{item.title}</Card>;
};

export default RecSmCard;
