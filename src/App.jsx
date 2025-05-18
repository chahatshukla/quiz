import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import CreateQuiz from "./components/CreateQuiz.jsx";
import StartQuiz from "./components/StartQuiz.jsx";

export default function App() {
  const [questions, setQuestions] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create-quiz"
          element={
            <CreateQuiz questions={questions} setQuestions={setQuestions} />
          }
        />
        <Route path="/start-quiz" element={<StartQuiz questions={questions} />} />
      </Routes>
    </BrowserRouter>
  );
}
