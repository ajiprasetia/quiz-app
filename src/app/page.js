'use client';

import { useEffect, useState } from "react";
import SubjectCard from '@/components/SubjectCard';
import { FaBook, FaRocket, FaBrain } from 'react-icons/fa';

export default function Home() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('/data/questions.json');
        if (response.ok) {
          const data = await response.json();
          setSubjects(data.subjects);
          console.log(data);
        } else {
          console.error("Failed to fetch subjects");
        }
      } catch (error) {
        console.error("Error fetching subjects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSubjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">
          {/* Icon Group */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="bg-blue-100 p-4 rounded-full animate-bounce">
              <FaBrain className="text-blue-600 text-3xl" />
            </div>
            <div className="bg-purple-100 p-4 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}>
              <FaBook className="text-purple-600 text-3xl" />
            </div>
            <div className="bg-green-100 p-4 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}>
              <FaRocket className="text-green-600 text-3xl" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Welcome to{' '}
            <span className="text-blue-600">
              Quiz App
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Challenge yourself, expand your knowledge, and have fun learning!
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl px-6 py-3">
              <p className="text-2xl font-bold text-blue-600">{subjects.length}</p>
              <p className="text-sm text-gray-600 font-medium">Subjects</p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl px-6 py-3">
              <p className="text-2xl font-bold text-purple-600">
                {subjects.reduce((acc, subject) => acc + subject.questions.length, 0)}
              </p>
              <p className="text-sm text-gray-600 font-medium">Questions</p>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl px-6 py-3">
              <p className="text-2xl font-bold text-green-600">Free</p>
              <p className="text-sm text-gray-600 font-medium">Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Choose Your Subject
          </h2>
          <p className="text-gray-600 text-lg">
            Select a topic below to start your quiz journey
          </p>
        </div>

        {/* Subjects Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
            <p className="text-lg text-gray-600 mt-6 font-medium">
              Loading amazing quizzes...
            </p>
          </div>
        ) : subjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <div
                key={subject.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SubjectCard subject={subject} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 max-w-md mx-auto">
              <p className="text-lg text-gray-700 font-medium">
                No subjects available at the moment.
              </p>
              <p className="text-gray-600 mt-2">Please check back later!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}