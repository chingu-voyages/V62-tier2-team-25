import AboutLPG from "../components/AboutLPG";
import { Footer } from "../layout/footer";
import Hero from "../components/Hero";
import { CareerAssessmentCTA } from "../components/HeroTextContent";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <AboutLPG />
      <CareerAssessmentCTA />
      <Footer />
    </>
  );
};

export default LandingPage;
