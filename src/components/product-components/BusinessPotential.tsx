"use client";

import { Brain, Square } from "lucide-react";

const challenges = [
  "Building a custom chatbot to engage your customers",
  "Automating repetitive tasks to save time",
  "Integrating AI into your existing workflows",
  "Unlocking hidden insights from your data",
];

const BusinessPotential = () => {
  return (
    <section
      className="bg-background py-16 sm:py-16 lg:py-8 pb-4 sm:pb-8 lg:pb-4 px-4 sm:px-6 lg:px-8"
      aria-labelledby="business-potential-title"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-32 items-center">
        {/* SVG Container - Increased sizes by 50% */}
        <div className="flex justify-center order-2 lg:order-1 mt-8 lg:mt-0">
          <div
            className="relative w-full 
            max-w-[450px] h-[450px] 
            sm:w-[525px] sm:h-[525px] 
            lg:w-[675px] lg:h-[675px]"
          >
            {/* SVG content remains the same, but with responsive adjustments */}
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full relative z-10"
            >
              <defs>
                <filter
                  id="nodeGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="0 0 0 0 0   0 1 0 0 0  0 0 1 0 0  0 0 0 8 -4"
                  />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <path id="flowPath1" d="M40,100 C60,60 140,140 160,100" />
                <path id="flowPath2" d="M40,100 C60,140 140,60 160,100" />

                <filter
                  id="brainGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="0 0 0 0 0.5   0 1 0 0 1  0 0 1 0 0.5  0 0 0 10 -5"
                  />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection Lines */}
              <g className="connection-paths">
                {/* Main Paths */}
                <path
                  d="M30,100 L70,100 C80,100 90,60 100,60 L140,60"
                  className="stroke-cyan-400/30"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M70,100 C80,100 90,140 100,140 L140,140"
                  className="stroke-emerald-400/30"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="20s"
                    repeatCount="indefinite"
                    begin="-5s"
                  />
                </path>

                {/* Additional Connection Paths */}
                <path
                  d="M70,100 C80,100 85,80 100,80"
                  className="stroke-cyan-400/30"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="20s"
                    repeatCount="indefinite"
                    begin="-7s"
                  />
                </path>
                <path
                  d="M70,100 C80,100 85,120 100,120"
                  className="stroke-emerald-400/30"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="20s"
                    repeatCount="indefinite"
                    begin="-9s"
                  />
                </path>

                {/* Connecting to End Node */}
                <path
                  d="M140,60 C150,60 160,100 170,100"
                  className="stroke-cyan-400/30"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="20s"
                    repeatCount="indefinite"
                    begin="-10s"
                  />
                </path>
                <path
                  d="M140,140 C150,140 160,100 170,100"
                  className="stroke-emerald-400/30"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="20s"
                    repeatCount="indefinite"
                    begin="-15s"
                  />
                </path>
                <path
                  d="M100,80 C120,80 140,90 170,100"
                  className="stroke-cyan-400/30"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="20s"
                    repeatCount="indefinite"
                    begin="-12s"
                  />
                </path>
                <path
                  d="M100,120 C120,120 140,110 170,100"
                  className="stroke-emerald-400/30"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="20s"
                    repeatCount="indefinite"
                    begin="-17s"
                  />
                </path>
              </g>

              {/* Nodes */}
              <g filter="url(#nodeGlow)">
                {/* Start Node */}
                <circle
                  cx="30"
                  cy="100"
                  r="8"
                  className="fill-cyan-500/20 stroke-cyan-400"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="r"
                    values="8;9;8"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Junction Node */}
                <circle
                  cx="70"
                  cy="100"
                  r="10"
                  className="fill-emerald-500/20 stroke-emerald-400"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="r"
                    values="10;11;10"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="-0.5s"
                  />
                </circle>

                {/* Middle Layer Nodes */}
                <circle
                  cx="100"
                  cy="60"
                  r="12"
                  className="fill-emerald-500/20 stroke-emerald-400"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="r"
                    values="12;14;12"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="-1s"
                  />
                </circle>

                <circle
                  cx="100"
                  cy="80"
                  r="8"
                  className="fill-cyan-500/20 stroke-cyan-400"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="r"
                    values="8;9;8"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="-1.5s"
                  />
                </circle>

                <circle
                  cx="100"
                  cy="120"
                  r="8"
                  className="fill-emerald-500/20 stroke-emerald-400"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="r"
                    values="8;9;8"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="-2s"
                  />
                </circle>

                <circle
                  cx="100"
                  cy="140"
                  r="12"
                  className="fill-cyan-500/20 stroke-cyan-400"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="r"
                    values="12;14;12"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="-2.5s"
                  />
                </circle>

                {/* Right Layer Nodes */}
                <circle
                  cx="140"
                  cy="60"
                  r="10"
                  className="fill-emerald-500/20 stroke-emerald-400"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="r"
                    values="10;12;10"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="-3s"
                  />
                </circle>

                <circle
                  cx="140"
                  cy="140"
                  r="10"
                  className="fill-cyan-500/20 stroke-cyan-400"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="r"
                    values="10;12;10"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="-3.5s"
                  />
                </circle>

                {/* Brain Icon with Glow */}
                <g transform="translate(158.5, 88)">
                  <Brain
                    className="w-8 h-8 text-emerald-400 animate-pulse"
                    strokeWidth={1.2}
                  >
                    <animate
                      attributeName="opacity"
                      values="0.9;1.5;0.9"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </Brain>
                  {/* Add glowing effect behind the brain */}
                  {/* <circle
                    r="12"
                    cx="16"
                    cy="16"
                    className="fill-emerald-500/20"
                    filter="url(#brainGlow)"
                  >
                    <animate
                      attributeName="r"
                      values="12;14;12"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle> */}
                </g>
                <g transform="translate(170,100)">
                  <circle
                    r="16"
                    className="fill-gradient-to-br from-cyan-500/20 to-emerald-500/20 stroke-emerald-400"
                    strokeWidth="1.5"
                  >
                    <animate
                      attributeName="r"
                      values="16;18;16"
                      dur="4s"
                      repeatCount="indefinite"
                      begin="-4s"
                    />
                  </circle>
                </g>
              </g>

              {/* Flowing Particles */}
              {[...Array(8)].map((_, i) => (
                <circle
                  key={`particle-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    i
                  }`}
                  r="1.5"
                  className="fill-cyan-400"
                >
                  <animateMotion
                    path="M30,100 L70,100 C80,100 90,60 100,60 L140,60 C150,60 160,100 170,100"
                    dur={`${15 + i * 2}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href="#flowPath1" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="4s"
                    repeatCount="indefinite"
                    begin={`-${i * 2}s`}
                  />
                </circle>
              ))}
              {[...Array(8)].map((_, i) => (
                <circle
                  key={`particle2-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    i
                  }`}
                  r="1.5"
                  className="fill-emerald-400"
                >
                  <animateMotion
                    path="M30,100 L70,100 C80,100 90,140 100,140 L140,140 C150,140 160,100 170,100"
                    dur={`${15 + i * 2}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href="#flowPath2" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="4s"
                    repeatCount="indefinite"
                    begin={`-${i * 2}s`}
                  />
                </circle>
              ))}
            </svg>

            {/* Ambient Glow - Adjusted for larger size */}
            <div className="absolute inset-0 -z-10 opacity-50 lg:opacity-100">
              <div className="absolute inset-0 bg-cyan-500/5 blur-3xl lg:blur-[4rem] rounded-full animate-[pulse_10s_ease-in-out_infinite]" />
              <div className="absolute inset-12 lg:inset-16 bg-emerald-500/3 blur-2xl lg:blur-[3rem] rounded-full animate-[pulse_15s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>

        {/* Content Container - Improved spacing and text sizing */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-1 lg:order-2">
          <h2
            id="business-potential-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
          >
            Integrating AI on Your
            <br />
            <span className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-transparent bg-clip-text">
              To-Do List?
            </span>
          </h2>

          <ul className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 lg:mt-8">
            {challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex items-start space-x-3 sm:space-x-4"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-5 sm:w-6 h-5 sm:h-6 mt-1">
                  <Square className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />
                </span>
                <span className="block text-gray-200 text-base sm:text-lg">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-400 font-mono text-sm sm:text-md italic mt-4 sm:mt-6">
            Ready to check these off your list?{" "}
            <a
              href="#bookcall"
              className="text-cyber-blue underline hover:text-cyber-blue/80 transition-colors
                focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 rounded"
            >
              Let&apos;s talk.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessPotential;
