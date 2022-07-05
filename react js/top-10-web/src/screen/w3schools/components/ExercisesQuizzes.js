import React from "react";
import codebg from "../assets/codebg.png";

const ExercisesQuizzes = () => {
  return (
    <div className="exercises-quizzes-section">
      <img src={codebg} alt="bg-img" className="exercises-quizzes-img" />
      <div className="exercises-quizzes-wrapper">
        <div className="exercises-header">Exercises and Quizzes</div>
        <div className="exercises-description">Test your skills!</div>
        <div className="exercises-cards">
          <div className="transparent-success">Exercises</div>
          <div className="transparent-warning">Quizzes</div>
        </div>
      </div>
    </div>
  );
};

export default ExercisesQuizzes;
