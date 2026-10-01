"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime;
    const duration = 1600;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(value * easedProgress)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats({ statistics }) {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statistics.map((stat, index) => (
            <div
              className="stat-item"
              key={`${stat.label}-${index}`}
            >
              <div className="stat-number">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              <div className="stat-line" />

              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}