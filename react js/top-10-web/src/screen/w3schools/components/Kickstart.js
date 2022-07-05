import React from "react";
import Button from "./Buttons";

const Kickstart = () => {
  return (
    <div className="kickstart-section">
      <div className="kickstart-header">Kickstart your career</div>
      <div className="kickstart-description">
        Get certified by completing a course
      </div>
      <Button color="success" width="250px">
        Get Started
      </Button>
      <div className="kickstart-circle">w3 Logo</div>
    </div>
  );
};

export default Kickstart;
