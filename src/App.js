import React, { useState } from "react";
import "./App.css";
import brain from "./images/brain.gif";
import Card from "./components/Card";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="App">
      <img src={brain} alt="brain" className="logo" />
      <h1 className="logo-header">Instructor Brain</h1>
      <h2 className="tagline">(use your brain before you ask ours)</h2>
      <Card
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
}

export default App;
