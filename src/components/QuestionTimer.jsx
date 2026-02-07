"use client";
import { useState, useEffect } from "react";

const QuestionTimer = ({ onTimeUp, setTimePerQuestion, isAnswered, resetTimer }) => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (!isAnswered && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds((prev) => prev - 1);
        setTimePerQuestion(10 - seconds);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (seconds === 0 && !isAnswered) {
      onTimeUp();
    }
  }, [seconds, isAnswered])

  useEffect(() => {
    setSeconds(10);
  }, [resetTimer]);

  return <div className="text-lg">Time Left: {seconds}s</div>;
};

export default QuestionTimer;
