import React from 'react';
import leafLogo from '../assets/leaf.png'; 

export default function Header() {
  return (
    <header className="w-full bg-slate-50 border-b border-slate-200 py-6 px-8 shadow-sm">
      <div className="w-[80vw] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="w-[80vw] flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <img 
              src={leafLogo} 
              alt="DevTrajectory Leaf Logo" 
              className="w-7 h-7 object-contain" 
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center">
                <span className="text-black">Dev</span>
                <span className="text-emerald-700">Trajectory</span>
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                AI-Powered Career & Learning Paths for Software Professionals
              </p>
            </div>
          </div>

          <div className="flex items-center text-white text-[20px]">
            <span className="mr-8 hover:cursor-pointer text-black font-medium">Log in</span>
            <button className="hover:cursor-pointer bg-black px-4 py-2 rounded-full text-white font-medium">
              Get started
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}