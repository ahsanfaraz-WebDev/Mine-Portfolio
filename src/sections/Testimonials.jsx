import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through milestones every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // GSAP animation for the banner
  useGSAP(() => {
    gsap.from(".banner-card", {
      xPercent: -100, // Slide in from the left
      opacity: 0, // Fade in
      transformOrigin: "left left",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".banner-card",
        start: "top 80%",
      },
    });
  }, [currentIndex]); // Re-run animation when currentIndex changes

  // Handle manual navigation via dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Learning Journey"
          sub="📚 Key Milestones in My Growth"
        />

        <div className="mt-16">
          {/* Banner Container */}
          <div className="relative w-full">
            {/* Logo */}
            <div className="absolute top-4 left-4 z-10">
              <img
                src="/images/learning-logo.png" // Placeholder path for the logo
                alt="Learning Journey Logo"
                className="w-12 h-12"
              />
            </div>

            {/* Banner Card */}
            <GlowCard
              card={testimonials[currentIndex]}
              className="banner-card w-full"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-white-50 text-sm">{testimonials[currentIndex].mentions}</p>
                </div>
              </div>
            </GlowCard>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-[#915EFF]" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;