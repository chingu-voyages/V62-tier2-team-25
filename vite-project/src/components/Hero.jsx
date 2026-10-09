import React from 'react';
import HeroTextContent from './HeroTextContent';
import HeroIllustration from './HeroIllustration';

export default function Hero({ onSignUp, onLoginGuest }) {
  return (
    <section className="w-full bg-[#F0EFED] py-8 px-6 sm:px-12 lg:px-20 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-[#FBEBD7] rounded-3xl py-12 px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-sm">
        <HeroTextContent onSignUp={onSignUp} onLoginGuest={onLoginGuest} />
        <HeroIllustration />
      </div>
    </section>
  );
}