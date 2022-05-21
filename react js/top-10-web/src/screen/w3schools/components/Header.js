import React from "react";
import "../w3schools.css";
import logo from "../assets/logo.png";
import Button from "./Buttons";

const Header = () => {
  return (
    <div className="w3-header">
      <div className="Link">
        <a href="#" className="w3-logo-wrapper">
          <img src={logo} alt="logo" className="w3-logo" />
        </a>
        <a href="#">Tutorial</a>
        <a href="#">Refrences</a>
        <a href="#">Exercises</a>
        <a href="#">Videos</a>
        <a href="#">
          Pro <span className="new-tag">New</span>
        </a>
      </div>
      <div className="Link-btn">
        <div>
          <i class="fa fa-circle" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-globe" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <Button color="pink" fontColor="black">
          Website <span className="new-tag">New</span>
        </Button>
        <Button color="white" fontColor="black">
          Paid Courses
        </Button>
        <Button color="success" width="150px">
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Header;
