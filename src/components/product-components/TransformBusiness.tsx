"use client";

import { Check } from "lucide-react";

type Solution = {
  title: string;
  subtitle: string;
  description: string;
};

const solutions: Solution[] = [
  {
    title: "Custom Software",
    subtitle: "Built for Your Success",
    description:
      "Get tailor-made AI solutions designed exclusively for your business. No generic tools—just powerful software that drives results.",
  },
  {
    title: "AI Expertise",
    subtitle: "Stay Ahead Effortlessly",
    description:
      "Leverage cutting-edge AI without the steep learning curve. We bring industry-leading insights to keep you ahead of the competition.",
  },
  {
    title: "Scalable Solutions",
    subtitle: "Grow Without Limits",
    description:
      "Experience seamless growth with software that scales as you do. Achieve more while controlling costs and maximizing efficiency.",
  },
];

const TransformBusiness = () => {
  return (
    <section
      id="whatwedo"
      className="bg-background py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-transparent opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Why Choose{" "}
            <span
              className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-transparent bg-clip-text 
              inline-block transform hover:scale-105 transition-transform duration-300"
            >
              SOLVR
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            The Expertise You Need. The Results You Want.
          </p>
        </div>

        {/* Enhanced Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="bg-navy-800/50 rounded-xl p-6 sm:p-8 border border-cyber-blue/20 
                backdrop-blur-sm group hover:bg-navy-800/70 transition-all duration-300
                hover:scale-[1.02] hover:border-cyber-blue/50 hover:shadow-lg hover:shadow-cyber-blue/5
                animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div
                  className="bg-cyber-blue/10 rounded-full p-2.5 sm:p-3 
                    group-hover:bg-cyber-blue/20 transition-all duration-300"
                >
                  <Check
                    className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-blue 
                    group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3
                  className="text-xl sm:text-2xl font-bold text-white
                    group-hover:text-cyber-blue transition-colors duration-300"
                >
                  {solution.title}
                </h3>
                <h4
                  className="text-base sm:text-lg font-semibold 
                  bg-gradient-to-br from-cyber-blue to-cyber-blue/70 
                  text-transparent bg-clip-text"
                >
                  {solution.subtitle}
                </h4>
                <p
                  className="text-gray-400 font-mono text-sm sm:text-base 
                  leading-relaxed tracking-wide"
                >
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformBusiness;
