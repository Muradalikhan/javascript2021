import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();

  return (
    <>
      <h1>Details</h1>
      <div>{location.state.title}</div>
    </>
  );
};

export default ProductDetail;
