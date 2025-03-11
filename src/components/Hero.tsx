"use client";
import HeroCanvas from "@/components/HeroCanvas"; // Ensure this import is correct

export default function Hero() {
  return (
    <div className="relative h-screen bg-amber-50">
      {/* HeroCanvas is placed in the background with absolute positioning */}
      <HeroCanvas />

      {/* Content stays above the canvas */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center">
        <div className="px-6 pt-14 lg:px-8">
          <h1 className="pointer-events-none relative z-10 text-5xl font-semibold tracking-tight text-gray sm:text-7xl">
            Hi, I'm James Day
          </h1>
          <p className="pointer-events-none relative z-10 mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            A Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
}
