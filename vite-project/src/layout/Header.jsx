import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-slate-900 border-b border-slate-800 py-6 px-8 shadow-sm">
      <div className="w-[80vw] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="w-[80vw] flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              DevTrajectory
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              AI-Powered Career & Learning Paths for Software Professionals
            </p>
          </div>
          <div className="flex items-center text-white text-[20px]">
            <h1 className="mr-8 hover:cursor-pointer">Log in</h1>
            <h1 className="hover:cursor-pointer bg-black px-4 py-2 rounded-4xl">
              Get started
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
