import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AboveGame from "./components/AboveGame";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="container">
      <Header score={score} />
      <AboveGame />
      <Container setScore={setScore} />
    </div>
  );
}

export default App;
