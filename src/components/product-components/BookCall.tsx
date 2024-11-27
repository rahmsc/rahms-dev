"use client";

import CalComEmbed from "./CalComEmbed";
import { motion } from "framer-motion";

const BookCall = () => {
  return (
    <section
      id="bookcall"
      className="relative bg-gradient-to-b from-background to-background/95 
        py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -right-1/2 w-64 sm:w-96 h-64 sm:h-96 
          bg-cyber-blue/10 rounded-full blur-2xl sm:blur-3xl"
        />
        <div
          className="absolute -bottom-1/2 -left-1/2 w-64 sm:w-96 h-64 sm:h-96 
          bg-cyber-blue/5 rounded-full blur-2xl sm:blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto text-center"
      >
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 lg:mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white 
            leading-tight sm:leading-tight lg:leading-tight"
          >
            Ready to{" "}
            <span
              className="text-cyber-blue bg-clip-text text-transparent 
              bg-gradient-to-r from-cyber-blue to-cyber-blue/70 
              inline-block transform hover:scale-105 transition-transform duration-300"
            >
              Get Started?
            </span>
          </h2>

          <p
            className="text-gray-400 font-mono text-base sm:text-lg md:text-xl 
            max-w-2xl mx-auto px-4 sm:px-6"
          >
            Book a free call to see what options work for you and your business
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 bg-black/20 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl 
            backdrop-blur-sm border border-white/5 shadow-2xl 
            mx-auto max-w-full sm:max-w-[95%] md:max-w-[90%]"
        >
          <div className="w-full overflow-hidden">
            <CalComEmbed />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BookCall;
