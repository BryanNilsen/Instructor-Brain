import React from "react";
import questions from "../questions";

function Card(props) {
  const question = questions[props.currentQuestion];

  const link = "https://github.com/orgs/nss-cohort-40/projects/1";

  return (
    <div className="card">
      <h1>{question.text}</h1>
      {question.arrPos === 6 && (
        <a href={link} className="btn">
          SIGN UP FOR AN INSTRUCTOR BRAIN
        </a>
      )}
      {question.yes ? (
        <>
          <button
            className="btn"
            onClick={() => props.setCurrentQuestion(props.currentQuestion + 2)}
          >
            YES
          </button>
          <button
            className="btn"
            onClick={() => props.setCurrentQuestion(props.currentQuestion + 1)}
          >
            NO
          </button>
        </>
      ) : (
        <button className="btn" onClick={() => props.setCurrentQuestion(0)}>
          START OVER
        </button>
      )}
    </div>
  );
}

export default Card;
