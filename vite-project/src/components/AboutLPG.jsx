import React from 'react';

const AboutLPG = () => {
  return (
    <div className="container mx-auto px-4 py-2 text-center mt-4">

      <section className="pt-10 max-w-6xl mx-auto">
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            The AI career path generator
          </h2>
          <p className="text-slate-600 text-lg">
            Three simple steps to go from your goal to a clear, actionable plan.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-20">

          <div className="bg-[#fbe5d6] p-8 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <span className="bg-black text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Your Starting Point</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Add your desired role, skills, interests, and experience — or just describe your dream career. Be as specific as you like!
              </p>
            </div>
          </div>

          <div className="bg-[#ece6ff] p-8 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 21H5v-2h14v2zM12 5V3m0 2a3 3 0 100 6V5zm0 6h4l-1 6H9l-1-6h4z" />
                </svg>
                <span className="bg-black text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Get Your Personalized Plan</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Our AI analyzes your goals and creates a step-by-step learning path with the right skills, resources, and timelines.
              </p>
            </div>
          </div>

          <div className="bg-[#fff2cc] p-8 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
                <span className="bg-black text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Take Action</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Follow your custom curriculum divided into bite-sized, chronological milestones to achieve your targets smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-slate-800">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-amber-200 mb-3"></div>
            <p className="text-slate-700 font-medium">Personalized learning paths tailored to individual needs</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-amber-300 mb-3"></div>
            <p className="text-slate-700 font-medium">Progress tracking and goal setting</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-amber-400 mb-3"></div>
            <p className="text-slate-700 font-medium">Enhanced motivation through clear learning objectives</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-amber-500 mb-3"></div>
            <p className="text-slate-700 font-medium">Time-saving by focusing on relevant content</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-amber-600 mb-3"></div>
            <p className="text-slate-700 font-medium">Integration with various learning platforms</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-amber-700 mb-3"></div>
            <p className="text-slate-700 font-medium">Improved knowledge retention and skill development</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutLPG;