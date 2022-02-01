import React, { useState, useEffect } from "react";
import "./style/card.css";
import { useSelector, useDispatch } from "react-redux";
import { incCartCounter } from "../config/redux/showCart";
import { baskitItem } from "../config/redux/basket";

const Card = () => {
  const [arr, setArr] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const catogry = useSelector((state) => state.catogry.value);

  const fetchData = async () => {
    if (catogry !== "all" && catogry !== "") {
      await fetch(`https://fakestoreapi.com/products/category/${catogry}`)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    } else if (catogry == "" || catogry == "all") {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }
  };

  const addtoCart = (item) => {
    setArr([...arr, item])
   
  };

  useEffect(()=>{
      console.log(arr)
      if(arr[0]){
        dispatch(incCartCounter())
        dispatch(baskitItem(arr))
      }
  },[arr])

  useEffect(() => {
    fetchData();
  }, [products]);

  return products.map((item, ind) => {
    return (
      <div className="card" key={ind}>
        <img className="img" src={item.image} alt="img" />

        <div>
          <h3 className="title">
            {item.title.length > 10 ? item.title.substring(0, 10) : item.title}
          </h3>
          <p className="dis">
            {item.description.length > 60
              ? item.description.substring(0, 60) + "..."
              : item.description}
          </p>
          <div className="action">
            <span className="price">Pkr: {item.price}</span>
            <button
              className="btn btn-primary"
              onClick={() => {
                addtoCart(item);
              }}
            >
              Add to card
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;
