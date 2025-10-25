import React from 'react';
import type { SlideContent } from './types';

// FIX: Converted JSX to React.createElement to be valid in a .ts file.
// All JSX-related errors stem from using JSX syntax in a .ts file instead of a .tsx file.
const NewWordComponent: React.FC = () => (
  React.createElement(
    'div',
    { className: "bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-left max-w-2xl w-full" },
    React.createElement('h3', { className: "text-6xl font-bold text-purple-700 mb-4" }, 'Accurate'),
    React.createElement(
      'div',
      { className: "space-y-3 text-4xl text-gray-700" },
      React.createElement(
        'p',
        null,
        React.createElement('strong', { className: "font-semibold text-purple-600" }, 'Meaning:'),
        ' Correct in all details; exact.'
      ),
      React.createElement(
        'p',
        null,
        React.createElement('strong', { className: "font-semibold text-purple-600" }, 'Sentence:'),
        " The archer's aim was accurate, and the arrow hit the bullseye."
      )
    )
  )
);

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    title: "Air Force School, Chandan Nagar",
    content: "Welcome to our Morning Assembly!",
    backgroundColor: "bg-blue-500",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "The Pledge",
    content: "Please rise for the National Pledge.",
     backgroundColor: "bg-orange-400",
     textColor: "text-white"
  },
  {
    id: 3,
    title: "Thought for the Day",
    content: '"The beautiful thing about learning is that no one can take it away from you."',
    backgroundColor: "bg-green-500",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "New Word",
    // FIX: Converted JSX component instantiation to a React.createElement call to fix syntax error.
    component: React.createElement(NewWordComponent),
    backgroundColor: "bg-purple-300"
  },
  {
    id: 5,
    title: "NEWS",
    backgroundImage: "data:image/jpeg;base64,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"
    textColor: "text-white",
    titleClassName: "text-7xl md:text-9xl font-black"
  },
  {
    id: 6,
    title: "What's Special Today - 4th November",
    backgroundColor: "bg-indigo-500",
    textColor: "text-white"
  },
  {
    id: 7,
    title: "Skit: A Tribute to Shakuntala Devi",
    image: "https://miro.medium.com/0*q96d73RIzZpmgrp-.jpeg",
    imageClassName: "w-96"
  },
  {
    id: 8,
    title: "Thank You!",
    content: "Have a great day ahead.",
    backgroundColor: "bg-yellow-400",
    textColor: "text-gray-800"
  }
];