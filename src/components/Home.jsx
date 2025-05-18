import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Quiz App</h1>
      <button onClick={() => navigate("/create-quiz")}>Create Quiz</button>
      <button onClick={() => navigate("/start-quiz")}>Start Quiz</button>
    </div>
  );
}
