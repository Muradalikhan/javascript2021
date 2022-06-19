import React from "react";
import codegame from "../assets/codegame.png";
import Button from "./Buttons";

const CodeGame = () => {
  return (
    <div className="codeGame-section">
      <div className="codeGame-wrapper">
        <div className="w3-codeGame-header">Code Game</div>
        <div className="w3-codeGame-description">
          Help the Lynx collect pine cones!
        </div>
        <div className="w3-codeGame-img">
          <img src={codegame} alt="img" />
        </div>
        <Button color="dark" width="250px">
          Play Game
        </Button>
      </div>
    </div>
  );
};

export default CodeGame;
