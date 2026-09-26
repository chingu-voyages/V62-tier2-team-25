import React from 'react';
import { HERO_CONTENT, CAREER_ASSESSMENT_CONTENT } from '../data/heroData';
import { Link } from 'react-router-dom';

export default function HeroTextContent({ onSignUp, onLoginGuest }) {
  return (
    <div className="flex flex-col items-start space-y-6">
      <div className="inline-flex items-center space-x-2 bg-[#E6F4EA] border border-[#CEEAD6] px-3 py-1 rounded-full text-xs font-medium text-[#137333]">
        <span className="w-2 h-2 rounded-full bg-[#137333]"></span>
        <span>{HERO_CONTENT.badgeText}</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F1F1F] leading-tight">
        {HERO_CONTENT.headline} <span className="text-[#137333]">{HERO_CONTENT.highlightedText}</span>
      </h1>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
        {HERO_CONTENT.description}
      </p>

      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full">
        <Link to="/signup"
          onClick={onSignUp}
          className="w-full sm:w-auto bg-[#1F1F1F] hover:bg-black text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-md cursor-pointer"
        >
          {HERO_CONTENT.primaryAction}
        </Link>
        <Link to="/learning-path" 
          onClick={onLoginGuest}
          className="w-full sm:w-auto text-gray-700 hover:text-black font-medium px-6 py-3 transition-colors duration-200 cursor-pointer"
        >
          {HERO_CONTENT.secondaryAction}
        </Link>
      </div>
    </div>
  );
}

export function CareerAssessmentCTA() {
  return (
    <section className="w-full py-16 px-4 flex justify-center">
      <div className="w-full max-w-3xl bg-[#fdfaf5] border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm text-center flex flex-col items-center">
        
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 mb-6">
          {CAREER_ASSESSMENT_CONTENT.badgeText}
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight max-w-xl mb-4">
          {CAREER_ASSESSMENT_CONTENT.headline} <span className="text-emerald-700">{CAREER_ASSESSMENT_CONTENT.highlightedText}</span> {CAREER_ASSESSMENT_CONTENT.headlineEnd}
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-lg mb-8">
          {CAREER_ASSESSMENT_CONTENT.description}
        </p>

        <button 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            console.log("Botón presionado, sin redirección aún");
          }}
          className="w-full max-w-md bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-3.5 px-6 rounded-xl shadow-sm transition-colors cursor-pointer text-base inline-block text-center"
        >
          {CAREER_ASSESSMENT_CONTENT.ctaButton}
        </button>

        <p className="text-xs text-slate-500 mt-3">
          {CAREER_ASSESSMENT_CONTENT.disclaimer}
        </p>

        <div className="flex items-center gap-2 mt-6 text-xs text-slate-600 font-medium">
          <div className="flex -space-x-1.5">
            <span className="w-5 h-5 rounded-full bg-rose-400 inline-block border-2 border-white"></span>
            <span className="w-5 h-5 rounded-full bg-blue-500 inline-block border-2 border-white"></span>
            <span className="w-5 h-5 rounded-full bg-amber-400 inline-block border-2 border-white"></span>
          </div>
          <span>{CAREER_ASSESSMENT_CONTENT.socialProof}</span>
        </div>
      </div>
    </section>
  );
}