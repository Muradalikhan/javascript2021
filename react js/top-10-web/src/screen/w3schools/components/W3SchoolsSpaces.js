import React from "react";
import Button from "./Buttons";
import bgImg1 from "../assets/bgImg1.jpg";

const W3SchoolsSpaces = () => {
  return (
    <div className="w3-spaces-section">
      <img src={bgImg1} alt="bg-img" className="w3-spaces-bg-img"/>
      <div className="w3-spaces-wrapper">
        <div className="w3-spaces-main-header">W3Schools Spaces</div>
        <div className="w3-spaces-description">
          Build your own website with W3Schools Spaces.
        </div>
        <Button color="success" width="400px">
          <h3> Get Started for Free</h3>
        </Button>
        <div className="w3-spaces-sub-header">How it works</div>
        <div className="w3-spaces-icons">
          <div>
            <i class="fa fa-window-maximize" aria-hidden="true"></i>
            <p>Join w3schools and created space</p>
          </div>
          <div>
            <i class="fa fa-th-large" aria-hidden="true"></i>
            <p>Choose a template or start from scratch</p>
          </div>
          <div>
            <i class="fa fa-file-code-o" aria-hidden="true"></i>
            <p>Edit code directly in your browser</p>
          </div>
          <div>
            <i class="fa fa-globe" aria-hidden="true"></i>
            <p>share your web page with the world</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default W3SchoolsSpaces;
