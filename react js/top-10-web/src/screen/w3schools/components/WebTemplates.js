import React from "react";
import Button from "./Buttons";
import webtemplate from "../assets/webtemplate.png";

const WebTemplates = () => {
  return (
    <div className="webTemplates-section">
      <div className="webTemplates-header">Web Templates</div>
      <div className="webTemplates-description">
        Browse our selection of free responsive HTML Templates
      </div>
      <div>
        <img src={webtemplate} alt="img" />
      </div>
      <Button color="dark" width="300px">
        BROWSE TEMPLATES
      </Button>
    </div>
  );
};

export default WebTemplates;
