
import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import {motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    nameAndLocation: "Aman Verma — Delhi",
    course: "MERN Stack Development",
    text: "Campus Dost helped me go from zero coding knowledge to building full-stack apps in just 4 months! The live projects and mock interviews really boosted my confidence. I cracked my first job at a tech startup thanks to their placement support!",
    rating: 5
  },
  {
    id: 2,
    nameAndLocation: "Sneha Patil — Pune",
    course: "Data Analyst Program",
    text: "As a B.Com graduate, I never imagined working in analytics. The Campus Dost team made learning tools like Excel, SQL, and Power BI super easy. I now work as a junior data analyst in a fintech company!",
    rating: 5
  },
  {
    id: 3,
    nameAndLocation: "Ravi Teja — Hyderabad",
    course: "Java Full Stack Development",
    text: "What stood out for me was the mentorship. The instructors were patient and knowledgeable. The capstone project helped me showcase my skills, and within a month of finishing, I got placed in an MNC!",
    rating: 5
  },
  {
    id: 4,
    nameAndLocation: "Priya Sharma — Jaipur",
    course: "MERN Stack Development",
    text: "The hackathons and regular coding challenges were so motivating! I loved how practical and up-to-date the course content was. Plus, the internship certificate added value to my resume.",
    rating: 5
  },
  {
    id: 5,
    nameAndLocation: "Mohit Sinha — Kolkata",
    course: "Data Analyst Program",
    text: "Campus Dost gave me the career switch I needed. The course was intense but structured well. The career support team helped with resume building and mock interviews — and yes, I got the job!",
    rating: 5
  }
];

const StarRating = ({ rating }) => (
  <div className="flex flex-col">
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={18}
          className={
            i < rating ? "fill-yellow-700 text-yellow-600" : "text-gray-300"
          }
        />
      ))}
    </div>
    <span className="text-sm text-gray-500 mt-1">
      {rating} out of 5 stars — based on student experience
    </span>
  </div>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  // Auto-rotate every 2 seconds
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleTestimonials = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % testimonials.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  // Animation variants
  const cardVariants = {
    prev: {
      x: "-50%",
      scale: 0.8,
      opacity: 0.5,
      filter: "blur(4px)",
      zIndex: 1,
      transition: { duration: 0.5 }
    },
    active: {
      x: "0%",
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 2,
      transition: { duration: 0.5 }
    },
    next: {
      x: "50%",
      scale: 0.8,
      opacity: 0.5,
      filter: "blur(4px)",
      zIndex: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="bg-blue-500 py-20 px-4 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 ">
          Testimonials
        </h2>

        <div 
          className="relative h-96"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>

          {/* Testimonials container */}
          <div className="relative h-full w-full flex items-center justify-center">
            <AnimatePresence custom={direction} initial={false}>
              {getVisibleTestimonials().map((index, position) => {
                const testimonial = testimonials[index];
                return (
                  <motion.div
                    key={testimonial.id}
                    className="absolute w-full max-w-md bg-white text-black rounded-2xl shadow-lg p-6 cursor-pointer"
                    variants={cardVariants}
                    initial={position === 0 ? "prev" : position === 2 ? "next" : "active"}
                    animate={position === 1 ? "active" : position === 0 ? "prev" : "next"}
                    exit={direction > 0 ? "prev" : "next"}
                  >
                    <StarRating rating={testimonial.rating} />
                    <p className="mt-4 text-lg leading-relaxed text-gray-700">
                      "{testimonial.text}"
                    </p>
                    <p className="mt-6 font-semibold text-yellow-600">
                      {testimonial.nameAndLocation}<br></br>
                      <span className="text-gray-500 text-md"> {testimonial.course}</span>
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-900 scale-125" : "bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;