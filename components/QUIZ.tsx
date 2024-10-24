"use client";

import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  answer: number; // Index of the correct answer
}

// Categorized questions
const easyQuestions: Question[] = [
  {
    question: "What is the full form of 'AI'?",
    options: [
      "a) Artificially Intelligent",
      "b) Artificial Intelligence",
      "c) Artificially Intelligence",
      "d) Advanced Intelligence"
    ],
    answer: 1,
  },
  {
    question: "What is Artificial Intelligence?",
    options: [
      "a) Artificial Intelligence is a field that aims to make humans more intelligent",
      "b) Artificial Intelligence is a field that aims to improve security",
      "c) Artificial Intelligence is a field that aims to develop intelligent machines",
      "d) Artificial Intelligence is a field that aims to mine the data"
    ],
    answer: 2,
  },
  {
    question: "Who is the inventor of Artificial Intelligence?",
    options: [
      "a) Geoffrey Hinton",
      "b) Andrew Ng",
      "c) John McCarthy",
      "d) Jürgen Schmidhuber"
    ],
    answer: 2,
  },
  {
    question: "Which of the following is the branch of Artificial Intelligence?",
    options: [
      "a) Machine Learning",
      "b) Cyber forensics",
      "c) Full-Stack Developer",
      "d) Network Design"
    ],
    answer: 0,
  },
  {
    question: "What is the goal of Artificial Intelligence?",
    options: [
      "a) To solve artificial problems",
      "b) To extract scientific causes",
      "c) To explain various sorts of intelligence",
      "d) To solve real-world problems"
    ],
    answer: 3,
  },
];

const mediumQuestions: Question[] = [
  {
    question: "Which of the following is an application of Artificial Intelligence?",
    options: [
      "a) It helps to exploit vulnerabilities to secure the firm",
      "b) Language understanding and problem-solving (Text analytics and NLP)",
      "c) Easy to create a website",
      "d) It helps to deploy applications on the cloud"
    ],
    answer: 1,
  },
  {
    question: "In how many categories is the process of Artificial Intelligence categorized?",
    options: [
      "a) categorized into 5 categories",
      "b) processes are categorized based on the input provided",
      "c) categorized into 3 categories",
      "d) process is not categorized"
    ],
    answer: 2,
  },
  {
    question: "Based on which of the following parameters is Artificial Intelligence categorized?",
    options: [
      "a) Based on functionality only",
      "b) Based on capabilities only",
      "c) Based on capabilities and functionality",
      "d) It is not categorized"
    ],
    answer: 2,
  },
  {
    question: "Which of the following is a component of Artificial Intelligence?",
    options: [
      "a) Learning",
      "b) Training",
      "c) Designing",
      "d) Puzzling"
    ],
    answer: 0,
  },
  {
    question: "What is the function of an Artificial Intelligence 'Agent'?",
    options: [
      "a) Mapping of goal sequence to an action",
      "b) Work without the direct interference of people",
      "c) Mapping of precept sequence to an action",
      "d) Mapping of environment sequence to an action"
    ],
    answer: 1,
  },
];

const difficultQuestions: Question[] = [
  {
    question: "What is an AI 'agent'?",
    options: [
      "a) Takes input from the surroundings and uses its intelligence to perform the desired operations",
      "b) An embedded program controlling line-following robot",
      "c) Perceives its environment through sensors and acts upon that environment through actuators",
      "d) All of the mentioned"
    ],
    answer: 3,
  },
  {
    question: "Which of the following environments is strategic?",
    options: [
      "a) Rational",
      "b) Deterministic",
      "c) Partial",
      "d) Stochastic"
    ],
    answer: 3,
  },
  {
    question: "What is the name of Artificial Intelligence which allows machines to handle vague information with a deftness that mimics human intuition?",
    options: [
      "a) Human intelligence",
      "b) Boolean logic",
      "c) Functional logic",
      "d) Fuzzy logic"
    ],
    answer: 3,
  },
  {
    question: "Which of the following produces hypotheses that are easy to read for humans?",
    options: [
      "a) Machine Learning",
      "b) ILP",
      "c) First-order logic",
      "d) Propositional logic"
    ],
    answer: 1,
  },
  {
    question: "What does the Bayesian network provide?",
    options: [
      "a) Partial description of the domain",
      "b) Complete description of the problem",
      "c) Complete description of the domain",
      "d) None of the mentioned"
    ],
    answer: 2,
  },
  {
    question: "What is the total number of quantifications available in artificial intelligence?",
    options: [
      "a) 4",
      "b) 3",
      "c) 1",
      "d) 2"
    ],
    answer: 1,
  },
  {
    question: "What is Weak AI?",
    options: [
      "a) the study of mental faculties using mental models implemented on a computer",
      "b) the embodiment of human intellectual capabilities within a computer",
      "c) a set of computer programs that produce output that would be considered to reflect intelligence if it were generated by humans",
      "d) all of the mentioned"
    ],
    answer: 3,
  },
];

const QuizSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (optionIndex: number) => {
    setUserAnswers([...userAnswers, optionIndex]);
    if (currentQuestionIndex < (selectedCategory === 'easy' ? easyQuestions : selectedCategory === 'medium' ? mediumQuestions : difficultQuestions).length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateScore = () => {
    const currentQuestions = selectedCategory === 'easy' ? easyQuestions : selectedCategory === 'medium' ? mediumQuestions : difficultQuestions;
    return userAnswers.filter((answer, index) => answer === currentQuestions[index].answer).length;
  };

  const handleReturnToSelection = () => {
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen bg-[#040715] py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-center text-6xl font-bold text-white mb-12">AI Challenges</h2>

        {quizCompleted ? (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-left">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Challenge Completed!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Your score is {calculateScore()} out of {selectedCategory === 'easy' ? easyQuestions.length : selectedCategory === 'medium' ? mediumQuestions.length : difficultQuestions.length}.
            </p>
            <button 
              className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={handleReturnToSelection}
            >
              Return to Challenge Selection
            </button>
           
          </div>
        ) : selectedCategory === null ? (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-left">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Select a Challenge  Category</h3>
            <div className="space-y-4">
              <button 
                className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                onClick={() => setSelectedCategory('easy')}
              >
                Easy Challenge
              </button>
              <button 
                className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                onClick={() => setSelectedCategory('medium')}
              >
                Medium Challenge
              </button>
              <button 
                className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                onClick={() => setSelectedCategory('difficult')}
              >
                Difficult Chellenge
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Challeneges
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {currentQuestionIndex + 1}. {selectedCategory === 'easy' ? easyQuestions[currentQuestionIndex].question : selectedCategory === 'medium' ? mediumQuestions[currentQuestionIndex].question : difficultQuestions[currentQuestionIndex].question}
            </p>
            <div className="space-y-4 mb-4">
              {(selectedCategory === 'easy' ? easyQuestions[currentQuestionIndex].options : selectedCategory === 'medium' ? mediumQuestions[currentQuestionIndex].options : difficultQuestions[currentQuestionIndex].options).map((option, index) => (
                <button 
                  key={index}
                  className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => handleOptionClick(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizSection;
