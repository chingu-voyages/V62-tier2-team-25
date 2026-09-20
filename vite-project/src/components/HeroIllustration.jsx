import React from 'react';
import heroImage from '../assets/hero-image.png';


export default function HeroIllustration() {
  return (
    <div className="flex justify-center">
      <img
        src={heroImage}
        alt="Illustration of a person working with a laptop and phone"
        className="w-full max-w-lg rounded-2xl object-cover shadow-sm"
      />
    </div>
  );
}