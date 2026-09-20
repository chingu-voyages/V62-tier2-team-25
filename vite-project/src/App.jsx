import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LearningPathPage from "./Pages/LearningPathPage";
import PathResultsPage from "./Pages/PathResultsPage";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/learning-path" element={<LearningPathPage />} />
      <Route path="/path-results" element={<PathResultsPage />} />
     </Routes>
    </>
  );
}

export default App;
