import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GenerateIcon from "../assets/icon-generate.png";
import { askGemini } from "./../api/geminiAI";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "./../context/UserContext";

function Gemini() {
  const navigate = useNavigate();
  const {
    careerGoal,
    skillLevel,
    background,
    timeCommitment,
    questionnaire,
    response,
    setResponse,
    loading,
    setLoading,
  } = useAppContext();

  const questionnaireText = questionnaire
    .map((item) => `Question: ${item.question}\nAnswer: ${item.answer}`)
    .join("\n\n");

  console.log(questionnaireText);

  const prompt = `
TASK:
Create a personalized learning path for the learner described below.
The goal is to help them progress from their current skill level toward their career goal.

CONTEXT:
Career Goal: ${careerGoal}
Current Skill Level: ${skillLevel}
Background: ${background}
Time Commitment: ${timeCommitment}

QUESTIONNAIRE RESULTS:
${questionnaireText}

CONSTRAINTS:
- Create a realistic learning path based on the learner's available time.
- Build the curriculum progressively, from foundational concepts to more advanced concepts.
- Avoid teaching skills the learner already demonstrates unless they are important prerequisites.
- Break the learning path into clearly defined stages.
- Each stage should include a clear week label like "Week 1-3".
- Each stage should include specific topics, practical project, and relevant skills.
- Estimate how many hours each stage will take.
- Prioritize skills that are directly relevant to the learner's career goal.
- Do not overwhelm the learner with too many topics at once.
- Explain why each stage is relevant to the career goal.
- Add a short list of recommended starting resources for the learner (3-5).

OUTPUT:
Return ONLY valid JSON in this exact shape:

{
  "title": "Frontend Developer",
  "summary": "...",
  "estimatedDuration": "3-6 month",
  "skillsCovered": 12,
  "stages": [
    {
      "title": "Web fundamentals",
      "weekLabel": "Week 1-3",
      "description": "...",
      "estimatedHours": 20,
      "skills": ["HTML", "CSS", "Git basics"],
      "topics": ["Semantic HTML", "Flexbox", "Version control"],
      "project": "Build a responsive landing page"
    }
  ],
  "recommendedResources": [
    {
      "title":
      "url":
    }
  ]
}

IMPORTANT:
- Return ONLY valid JSON.
- Do not wrap the JSON in markdown code fences.
- Do not include any text before or after the JSON.
- The JSON must be parseable with JSON.parse.
- Keep the title aligned to the career goal.
`;

  async function handleSubmit() {
    if (!questionnaire?.length) return;
    setLoading(true);

    try {
      const answer = await askGemini(prompt);
      setResponse(answer);
    } catch (error) {
      console.error(error);
      setResponse("Connection error.");
    } finally {
      setLoading(false);
      navigate("/path-results");
    }
  }

  useEffect(() => {}, [questionnaire]);

  return (
    <div className="flex flex-col items-center text-left justify-center">
      <div className="container mx-auto px-4 py-8 mt-10 mb-12">
        <button
          type="button"
          className="w-full max-w-md py-4 mt-8 mx-auto rounded-2xl bg-black text-lg text-center text-white flex items-center justify-center gap-2 disabled:opacity-60"
          onClick={handleSubmit}
          disabled={loading || !questionnaire?.length}
        >
          <img src={GenerateIcon} alt="icon" />
          {loading ? "Generating..." : "Generate learning path"}
        </button>
      </div>
      <ReactMarkdown>{response}</ReactMarkdown>
    </div>
  );
}

export default Gemini;
