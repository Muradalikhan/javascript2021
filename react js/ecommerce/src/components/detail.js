import React from "react";
import { useLocation } from "react-router-dom";
import './style/detail.css'

const Detail = () => {
  const location = useLocation();
  const { title, description, price, image } = location.state;

  return (
    <div>
      <h1>Details</h1>
      <div>{location.state.title}</div>
      <div className="container">
        <div className="card-detail float-left">
          <div className="row ">
            <div className="col-sm-7">
              <div className="card-block">
                <h4 className="title-detail">{title}</h4>
                <p>{description}</p>
                <p>{price}</p>
                <a href="#" className="btn btn-primary btn-sm">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-sm-5">
              <img
                className="d-block w-100 image-detail"
                src={image}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
