import { Link } from "react-router-dom";
import GenerateIcon from "../assets/icon-generate.png";

const LearningPathPage = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <div className="container lg:w-305 mx-auto px-4 py-8 mt-32">
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
            className="lg:w-300 border border-slate-600 rounded-2xl p-4 text-lg"
          />
        </div>

        {/* Career goal  */}
        <div className="flex flex-col gap-4 mt-8 text-lg">
          <label htmlFor="career-goal">
            Your career goal <span className="text-red-500">*</span>
          </label>
          <select
            name="career-goal"
            id="career-goal"
            disabled=""
            className="lg:w-xl border border-slate-600 rounded-2xl p-4 text-lg"
          >
            <option value="scrum-master" disabled="disabled">
              Select your path
            </option>
            <option value="scrum-master">Scrum Master</option>
            <option value="frontend-developer">Frontend Developer</option>
            <option value="backend-developer">Backend Developer</option>
            <option value="fullstack-developer">Fullstack Developer</option>
            <option value="devops-engineer">Devops Engineer</option>
            <option value="software-engineer">Software Engineer</option>
          </select>
          <input type="email" />
        </div>

        {/* skill level  */}
        <div>
          <p className="text-lg">
            {" "}
            Skill level <span className="text-red-500">*</span>
          </p>
          <div>
            <div>
              <input type="radio" name="skill-level" value="beginner" />
              <span id="radio">Beginner</span>
            </div>
            <input type="radio" name="skill-level" value="intermediate" />
            Intermediate
            <input type="radio" name="skill-level" value="advanced" /> Advanced
          </div>
        </div>

        {/* Background  */}
        <div className="flex flex-col gap-4 mt-8 text-lg">
          <label htmlFor="email">Background</label>
          <input
            type="text"
            name="email"
            placeholder="eg. Frontend Developer, HTML, CSS, Node js etc."
            className="lg:w-300 border border-slate-600 rounded-2xl p-4 text-lg"
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
            className="lg:w-xl border border-slate-600 rounded-2xl p-4 text-lg"
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
    </>
  );
};

export default LearningPathPage;
