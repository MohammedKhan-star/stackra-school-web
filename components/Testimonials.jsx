"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials({ school }) {
  const testimonials = school.testimonials || [];

  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials.length) {
    return null;
  }

  const activeTestimonial = testimonials[activeIndex];

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="container">

        {/* Header */}
        <div className="section-header testimonials-header">
          <span className="section-label">
            Voices of Our Community
          </span>

          <h2>
            What Our Community <span>Says</span>
          </h2>

          <p>
            Hear from the parents and students who are part of our
            school community.
          </p>
        </div>

        {/* Testimonial */}
        <div className="testimonial-showcase">

          {/* Decorative Quote */}
          <div className="testimonial-large-quote">
            <Quote size={72} strokeWidth={1} />
          </div>

          {/* Left */}
          <div className="testimonial-person">

            <div className="testimonial-photo">
              <Image
                src={activeTestimonial.photo}
                alt={activeTestimonial.name}
                fill
                className="testimonial-photo-image"
                sizes="180px"
              />
            </div>

            <div className="testimonial-person-info">
              <h3>{activeTestimonial.name}</h3>

              <span>{activeTestimonial.role}</span>
            </div>

          </div>

          {/* Right */}
          <div className="testimonial-content">

            <div className="testimonial-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  fill="currentColor"
                />
              ))}
            </div>

            <blockquote>
              “{activeTestimonial.testimonial}”
            </blockquote>

            <div className="testimonial-controls">

              <span className="testimonial-counter">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>

              <div className="testimonial-buttons">

                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>

              </div>
            </div>

          </div>
        </div>

        {/* Indicators */}
        <div className="testimonial-indicators">
          {testimonials.map((testimonial, index) => (
            <button
              key={`${testimonial.name}-${index}`}
              type="button"
              className={`testimonial-indicator ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}