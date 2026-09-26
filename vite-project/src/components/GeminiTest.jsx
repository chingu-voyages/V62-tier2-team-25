import { useState } from "react";
import { askGemini } from "./../api/geminiAI";
import ReactMarkdown from "react-markdown";

function Gemini() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [careerGoal, setCareerGoal] = useState("Select your path");
  const [skillLevel, setSkillLevel] = useState("");
  const [background, setBackground] = useState("");
  const [timeCommitment, setTimeCommitment] = useState("");

  const prompt = `
TASK:
Create a personalized learning path for the learner described below.
The goal is to help them progress from their current skill level toward their career goal.

CONTEXT:
Career Goal: ${careerGoal}
Current Skill Level: ${skillLevel}
Background: ${background}
Time Commitment: ${timeCommitment}

CONSTRAINTS:
- Create a realistic learning path based on the learner's available time.
- Build the curriculum progressively, from foundational concepts to more advanced concepts.
- Avoid teaching skills the learner already demonstrates unless they are important prerequisites.
- Break the learning path into clearly defined stages.
- Each stage should include specific topics to learn.
- Include practical projects or exercises.
- Estimate how many hours each stage will take.
- Prioritize skills that are directly relevant to the learner's career goal.
- Do not overwhelm the learner with too many topics at once.
- Explain why each stage is relevant to the career goal.
`;

  async function handleSubmit() {
    setLoading(true);

    try {
      const answer = await askGemini(prompt);
      setResponse(answer);
    } catch (error) {
      console.error(error);
      setResponse("Connection error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center text-left justify-center">
      <div className="w-[400px] border-1 p-6 rounded-lg mt-10">
        <h1 className="mb-8 font-semibold text-[20px]">Gemini Test</h1>

        <div className="mb-4">
          <label>Career Goal: </label>

          <select
            value={careerGoal}
            onChange={(e) => setCareerGoal(e.target.value)}
          >
            <option value="Scrum Master">Scrum Master</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Product Owner">Product Owner</option>
            <option value="UX/UI Designer">UX/UI Designer</option>
          </select>
        </div>

        <div className="flex justify-evenly mb-4">
          <label>
            <input
              type="radio"
              value="beginner"
              checked={skillLevel === "beginner"}
              onChange={(e) => setSkillLevel(e.target.value)}
            />
            Beginner
          </label>

          <label>
            <input
              type="radio"
              value="intermediate"
              checked={skillLevel === "intermediate"}
              onChange={(e) => setSkillLevel(e.target.value)}
            />
            Intermediate
          </label>

          <label>
            <input
              type="radio"
              value="advanced"
              checked={skillLevel === "advanced"}
              onChange={(e) => setSkillLevel(e.target.value)}
            />
            Advanced
          </label>
        </div>

        <div className="flex items-center justify-center mb-4">
          <h1 className="flex mr-2">Background:</h1>
          <input
            className="w-full p-2"
            type="text"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label>Time Commitment: </label>

          <select
            value={timeCommitment}
            onChange={(e) => setTimeCommitment(e.target.value)}
          >
            <option value="3-6 Months">3-6 Months</option>
            <option value="1 Year">1 Year</option>
            <option value="2 Years">2 Years</option>
            <option value="5 Years">5 Years</option>
          </select>
        </div>
      </div>
      <button
        className="mt-4 p-2 border-1 rounded-lg hover:cursor-pointer"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask Gemini"}
      </button>

      <ReactMarkdown>{response}</ReactMarkdown>
    </div>
  );
}

export default Gemini;
