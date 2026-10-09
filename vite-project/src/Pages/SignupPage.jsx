import SignupForm from "../components/signup-form.jsx";
import plantImage from "../assets/plant.png";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
  
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left hero panel */}
      <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-center gap-16 bg-[#F8DCC1] px-12 py-16 xl:px-16">
        {/* Botón Home */}
        <div className="absolute top-6 left-6">
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
           <h1 className="max-w-md text-4xl leading-tight tracking-tight text-[black] xl:text-5xl">
          <span className="font-bold">Get step by step</span>
          <br />
          <span className="font-bold text-[#86A19A]">
            Learning path generator
          </span>{" "}
          that helps grow their skills
        </h1>
        <Link to="/">
          <img
            src={plantImage}
            alt=""
            className="mx-auto h-78 w-56 object-contain xl:w-72"
          /> 
        </Link>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 flex-col justify-center items-center p-6 md:p-10 lg:w-1/2 bg-[#F0EFED]">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;