"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero({ school }) {
  const slides = school.hero.images;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((previous) => (previous + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent(
      (previous) =>
        (previous - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <section className="hero" id="home">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="hero-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={slide.image}
            alt={slide.title}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 7,
              ease: "linear",
            }}
          />

          <div className="hero-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="hero-content container">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-copy"
        >
          <span className="hero-label">
            <span />
            {school.hero.label}
          </span>

          <h1>
            {slide.title}
          </h1>

          <p>
            {slide.description}
          </p>

          <div className="hero-actions">
            <a
              href="#about"
              className="btn btn-primary"
            >
              {school.hero.primaryButton}

              <ArrowRight size={17} />
            </a>

            <a
              href="#admissions"
              className="btn btn-outline"
            >
              {school.hero.secondaryButton}
            </a>
          </div>
        </motion.div>
      </div>

      {/* PREVIOUS / NEXT */}
      <div className="hero-controls">
        <button
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* INDICATORS */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={
              index === current
                ? "hero-indicator active"
                : "hero-indicator"
            }
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* SLIDE NUMBER */}
      <div className="hero-counter">
        <span>
          {String(current + 1).padStart(2, "0")}
        </span>

        <div />

        <span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* SCROLL */}
      <div className="hero-scroll">
        <span>Scroll to explore</span>

        <div />
      </div>
    </section>
  );
}