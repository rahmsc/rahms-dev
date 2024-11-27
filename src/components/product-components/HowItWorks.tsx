"use client";

import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Schedule Your Free Consultation",
      description:
        "Book a call to discuss your specific needs. We'll identify the best AI solutions to transform your business.",
      icon: "📞",
    },
    {
      number: "02",
      title: "We Build Your Custom Solution",
      description:
        "I craft a tailored AI workflow or application that addresses your challenges and positions your business for growth.",
      icon: "⚡",
    },
    {
      number: "03",
      title: "Experience Accelerated Growth",
      description:
        "Launch your custom solution and enjoy increased efficiency, automation, and a competitive edge—all with full ownership of your software.",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-background py-32 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white text-center mb-24"
        >
          How It{" "}
          <span className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-transparent bg-clip-text">
            Works
          </span>
        </motion.h2>

        <div className="relative flex flex-col md:block max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`
                group relative bg-navy-800/50 rounded-3xl p-8 border border-cyber-blue/20 
                backdrop-blur-sm hover:border-cyber-blue/40 transition-all duration-300
                md:w-[400px] mb-8 md:mb-0
                ${index === 0 ? "md:ml-0 md:mt-0" : ""}
                ${index === 1 ? "md:ml-[33%] md:-mt-4" : ""}
                ${index === 2 ? "md:ml-[66%] md:-mt-4" : ""}
              `}
            >
              <div className="absolute inset-0 bg-cyber-blue/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {index < 2 && (
                <div className="hidden md:block absolute -right-[20%] top-1/2 w-[25%] h-[2px] bg-gradient-to-r from-cyber-blue/50 to-transparent transform rotate-12" />
              )}

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="bg-cyber-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center border border-cyber-blue/30">
                    <span className="text-cyber-blue font-bold text-2xl">
                      {step.number}
                    </span>
                  </div>
                  <span className="text-4xl">{step.icon}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-mono leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
