import AboutLPG from "../components/AboutLPG";
import { Footer } from "../layout/footer";
import Header from "../layout/Header";
import Hero from "../components/Hero";
import { CareerAssessmentCTA } from "../components/HeroTextContent";

const LandingPage = () => {
  return (
    /* General container that applies the #F0EFED background to the entire page and centers the content at 1201px */
    <div className="min-h-screen bg-[#F0EFED] w-full flex flex-col items-center py-6 px-4 sm:px-8">
      {/*      Wrapper with the Figma width (1201px) where all your sections are vertically aligned */}
      <div className="w-full max-w-[1201px] flex flex-col space-y-8">
        <Header />
        <Hero />
        <AboutLPG />
        <CareerAssessmentCTA />
        <Footer />
      </div>

    </div>
  );
};

export default LandingPage;