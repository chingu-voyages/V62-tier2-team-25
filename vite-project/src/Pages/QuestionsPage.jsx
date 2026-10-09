import { useState } from "react";
import IconGreen from "../assets/icon-green.png";
import QUESTIONS_DATA from "../data/mockQuestions";
import questions from "../data/questions";
import { Link } from "react-router-dom";
import { useAppContext } from "./../context/UserContext";
import Gemini from "@/components/GeminiPrompt";

export const QuestionsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [finalPayload, setFinalPayload] = useState(null);

  const { careerGoal, questionnaire, setQuestionnaire } = useAppContext();

  console.log(questionnaire);

  const roleQuestions = questions.filter(
    (question) => question.role === careerGoal,
  );

  console.log(roleQuestions);

  const totalQuestions = roleQuestions.length;

  // 1. Safe boundary check for Review Screen index
  const isReviewScreen = currentIndex === totalQuestions;

  // 2. Safe parsing of active question data
  const currentQuestion = !isReviewScreen ? roleQuestions[currentIndex] : null;
  const currentSelection = currentQuestion ? answers[currentQuestion.id] : null;

  const handleSelectOption = (optionId) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    const questionnaireResults = roleQuestions.map((question) => {
      const selectedOptionId = answers[question.id];

      const selectedOption = question.options.find(
        (option) => option.id === selectedOptionId,
      );

      return {
        questionId: question.id,
        question: question.question,
        answerId: selectedOptionId,
        answer: selectedOption?.text || null,
      };
    });

    setQuestionnaire(questionnaireResults);
    setIsSubmitted(true);
    setFinalPayload(answers);
    console.log(answers);
  };

  // const handleRestart = () => {
  //   setAnswers({});
  //   setCurrentIndex(0);
  //   setIsSubmitted(false);
  //   setFinalPayload(null);
  // };

  // SCREEN A: Success Screen
  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Submission Successful!
        </h2>
        <p className="text-gray-600 mb-6">Your answers have been stored.</p>
        <Gemini />
        {/* <pre className="text-left text-xs bg-gray-800 text-green-400 p-4 rounded-xl overflow-x-auto mb-6">
          {JSON.stringify(finalPayload, null, 2)}
        </pre> */}
        {/* <button
          onClick={handleRestart}
          className="px-6 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition"
        >
          Try Again
        </button> */}
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <section>
          <Link
            to="/learning-path"
            className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 transition-all"
          >
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </Link>
          
          {/* PROGRESS BAR  */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mb-18">
            <div className="w-full md:w-261 bg-[#9D9B9B] rounded-full h-8">
              <div
                className="max-w-full w-[20%] bg-[#337563] rounded-full h-8 transition-all duration-300"
                style={{ width: `${(currentIndex / totalQuestions) * 100}%` }}
              ></div>
            </div>

            <div className="w-1/4">
              <p>
                Question{" "}
                <span>
                  {isReviewScreen
                    ? "Review"
                    : `${currentIndex + 1} of ${totalQuestions}`}
                </span>
              </p>
            </div>
          </div>
        </section>

        <main>
          {/* SCREEN B: Review Screen (Early Return inside layout context) */}
          {isReviewScreen ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Review Your Answers
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Take a moment to make sure you are confident with your
                selections before submitting.
              </p>

              <div className="space-y-4 mb-8">
                {roleQuestions.map((q) => {
                  const selectedOpt = q.options.find(
                    (opt) => opt.id === answers[q.id],
                  );
                  return (
                    <div
                      key={q.id}
                      className="p-4 bg-gray-50 border border-gray-200 rounded-xl"
                    >
                      <p className="text-lg font-semibold text-gray-800 mb-1">
                        {q.id}. {q.question}
                      </p>
                      <p className="text-sm text-blue-600 font-medium bg-blue-50/50 inline-block px-2.5 py-0.5 rounded border border-blue-100">
                        Selected: {selectedOpt ? selectedOpt.text : "None"}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handlePrev}
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition"
                >
                  Go Back & Change
                </button>
                <button
                  onClick={handleSubmitQuiz}
                  className="flex-1 px-4 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 shadow-md transition"
                >
                  Submit Answers
                </button>
              </div>
            </div>
          ) : (
            // SCREEN C: Active Question Phase
            <div>
              {/* Green tag  */}
              <div className="max-w-41 px-3 py-1 flex items-center justify-between bg-[#E2ECDA] border-2 border-[#B8CDB9] rounded-2xl mb-12">
                <img src={IconGreen} alt="icon-green" />
                <p className="text-[#337563] text-lg font-semibold">
                  Working style
                </p>
              </div>

              {/* Quesstion  */}
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold pb-3">
                  {currentQuestion.question}
                </h2>
                <p className="md:text-lg">
                  Pick the one that feels most true — there's no wrong answer
                </p>
              </div>

              {/* ANSWERS  */}
              <div className="space-y-5 my-12 ">
                {currentQuestion.options.map((option) => {
                  const isChecked = currentSelection === option.id;
                  return (
                    <label
                      key={option.id}
                      className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all select-none
                              ${
                                isChecked
                                  ? "border-[#337563] bg-[#E2ECDA] text-[#337563] font-medium"
                                  : "border-gray-400 bg-white text-gray-600 hover:border-gray-600 hover:bg-gray-50/50"
                              }
                            `}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={option.id}
                        checked={isChecked}
                        onChange={() => handleSelectOption(option.id)}
                        className="sr-only"
                      />

                      <span className="md:text-lg">{option.text}</span>
                    </label>
                  );
                })}
              </div>
              {/* BUTTONS  */}
              <div className="flex items-center justify-between min-h-12">
                {currentIndex > 0 ? (
                  <button
                    onClick={handlePrev}
                    className="px-5 py-2.5 border border-black text-lg font-medium rounded-xl hover:bg-black hover:text-white cursor-pointer transition"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {currentSelection && (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-black text-white text-lg font-medium rounded-xl hover:bg-black shadow-lg curp transition"
                  >
                    {currentIndex === totalQuestions - 1
                      ? "Review Answers"
                      : "Continue"}
                  </button>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};
