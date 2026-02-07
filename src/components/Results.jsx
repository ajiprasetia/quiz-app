"use client";

import { useEffect, useState } from "react";
import {
  FaTrophy,
  FaCheckCircle,
  FaTimesCircle,
  FaQuestionCircle,
  FaPercentage,
  FaClock,
  FaStopwatch,
  FaStar,
} from "react-icons/fa";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Results = ({
  score,
  totalQuestions,
  correctAnswers,
  wrongAnswers,
  unattemptedQuestions,
  percentage,
  timeSpent,
  averageTimePerQuestion,
}) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 7000);
    
    const cardsTimer = setTimeout(() => {
      setShowCards(true);
    }, 100);

    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(cardsTimer);
    };
  }, []);

  const getPerformanceColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const getPerformanceMessage = () => {
    if (percentage >= 80) return "🎉 Excellent Performance!";
    if (percentage >= 60) return "👍 Good Job!";
    if (percentage >= 40) return "💪 Keep Practicing!";
    return "📚 Need More Practice!";
  };

  const statsCards = [
    {
      title: "Total Points",
      value: score,
      icon: FaTrophy,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      valueColor: "text-yellow-700",
    },
    {
      title: "Points Earned",
      value: correctAnswers * 4,
      icon: FaStar,
      iconColor: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      valueColor: "text-green-700",
    },
    {
      title: "Correct Answers",
      value: correctAnswers,
      icon: FaCheckCircle,
      iconColor: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      valueColor: "text-green-700",
    },
    {
      title: "Wrong Answers",
      value: wrongAnswers,
      icon: FaTimesCircle,
      iconColor: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      valueColor: "text-red-700",
    },
    {
      title: "Unattempted",
      value: unattemptedQuestions,
      icon: FaQuestionCircle,
      iconColor: "text-gray-500",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      valueColor: "text-gray-700",
    },
    {
      title: "Accuracy",
      value: `${percentage}%`,
      icon: FaPercentage,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      valueColor: "text-blue-700",
    },
    {
      title: "Total Time",
      value: `${timeSpent.toFixed(2)}s`,
      icon: FaClock,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      valueColor: "text-purple-700",
    },
    {
      title: "Avg Time/Question",
      value: `${averageTimePerQuestion}s`,
      icon: FaStopwatch,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      valueColor: "text-indigo-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {showConfetti && (
        <Confetti width={width} height={height} numberOfPieces={700} recycle={false} />
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            Quiz Completed!
          </h1>
          <p className={`text-2xl font-semibold ${getPerformanceColor()} animate-bounce`}>
            {getPerformanceMessage()}
          </p>
        </div>

        {/* Main Score Card */}
        <div className={`mb-8 transition-all duration-700 ${showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaTrophy className="text-yellow-500 text-5xl animate-pulse" />
              <h2 className="text-3xl font-bold text-gray-900">Final Score</h2>
            </div>
            <p className="text-5xl font-bold text-blue-600 mb-2">
              {correctAnswers * 4}
              <span className="text-2xl text-gray-500">/{totalQuestions * 4}</span>
            </p>
            <p className="text-xl text-gray-600">
              {correctAnswers} correct out of {totalQuestions} questions
            </p>
            
            {/* Progress Bar */}
            <div className="mt-6 bg-gray-200 rounded-full h-4 overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={`${card.bgColor} ${card.borderColor} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1`}>
                <div className="flex items-start justify-between mb-3">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {card.title}
                  </p>
                  <card.icon className={`${card.iconColor} text-2xl group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <p className={`text-3xl font-bold ${card.valueColor}`}>
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-lg">
            Keep learning and improving! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;