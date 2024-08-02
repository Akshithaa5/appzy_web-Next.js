"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { testimonials, Testimonial } from "./Testimonials";

const TestimonialSection: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial: Testimonial = testimonials[currentTestimonialIndex];

  return (
    <section id="testimonial" className="testimonial-section py-12 bg-white">
      <div className="container mx-auto text-center">
        <h4 className="text-yellow-600 text-sm font-bold mb-2 capitalize">Testimonial</h4>
        <h2 className="text-3xl mb-8">
          What Clients Say About <br /> Our App After Using It
        </h2>

        {/* Reviews */}
        <div className="flex justify-center flex-wrap mb-4 gap-16">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={testimonial.id}
              className={`review text-center relative cursor-pointer ${
                index === currentTestimonialIndex ? "highlighted" : ""
              }`}
              onClick={() => setCurrentTestimonialIndex(index)}
            >
              <Image
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="avatar rounded-full w-24 h-24"
                width={96}
                height={96}
              />
              {index === currentTestimonialIndex && (
                <div className="highlighter absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-red-400"></div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="testimonial-text text-2xl mb-4">
          &quot;{currentTestimonial.text}&quot;
        </p>

        {/* Navigation */}
        <div className="flex items-center justify-center mb-8">
          <button className="prev mr-4" onClick={handlePrev} aria-label="Previous testimonial">
            <Image
              src="/assets/images/left-arrow.png"
              alt="Previous"
              className="arrow w-6 h-6"
              width={24}
              height={24}
            />
          </button>
          <div className="user-info text-center">
            <p className="author text-lg mb-2 text-red-500">
              {currentTestimonial.name}
            </p>
            <p className="occupation text-sm text-gray-700">
              {currentTestimonial.occupation}
            </p>
          </div>
          <button className="next ml-4" onClick={handleNext} aria-label="Next testimonial">
            <Image
              src="/assets/images/next-arrow.png"
              alt="Next"
              className="arrow w-6 h-6"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
