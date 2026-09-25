import AboutLPG from "../components/AboutLPG";
import { Footer } from "../layout/footer";
import Header from "../layout/Header";
import Hero from "../components/Hero";
import { CareerAssessmentCTA } from "../components/HeroTextContent";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutLPG />
      <CareerAssessmentCTA />
      <Footer />
    </>
  );
};

export default LandingPage;
