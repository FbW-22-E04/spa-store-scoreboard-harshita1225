import React, { useContext } from "react";
import { ScoreContext } from "../ScoreContext";

const Infoboard = () => {
  const { score } = useContext(ScoreContext);
  return (
    <div class="info-board">
      <div class="board-container">
        <h2>Score: {score}</h2>
      </div>
    </div>
  );
};

export default Infoboard;
