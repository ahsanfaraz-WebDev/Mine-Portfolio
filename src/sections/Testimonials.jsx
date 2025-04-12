import { useState, useEffect } from "react";
import TitleHeader from "../components/TitleHeader";

// Hardcoded testimonials (replace with import if needed)
const testimonials = [
  {
    name: "Started My Software Engineering Journey",
    mentions: "Aug 2022",
    review:
      "Began my BSc in Software Engineering at FAST NUCES, diving into programming fundamentals and software development. This marked the start of my journey as a developer.",
  },
  {
    name: "Completed My First Project",
    mentions: "Mar 2024",
    review:
      "Developed the Movie Recommendation System, my first full-stack project, using Node.js and MongoDB. This project taught me the basics of backend development and API integration.",
  },
  {
    name: "Earned a Web Development Certification",
    mentions: "2024",
    review:
      "Completed The Complete Web Development Bootcamp 2024 on Udemy, enhancing my skills in HTML, CSS, JavaScript, React.js, and other essential web development tools.",
  },
  {
    name: "Built a MERN Stack E-Commerce Platform",
    mentions: "Dec 2024",
    review:
      "Created the Forever E-Commerce Website using the MERN stack (React, Node.js, Express, MongoDB). This project helped me master full-stack development and user authentication.",
  },
  {
    name: "Developed ElevateX for Startups",
    mentions: "Feb 2025",
    review:
      "Built ElevateX, a startup directory platform, using Next.js 15, Sanity, and Tailwind CSS. This project advanced my skills in modern frameworks and scalable architecture.",
  },
  {
    name: "Achieved Academic Excellence",
    mentions: "Aug 2022",
    review:
      "Secured 3rd position in the Sargodha Board Intermediate Examination, scoring 1055/1100. This achievement highlighted my dedication and strong academic foundation.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through testimonials
  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Fallback for empty testimonials
  if (!testimonials || testimonials.length === 0) {
    return <p className="text-white text-center">No testimonials available.</p>;
  }

  return (
    <section id="testimonials" className="flex justify-center items-center p-5 min-h-screen">
      <div className="w-full max-w-4xl">
        <TitleHeader
          title="My Learning Journey"
          sub="📚 Key Milestones in My Growth"
        />

        <div className="mt-16">
          {/* Banner Container */}
          <div className="relative">
            {/* Banner Card */}
            <div
              className="banner-card bg-gray-800 rounded-xl p-10 mb-5 border border-gray-700"
              style={{ minHeight: "200px" }}
            >
              <div className="mb-5">
                <p className="text-gray-300 text-lg">
                  {testimonials[currentIndex].review}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl text-white">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-400 text-sm inline-block px-3 py-1 bg-gray-700 rounded-full">
                  {testimonials[currentIndex].mentions}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-purple-600" : "bg-gray-400"
                  }`}
                  aria-label={`View milestone ${index + 1}`}
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