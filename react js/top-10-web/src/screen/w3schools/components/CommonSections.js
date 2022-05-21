import React from "react";
import "../w3schools.css";
import Button from "./Buttons";

const CommonSections = ({
  sectionColor,
  heading,
  description,
  btn1Color,
  btn2Color,
  btn3Color,
  btn1Text,
  btn2Text,
  btn3Text,
  cardImg,
  videoTutorial,
}) => {
  return (
    <section className="c-section" style={{ backgroundColor: sectionColor }}>
      <div
        className="c-info"
        style={{ color: sectionColor === "#282A35" && "white" }}
      >
        <h1>{heading}</h1>
        <p>{description}</p>
        <Button color={btn1Color} width="230px">
          {btn1Text}
        </Button>
        {videoTutorial && (
          <div className="btn-with-tag">
            <span className="tag">NEW</span>
            <Button color={btn2Color} width="230px">
              {btn2Text}
            </Button>
          </div>
        )}
        <Button color={btn3Color} width="230px">
          {btn3Text}
        </Button>
      </div>
      <div className="c-img-container">
        <div className="card-wrapper">
          <h2>{heading} Example</h2>
          <img src={cardImg} alt="card-img" width="100%" />
          <Button color="success" width="270px">
            Try it Yourself
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommonSections;
