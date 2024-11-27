"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Working with Dan has been transformative. The custom AI workflows he developed for us have revolutionised our operations. Tasks that used to consume hours are now automated and completed in seconds. It has allowed for our content creation abilities to skyrocket!",
      author: "Peter Frost",
      role: "Founder",
      company: "HyperbaricHQ",
      rating: 5,
      image: "/testimonial-photos/pete.jpg",
      linkedin: "https://www.linkedin.com/in/peter-frost-06a12317b/",
    },
    {
      quote:
        "Dan helped reshape our approach to AI and blockchain integration. His deep insights weren't just technical—they were fundamental in our entire product strategy. This has allowed for us to scale our platform faster and with more confidence.",
      author: "Alex Flamsteed",
      role: "CEO",
      company: "Temple Technology",
      rating: 5,
      image: "/testimonial-photos/alex.jpg",
      linkedin: "https://www.linkedin.com/in/alexflamsteed/",
    },
    {
      quote:
        "I was overwhelmed with processing a massive amount of data for an upcoming pitch. Working with Dan, I was about to turn what seemed impossible into a streamlined process. His speed and attention to detail were outstanding. In the end, I was able to meet my deadline with ease.",
      author: "Hannah Biddell",
      role: "Lead Researcher",
      company: "Emergence Benefactors",
      rating: 5,
      image: "/testimonial-photos/hannah.jpg",
      linkedin: "https://www.linkedin.com/in/hannah-biddell/",
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="bg-background py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center 
          mb-8 sm:mb-12 lg:mb-16"
        >
          Client{" "}
          <span
            className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-transparent 
            bg-clip-text inline-block transform hover:scale-105 transition-transform duration-300"
          >
            Testimonials
          </span>
        </h2>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative rounded-xl p-[2px] bg-gradient-to-r from-transparent 
                via-cyber-blue to-transparent hover:via-cyber-blue/80 transition-all duration-500
                animate-border-travel bg-[length:200%_200%]
                animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Enhanced Glow Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue 
                  to-transparent rounded-xl animate-border-travel bg-[length:200%_200%] 
                  blur-sm opacity-50"
              />

              {/* Card Content */}
              <div
                className="relative flex flex-col h-[400px] sm:h-[450px] lg:h-[500px] 
                bg-card-dark rounded-xl p-6 sm:p-8"
              >
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-blue mb-4 sm:mb-6 flex-shrink-0" />

                {/* Testimonial Text */}
                <p
                  className="text-gray-400 font-mono text-sm sm:text-base flex-grow 
                  overflow-y-auto scrollbar-thin scrollbar-thumb-cyber-blue/50 
                  scrollbar-track-transparent pr-2"
                >
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="flex-shrink-0 pt-6 sm:pt-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Profile Image */}
                    <Link
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden 
                        ring-2 ring-cyber-blue hover:ring-4 transition-all duration-300
                        flex-shrink-0 focus:outline-none focus:ring-4"
                      aria-label={`Visit ${testimonial.author}'s LinkedIn profile`}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/fallback-avatar.jpg";
                        }}
                      />
                    </Link>

                    {/* Author Details */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-base sm:text-lg truncate">
                        {testimonial.author}
                      </p>
                      <p className="text-cyber-blue font-medium text-sm sm:text-base truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm truncate">
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-0.5 flex-shrink-0">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
