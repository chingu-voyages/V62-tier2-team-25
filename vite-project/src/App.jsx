import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LearningPathPage from "./Pages/LearningPathPage";
import PathResultsPage from "./Pages/PathResultsPage";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learning-path" element={<LearningPathPage />} />
        <Route path="/path-results" element={<PathResultsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
