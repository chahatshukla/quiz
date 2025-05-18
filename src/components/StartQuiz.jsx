import React, { useState } from "react";

export default function StartQuiz({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  if (!questions || questions.length === 0) {
    return <h2>No quiz available. Please create quiz first.</h2>;
  }

  const currentQuestion = questions[currentIndex];

  const handleSubmit = () => {
    if (selectedOption === null) {
      alert("Please select an option");
      return;
    }

    if (selectedOption === currentQuestion.correctIndex) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  return (
    <div className="start-quiz-container">
      {!showScore ? (
        <>
          <h2>
            Question {currentIndex + 1} of {questions.length}
          </h2>
          <p className="question-text">{currentQuestion.questionText}</p>
          <div className="options">
  {currentQuestion.options.map((option, idx) => (
    <div key={idx} className="option-input">
      <input
        type="radio"
        name="option"
        checked={selectedOption === idx}
        onChange={() => setSelectedOption(idx)}
      />
      <label className="option-label">{option}</label>
    </div>
  ))}
</div>


          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <div className="score-section">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={handleRetry}>Retry Quiz</button>
        </div>
      )}
    </div>
  );
}
