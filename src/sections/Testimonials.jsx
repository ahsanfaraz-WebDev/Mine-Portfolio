import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useGSAP(() => {
    // Loop through each milestone card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".milestone-card").forEach((card, index) => {
      // Animate the card coming in from the left and fade in
      gsap.from(card, {
        xPercent: -100, // Move the card in from the left
        opacity: 0, // Make the card invisible at the start
        transformOrigin: "left left", // Set the origin of the animation to the left side
        duration: 1, // Animate over 1 second
        ease: "power2.inOut", // Use a power2 ease-in-out curve
        scrollTrigger: {
          trigger: card, // The card is the trigger element
          start: "top 80%", // Trigger the animation when the card is 80% down the screen
        },
        delay: index * 0.2, // Stagger the animations by 0.2 seconds for each card
      });
    });
  }, []);

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Learning Journey"
          sub="📚 Key Milestones in My Growth"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index} className="milestone-card">
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;