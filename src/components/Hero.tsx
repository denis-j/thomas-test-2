"use client"

import { Squares } from "./Squares"

export function Hero() {
  return (
    <main className="relative w-full h-screen bg-gray-50 overflow-hidden">
      {/* Squares Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#F3F3F3"
          squareSize={40}
          hoverFillColor="#74F5A1"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Section - Hero Title and Button */}
        <div className="flex-1 flex flex-col justify-center pt-20 px-12 relative z-10 pointer-events-none">
          <div className="w-full">
            
            {/* Green Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="30" 
                  height="26" 
                  viewBox="0 0 30 26" 
                  fill="none"
                  className="w-full h-full"
                >
                  <path d="M11.4339 0H30L21.5637 13.7437C17.4382 20.7976 8.25091 26 0 26V6.68672L11.4339 0Z" fill="#74F5A1"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-800 uppercase tracking-wider">
                B2B Marketing Agency
              </span>
            </div>

            {/* Main Hero Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-12 leading-[0.9] max-w-6xl">
              We build{" "}
              <em className="font-['Indie_Flower'] italic">high-performing</em>{" "}
              marketing engines for B2B Brands
            </h1>
          </div>
        </div>

        {/* Bottom Section - Subtitle */}
        <div className="pb-8 px-12 relative z-10 pointer-events-none">
          <div className="max-w-lg">
            <p className="text-xl md:text-2xl text-gray-700 font-bold leading-relaxed">
              We build, optimize, and scale marketing engines that generate pipeline and improve marketing ROI.
            </p>
          </div>

  <div className="flex items-center gap-3 mt-8">
    <span className="text-2xl md:text-xl font-bold text-gray-900">
      Discover more
    </span>
    <button
      className="w-12 h-12 flex items-center justify-center rounded-md bg-[#74F5A1] hover:bg-[#5be88e] transition-colors pointer-events-auto"
      aria-label="Scroll down"
      type="button"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="#171717"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 7v10M12 17l-4-4m4 4l4-4" />
      </svg>
    </button>
  </div>

        </div>
      </div>

                                     {/* Plant Image - Positioned */}
        <div className="absolute right-0 top-150 transform -translate-y-1/2 -translate-x-20 z-5 pointer-events-none">
          <img 
            src="/plant-bg.png" 
            alt="Plant decoration" 
            className="w-[900px] h-auto opacity-90"
          />
        </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-5"></div>
    </main>
  )
} 