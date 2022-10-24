import { Routes, Route } from "react-router-dom";
import "./App.css";
import Infoboard from "./Components/Infoboard";
import Scoreboard from "./Components/Scoreboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Scoreboard />} />
      <Route path="/infoboard" element={<Infoboard />} />
    </Routes>
  );
}

export default App;
