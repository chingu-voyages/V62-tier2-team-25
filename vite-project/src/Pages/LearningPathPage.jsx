import { Link } from "react-router-dom";
import GenerateIcon from "../assets/icon-generate.png";
import { useState } from "react";
import  SkillLevel, { SkillGroup } from "../components/SkillLevel";

const LearningPathPage = () => {
  const [level, setLevel] = useState("");
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 transition-all"
        >
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
      </div>

      <form action="">
        <div className="container lg:w-305 mx-auto px-4 py-8 mt-32 mb-32">
          <h1 className="text-4xl font-bold pb-2">Lets map your path</h1>
          <p>
            A few quick questions so we can build a plan that actually fits you.
            Skip anything you're not sure about.
          </p>

          <div className="flex flex-col gap-4 mt-8 text-lg">
            <label htmlFor="email">
              Whats your email? <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="lg:w-300 border-2 border-slate-400 rounded-2xl p-4 text-lg"
            />
          </div>

          {/* Career goal  */}
          <div className="flex flex-col gap-4 my-8  text-lg">
            <label htmlFor="career-goal">
              Your career goal <span className="text-red-500">*</span>
            </label>
            <select
              name="career-goal"
              id="career-goal"
              disabled=""
              className="lg:w-xl border border-2 border-slate-400 rounded-2xl p-4 text-lg"
            >
              <option value="scrum-master" disabled="disabled">
                Select your path
              </option>
              <option value="scrum-master">Scrum Master</option>
              <option value="backend-developer">Software Developer</option>
              <option value="fullstack-developer">Product Owner</option>
              <option value="devops-engineer">UX Designer</option>
            </select>
          </div>

          {/* skill level  */}
          <div>
            <p className="text-lg">
              Skill level
            </p>
            <div className="flex gap-4 mt-4 text-lg">
              <SkillGroup
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <SkillLevel value="beginner">Beginner</SkillLevel>
                <SkillLevel value="intermeit diate">Intermediate</SkillLevel>
                <SkillLevel value="advanced">Advanced</SkillLevel>
              </SkillGroup>
            </div>
          </div>

          {/* Background  */}
          <div className="flex flex-col gap-4 mt-8 text-lg">
            <label htmlFor="background">Background</label>
            <input
              type="text"
              name="background"
              placeholder="eg. Frontend Developer, HTML, CSS, Node js etc."
              className="lg:w-300 border-2 border-slate-400 rounded-2xl p-4 text-lg"
            />
          </div>

          {/* Career goal  */}
          <div className="flex flex-col gap-4 mt-8 text-lg">
            <label htmlFor="career-goal">
              Time commitment <span className="text-red-500">*</span>
            </label>
            <select
              name="career-goal"
              id="career-goal"
              disabled=""
              className="lg:w-xl border border-2 border-slate-400 rounded-2xl p-4 text-lg"
            >
              <option value="1">1 months</option>
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="8">8 months</option>
              <option value="12">12 months</option>
              <option value="18">18 months</option>
            </select>
            <input type="email" />
          </div>

          <Link to="/path-results">
            <div className=" py-4 mt-8 mx-auto rounded-2xl bg-black text-lg text-center  text-white ">
              <div className="flex items-center justify-center gap-2">
                <img src={GenerateIcon} alt="icon" />
                Generate my path
              </div>
            </div>
          </Link>
        </div>
      </form>
    </>
  );
};

export default LearningPathPage;
