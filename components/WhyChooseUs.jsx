"use client";

import {
  GraduationCap,
  Users,
  Building2,
  Laptop,
  Trophy,
  Heart,
  ArrowUpRight,
} from "lucide-react";

const icons = {
  GraduationCap,
  Users,
  Building2,
  Laptop,
  Trophy,
  Heart,
};

export default function WhyChooseUs({ school }) {
  return (
    <section className="why-section section">
      <div className="container">

        <div className="section-header">
          <span className="section-label">
            Why Choose Us
          </span>

          <h2 className="section-title">
            An Environment Designed
            <br />
            for Excellence
          </h2>

          <p className="section-description">
            We bring together strong academics, experienced
            educators, modern facilities and meaningful
            opportunities for every student.
          </p>
        </div>

        <div className="why-grid">
          {school.whyChooseUs.map((item, index) => {
            const Icon = icons[item.icon] || GraduationCap;

            return (
              <article
                className="why-card"
                key={`${item.title}-${index}`}
              >
                <div className="why-card-top">
                  <span className="why-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="why-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="why-card-bottom">
                  <span />

                  <ArrowUpRight size={18} />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}