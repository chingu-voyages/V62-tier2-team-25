import { Link, useNavigate } from "react-router-dom";
import GenerateIcon from "../assets/icon-generate.png";
import { useState } from "react";
import SkillLevel, { SkillGroup } from "../components/SkillLevel";
import { useAppContext } from "./../context/UserContext";

const LearningPathPage = () => {
  const navigate = useNavigate();
  const context = useAppContext();

  const isAuthenticated = Boolean(
    localStorage.getItem("authToken") || localStorage.getItem("isAuthenticated")
  );

  const [formData, setFormData] = useState({
    level: "beginner",
    email: "",
    path: "",
    background: "",
    time: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const { setCareerGoal, setSkillLevel, setBackground, setTimeCommitment } =
    useAppContext();

  // Errors State
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle Input Changes unificados
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error dynamically when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate Required Fields
  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.path) {
      newErrors.path = "Please select a career path.";
    }

    if (!formData.time) {
      newErrors.time = "Please select your weekly time commitment.";
    }

    return newErrors;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }
    try {
      setCareerGoal(formData.path);
      setSkillLevel(formData.level);
      setBackground(formData.background);
      setTimeCommitment(formData.time);
      setErrors({});
      setIsSubmitted(true);
      console.log("Form submitted successfully:", formData);

      navigate("/questions");
    } catch (error) {
      console.error("submission failed", error);
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-6">
        {/* Main container */}
        <div className="flex justify-between items-center">
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

          {/* Logout button when an active session appears */}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-black bg-white border border-red-200 rounded-xl shadow-sm hover:bg-red-100 transition-all cursor-pointer"
            >
              Log out
            </button>
          )}
        </div>

        {/* Title and description */}
        <div className="w-full mx-auto px-4 py-8 mt-32 mb-8">
          <h1 className="text-4xl font-bold pb-2">Lets map your path</h1>
          <p>
            A few quick questions so we can build a plan that actually fits you.
            Skip anything you're not sure about.
          </p>
        </div>
        {isSubmitted && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
            Please wait while we generate your learning path.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mb-18">
          {/* EMAIL  */}
          <div className="flex flex-col gap-4 mt-8 text-lg">
            <label htmlFor="email">
              Whats your email? <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="example@gmail.com"
              className={`lg:w-300 border-2 rounded-2xl p-4 text-lg ${
                errors.email ? "border-red-500" : "border-slate-400"
              }`}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-rose-500 text-xs font-medium mt-1.5 flex items-center gap-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* GOAL / PATH  */}
          <div className="flex flex-col gap-4 my-8 text-lg">
            <label htmlFor="path">
              Your career goal <span className="text-red-500">*</span>
            </label>
            <select
              name="path"
              id="path"
              value={formData.path}
              className={`lg:w-xl border-2 rounded-2xl p-4 text-lg ${
                errors.path ? "border-red-500" : "border-slate-400"
              }`}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select your path
              </option>
              <option value="Scrum Master">Scrum Master</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Product Owner">Product Owner</option>
              <option value="UX/UI Designer">UX/UI Designer</option>
            </select>
            {errors.path && (
              <p className="text-rose-500 text-xs font-medium mt-1.5 flex items-center gap-1">
                {errors.path}
              </p>
            )}
          </div>

          {/* SKILL LEVEL  */}
          <div>
            <p className="text-lg">Skill level</p>
            <div className="flex gap-4 mt-4 text-lg">
              <SkillGroup
                value={formData.level}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, level: e.target.value }))
                }
              >
                <SkillLevel value="beginner">Beginner</SkillLevel>
                <SkillLevel value="intermediate">Intermediate</SkillLevel>
                <SkillLevel value="advanced">Advanced</SkillLevel>
              </SkillGroup>
            </div>
          </div>

          {/* BACKGROUND  */}
          <div className="flex flex-col gap-4 mt-8 text-lg">
            <label htmlFor="background">Background</label>
            <input
              type="text"
              name="background"
              value={formData.background}
              placeholder="eg. Frontend Developer, HTML, CSS, Node js etc."
              className="lg:w-300 border-2 border-slate-400 rounded-2xl p-4 text-lg"
              onChange={handleChange}
            />
          </div>

          {/* TIME  */}
          <div className="flex flex-col gap-4 mt-8 text-lg">
            <label htmlFor="time">
              Time commitment <span className="text-red-500">*</span>
            </label>
            <select
              name="time"
              id="time"
              value={formData.time}
              className={`lg:w-xl border-2 rounded-2xl p-4 text-lg ${
                errors.time ? "border-red-500" : "border-slate-400"
              }`}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select time commitment
              </option>
              <option value="1 month">1 month</option>
              <option value="3 months">3 months</option>
              <option value="6 months">6 months</option>
              <option value="8 months">8 months</option>
              <option value="12 months">12 months</option>
              <option value="18 months">18 months</option>
            </select>
            {errors.time && (
              <p className="text-rose-500 text-xs font-medium mt-1.5 flex items-center gap-1">
                {errors.time}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-4 mt-8 mx-auto rounded-2xl bg-black text-lg text-center text-white cursor-pointer"
            >
              <div className="flex items-center justify-center gap-2">
                <img src={GenerateIcon} alt="icon" />
                Continue
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LearningPathPage;