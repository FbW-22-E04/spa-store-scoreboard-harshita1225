import React from "react";
import { useContext } from "react";
import { ScoreContext } from "../ScoreContext";
import { Link } from "react-router-dom";

const Scoreboard = () => {
  const { score, plusScore, minusScore } = useContext(ScoreContext);
  return (
    <div class="add-score-container">
      <h1>Score Board</h1>
      <h2> Your current score is : {score}</h2>
      <div class="buttons">
        <button onClick={() => plusScore()}>+</button>
        <button onClick={() => minusScore()}>−</button>
      </div>
      {score > 100 ? <p>GOOD JOB!!</p> : <p>Lets make it over 100</p>}

      <Link to="/infoboard">SHOW INFOBOARD</Link>
    </div>
  );
};

export default Scoreboard;
