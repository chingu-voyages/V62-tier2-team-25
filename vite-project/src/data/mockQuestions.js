// Sample Questions and Answers Data
const QUESTIONS_DATA = [
  {
    id: 1,
    question: "What is the primary function of React's useState hook?",
    options: [
      { id: "a", text: "To fetch data from an external API" },
      { id: "b", text: "To manage local state within a functional component" },
      { id: "c", text: "To directly manipulate the browser DOM" },
      { id: "d", text: "To style Tailwind components dynamically" },
    ],
  },
  {
    id: 2,
    question:
      "Which Tailwind utility class hides an element visually while keeping it accessible to screen readers?",
    options: [
      { id: "a", text: "hidden" },
      { id: "b", text: "invisible" },
      { id: "c", text: "sr-only" },
      { id: "d", text: "opacity-0" },
    ],
  },
  {
    id: 3,
    question:
      "How do you prevent a form submission from reloading the page in React?",
    options: [
      { id: "a", text: "e.preventDefault()" },
      { id: "b", text: "e.stopPropagation()" },
      { id: "c", text: "return false" },
      { id: "d", text: "form.stop()" },
    ],
  },
];
export default QUESTIONS_DATA;