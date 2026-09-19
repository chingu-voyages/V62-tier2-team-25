import React from 'react';
import { HERO_CONTENT } from '../data/heroData';
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