"use client";
import Image from "next/image";

const AiExpertise = () => {
  return (
    <section
      id="who"
      className="bg-background pt-4 sm:pt-8 lg:pt-4 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Accelerate Growth with{" "}
              <span className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-transparent bg-clip-text">
                SOLVR
              </span>
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-400 font-mono text-base sm:text-lg">
              With over six years in tech startups and entrepreneurship, I
              understand the challenges of scaling without a large team. You
              need effective solutions without unnecessary overhead.
            </p>
            <p className="text-gray-400 font-mono text-base sm:text-lg">
              SOLVR delivers custom AI tools and tailored software to help you
              automate processes, streamline operations, and scale your business
              efficiently.
            </p>
          </div>
        </div>

        {/* Right Column - Professional Profile */}
        <div className="relative flex justify-center mt-8 lg:mt-0">
          {/* Enhanced Glow Effect Background */}
          <div className="absolute inset-0 bg-cyber-blue/5 rounded-3xl blur-2xl sm:blur-3xl animate-pulse-slow" />

          <div
            className="relative bg-navy-800/50 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm 
            border border-cyber-blue/20 w-full max-w-[320px] sm:max-w-[360px] lg:max-w-sm"
          >
            <div className="flex flex-col items-center space-y-6 sm:space-y-8">
              {/* Profile Image with Enhanced Glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-cyber-blue/20 rounded-3xl blur-xl animate-pulse-slow" />
                <div className="relative group">
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue/50 to-purple-400/50 
                    rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"
                  />
                  <Image
                    src="/testimonial-photos/dan.jpg"
                    alt="AI Expert Profile"
                    width={220}
                    height={220}
                    className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-3xl object-cover 
                      border-2 border-cyber-blue/30 transform transition duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>

              {/* Profile Info with Enhanced Typography */}
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Daniel Milad
                </h3>
                <div className="flex flex-col items-center space-y-2">
                  <p
                    className="text-gray-300 font-mono text-sm px-3 py-1 bg-navy-900/50 
                    rounded-full border border-cyber-blue/20"
                  >
                    Software Engineer
                  </p>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Specialising in Web Development & AI Pipelines
                  </p>
                </div>
              </div>

              {/* Enhanced LinkedIn Button */}
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r 
                  from-cyber-blue/10 to-purple-500/10 hover:from-cyber-blue/20 hover:to-purple-500/20 
                  text-cyber-blue px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 
                  border border-cyber-blue/20 hover:border-cyber-blue/30 w-full sm:w-auto justify-center"
                aria-label="Connect on LinkedIn"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="font-medium text-sm group-hover:translate-x-0.5 transition-transform duration-300">
                  Connect on LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiExpertise;
