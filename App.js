import Play from "./components/Play";
import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const gametoggle = () => {
    setIsGameStarted(!isGameStarted);
  };
  return (
    <div className="App">
      {isGameStarted ? <Play /> : <Game toggle={gametoggle} />}
    </div>
  );
}

export default App;
