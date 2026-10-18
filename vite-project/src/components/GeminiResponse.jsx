import { useState, useEffect } from "react";
import { useAppContext } from "./../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Gemini from "./GeminiPrompt";

// const parseGeminiJson = (rawResponse) => {
//   if (!rawResponse || typeof rawResponse !== "string") return null;

//   let cleaned = rawResponse.trim();

//   cleaned = cleaned
//     .replace(/^```(?:json)?/i, "")
//     .replace(/```$/i, "")
//     .trim();

//   const firstBrace = cleaned.indexOf("{");
//   const lastBrace = cleaned.lastIndexOf("}");

//   if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
//     cleaned = cleaned.slice(firstBrace, lastBrace + 1);
//   }

//   try {
//     return JSON.parse(cleaned);
//   } catch (error) {
//     console.error("Gemini response is not valid JSON:", error);
//     return null;
//   }
// };

const fallbackResources = [
  "freeCodeCamp — Responsive Web Design certification",
  "The Odin Project — Foundations course",
  "React's official docs — Learn React tutorial",
];

const GeminiResponse = () => {
  const { response, loading } = useAppContext();
  const navigate = useNavigate();

  const [completedStages, setCompletedStages] = useState(() => {
    const saved = sessionStorage.getItem("completedStages");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("completedStages", JSON.stringify(completedStages));
  }, [completedStages]);

  useEffect(() => {
    if (response) {
      sessionStorage.setItem(
        "ai_path_response",
        typeof response === "string" ? response : JSON.stringify(response),
      );
    }
  }, [response]);

  let data = null;
  try {
    const rawData = response || sessionStorage.getItem("ai_path_response");
    if (rawData) {
      data = typeof rawData === "string" ? JSON.parse(rawData) : rawData;
    }
  } catch (error) {
    console.error("Error parsing JSON response:", error);
  }

  const toggleStage = (index) => {
    setCompletedStages((prev) =>
      prev.includes(index)
        ? prev.filter((stageIndex) => stageIndex !== index)
        : [...prev, index],
    );
  };

  const handleExportPDF = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-emerald-600 border-t-transparent"></div>
        <h1 className="mt-4 text-xl font-semibold text-slate-800">
          Creating your career path...
        </h1>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 flex flex-col items-center text-center justify-center mt-10">
            Gemini AI is experiencing high demand. Please generate the path
            again or try again later.
          </h2>
          <Gemini />
        </div>
      </div>
    );
  }

  const stages = Array.isArray(data.stages) ? data.stages : [];
  const recommendedResources = Array.isArray(data.recommendedResources)
    ? data.recommendedResources
    : fallbackResources;
  const skillsCount =
    data.skillsCovered ||
    stages.reduce(
      (acc, stage) =>
        acc + (Array.isArray(stage.skills) ? stage.skills.length : 0),
      0,
    );
  const completedCount = stages.filter((_, index) =>
    completedStages.includes(index),
  ).length;

  const progressPercentage =
    stages.length > 0 ? Math.round((completedCount / stages.length) * 100) : 0;

  const handleCreateNewPath = () => {
    sessionStorage.removeItem("ai_path_response");
    sessionStorage.removeItem("completedStages");

    navigate("/learning-path");
  };

  return (
    <div className="max-w-[1206px] mx-auto px-6 py-8 text-slate-900 font-sans">
      <div className="mb-6 flex justify-start">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 transition-all"
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </Link>
      </div>

      <div className="rounded-[18px] bg-[black] px-6 py-5 text-white shadow-xl">
        <p className="text-base font-medium text-slate-200">
          Your personalized path
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">
          {data.title || "Your Career Path"}
        </h1>

        <div className="mt-8 flex flex-wrap gap-8 text-left">
          <div>
            <div className="text-2xl font-black">
              {data.estimatedDuration || "N/A"}
            </div>
            <div className="text-xs uppercase tracking-[0.12em] text-slate-300">
              Timeline
            </div>
          </div>
          <div>
            <div className="text-2xl font-black">{stages.length}</div>
            <div className="text-xs uppercase tracking-[0.12em] text-slate-300">
              Stages
            </div>
          </div>
          <div>
            <div className="text-2xl font-black">{skillsCount}</div>
            <div className="text-xs uppercase tracking-[0.12em] text-slate-300">
              Skills covered
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Your progress</h2>
          </div>

          <span className="text-xl font-bold text-[#27665C]">
            {progressPercentage}%
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="h-3 w-full overflow-hidden rounded-full bg-slate-200"
          role="progressbar"
          aria-label="Roadmap completion"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPercentage}
        >
          <div
            className="h-full rounded-full bg-[#27665C] transition-all duration-500 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Completed stages count */}
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-slate-600">
            {completedCount} of {stages.length} stages completed
          </span>

          <span className="font-medium text-[#27665C]">
            {completedCount === stages.length && stages.length > 0
              ? "Complete!"
              : `${stages.length - completedCount} remaining`}
          </span>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900">
          Your roadmap
        </h2>

        <div className="relative ml-3 border-l-2 border-slate-300 pl-8">
          {stages.map((stage, index) => {
            const isCompleted = completedStages.includes(index);

            return (
              <div
                key={`${stage.title}-${index}`}
                className="relative pb-8 last:pb-0"
              >
                <button
                  type="button"
                  onClick={() => toggleStage(index)}
                  aria-label={
                    isCompleted
                      ? `Mark ${stage.title} as incomplete`
                      : `Mark ${stage.title} as complete`
                  }
                  aria-pressed={isCompleted}
                  className={`absolute -left-[3.65rem] top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full text-base font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 focus-visible:outline-none ${
                    isCompleted ? "bg-[#27665C]" : "bg-black"
                  }`}
                >
                  {isCompleted ? "✓" : index + 1}
                </button>
                <div
                  className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 ease-in-out ${
                    isCompleted ? "opacity-20" : "opacity-100"
                  }`}
                >
                  <div className="mb-3 text-sm text-slate-500">
                    {stage.weekLabel || `Week ${index + 1}`}
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-700">
                    {stage.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {(stage.skills || []).map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-full bg-[#dfeae5] px-3 py-1 text-xs font-semibold text-[#1d5d50]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 rounded-[18px] border border-[#e7dcc6] bg-[#f4ead6] p-5">
        <h3 className="text-3xl font-black text-slate-900">
          Recommended starting resources
        </h3>
        <ul className="mt-4 space-y-2 text-blue-800">
          {recommendedResources.map((resource, index) => (
            <li key={index} className="flex items-start gap-2">
              <a href={resource.url}>
                {resource.title} ({resource.url})
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap justify-between gap-4">
        <button
          type="button"
          onClick={handleExportPDF}
          className="no-print rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:cursor-pointer"
        >
          Export as PDF
        </button>
        <button
          type="button"
          onClick={handleCreateNewPath}
          className="no-print rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 hover:cursor-pointer"
        >
          Create New Path
        </button>
      </div>
    </div>
  );
};

export default GeminiResponse;
