import React, { useState } from "react";

export default function CreateQuiz({ questions, setQuestions }) {
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctIndex, setCorrectIndex] = useState(null);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddQuestion = () => {
    if (
      !questionText.trim() ||
      options.some((opt) => !opt.trim()) ||
      correctIndex === null
    ) {
      alert("Please fill all fields and select the correct answer.");
      return;
    }

    const newQuestion = {
      questionText,
      options,
      correctIndex,
    };

    setQuestions([...questions, newQuestion]); // Add question to parent state

    // Reset fields
    setQuestionText("");
    setOptions(["", "", "", ""]);
    setCorrectIndex(null);
  };

  return (
    <div className="create-quiz-container">
      <h2>Create Quiz</h2>

      <label>Question:</label>
      <textarea
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        rows={3}
        placeholder="Enter your question here..."
      />

      <div className="options-inputs">
        {options.map((opt, idx) => (
          <div key={idx} className="option-input">
            <input
              type="text"
              placeholder={`Option ${idx + 1}`}
              value={opt}
              onChange={(e) => handleOptionChange(idx, e.target.value)}
            />
            <input
              type="radio"
              name="correct"
              checked={correctIndex === idx}
              onChange={() => setCorrectIndex(idx)}
            />
            <label>Correct</label>
          </div>
        ))}
      </div>

      <button onClick={handleAddQuestion}>Add Question</button>

      <div className="questions-preview">
        <h3>Questions Added: {questions.length}</h3>
        <ul>
          {questions.map((q, i) => (
            <li key={i}>{q.questionText}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
