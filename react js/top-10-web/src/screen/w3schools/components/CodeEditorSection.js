import React from "react";
import img from "../assets/codeEditor.png";

const CodeEditorSection = () => {
  return (
    <div className="codeEditorSection">
      <h1 className="ce-header">Code Editor</h1>
      <p className="ce-description">
        With our online code editor, you can edit code and view the result in
        your browser
      </p>
      <img src={img} alt="img" />
      <div className="ce-btn-wrapper">
        <button className="ce-btn-success">
          Try Front end editor(HTML/css/js)
        </button>
        <button className="ce-btn-warning">
          Try backend editor (python/php/java)
        </button>
      </div>
    </div>
  );
};

export default CodeEditorSection;
