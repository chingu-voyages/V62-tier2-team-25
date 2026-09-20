import React from 'react';
import HeroTextContent from './HeroTextContent';
import HeroIllustration from './HeroIllustration';

export default function Hero({ onSignUp, onLoginGuest }) {
  return (
    <section className="bg-[#FDF6ED] py-16 px-6 md:px-12 lg:px-20 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <HeroTextContent onSignUp={onSignUp} onLoginGuest={onLoginGuest} />
        <HeroIllustration />
      </div>
    </section>
  );
}