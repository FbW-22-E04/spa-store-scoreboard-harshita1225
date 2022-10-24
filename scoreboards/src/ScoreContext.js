import { createContext, useState } from "react";

export const ScoreContext = createContext();

export default function ScoreContextProvider({ children }) {
  const [score, setScore] = useState(0);

  const plusScore = () => {
    return setScore(score + 10);
  };
  const minusScore = () => {
    return setScore(score - 10);
  };

  return (
    <ScoreContext.Provider value={{ score, plusScore, minusScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
