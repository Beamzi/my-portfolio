"use client";
import HeroCanvas from "@/components/HeroCanvas"; // Ensure this import is correct

export default function Hero() {
  return (
    <div className="relative h-screen bg-amber-50">
      <HeroCanvas />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center">
        <div className="px-6 pt-14 lg:px-8">
          <h1 className="pointer-events-none relative z-10 text-5xl font-semibold tracking-tight text-gray sm:text-7xl drop-shadow-2xl">
            Hi, I'm James Day
          </h1>
          <p className="pointer-events-none relative z-10 mt-8 text-lg font-medium text-gray-500 sm:text-xl drop-shadow-md">
            A Full Stack Developer
          </p>
          <button className="relative z-10 bg-amber-600/80 px-4 py-4 mt-8 shadow-lg inset-shadow-sm inset-shadow-amber-950/50 rounded-sm ring-2">
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
}
