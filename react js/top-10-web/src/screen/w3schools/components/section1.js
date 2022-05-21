import React from "react";
import "../w3schools.css";

import img from "../assets/wave.svg";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="section1-img-wrapper">
        <img src={img} alt="bg-img" className="section1-img" />
      </div>
      <div className="containerr">
        <h1 className="section1-heading">Learn To Code</h1>
        <h5 className="section1-heading2">
          With the world largest developers site
        </h5>
        <div className="searchBox-wrapper">
          <input
            type="text"
            className="searchBox"
            placeholder="Search our tutorials, e.g HTML"
          />
          <div className="searchBox-icon">
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
        <a className="section1-link">Not sure where to begin?</a>
      </div>
    </section>
  );
};

export default Section1;
