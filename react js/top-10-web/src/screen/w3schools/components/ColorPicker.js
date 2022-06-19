import React from "react";
import color from "../assets/color.png";

const ColorPicker = () => {
  return (
    <div className="colorPicker-section">
      <div className="colorPicker-wrapper">
        <div className="w3-picker-header">Color Picker</div>
        <div className="w3-picker-description">
          W3Schools' famous color picker
        </div>
        <div className="w3-picker-img">
          <img src={color} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
