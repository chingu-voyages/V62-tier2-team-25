import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LearningPathPage from "./Pages/LearningPathPage";
import PathResultsPage from "./Pages/PathResultsPage";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import SignupPage from "./Pages/SignupPage";
import { QuestionsPage } from "./Pages/QuestionsPage";

function App() {
  return (
    <div className="min-h-screen bg-[#F0EFED] w-full overflow-x-hidden flex flex-col m-0 p-0">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learning-path" element={<LearningPathPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/path-results" element={<PathResultsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
