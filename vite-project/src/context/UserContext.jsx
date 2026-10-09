import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [email, setEmail] = useState(null);
  const [careerGoal, setCareerGoal] = useState(null);
  const [skillLevel, setSkillLevel] = useState(null);
  const [background, setBackground] = useState(null);
  const [timeCommitment, setTimeCommitment] = useState(null);

  const [questionnaire, setQuestionnaire] = useState([]);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        email,
        setEmail,
        careerGoal,
        setCareerGoal,
        skillLevel,
        setSkillLevel,
        background,
        setBackground,
        timeCommitment,
        setTimeCommitment,
        questionnaire,
        setQuestionnaire,
        response,
        setResponse,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
