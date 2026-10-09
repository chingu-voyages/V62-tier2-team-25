import { useMemo, useState } from "react";
import { useAppContext } from "./../context/UserContext";

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
  const [completedStages, setCompletedStages] = useState([]);

  // const data = useMemo(() => parseGeminiJson(response), [response]);

  const data = JSON.parse(response);

  console.log(data);

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
          <h2 className="text-xl font-semibold text-slate-800">
            Your personalized path
          </h2>
          <p className="mt-4 text-slate-600">
            We could not parse the AI response yet. Please generate the path
            again.
          </p>
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

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-900">
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
                  className={`absolute -left-[2.35rem] top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white text-sm font-bold text-white shadow-sm transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                    isCompleted ? "bg-emerald-600" : "bg-[#1f7a65]"
                  }`}
                >
                  {isCompleted ? "✓" : index + 1}
                </button>
                <div
                  className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 ease-in-out ${
                    isCompleted ? "opacity-40" : "opacity-100"
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

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={handleExportPDF}
          className="no-print rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          Export as PDF
        </button>
      </div>
    </div>
  );
};

export default GeminiResponse;
