import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Facilities({ school }) {
  const facilities = school.facilities || [];

  return (
    <section id="facilities" className="facilities-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header facilities-header">
          <span className="section-label">Our Facilities</span>

          <h2>
            Designed for <span>Better Learning</span>
          </h2>

          <p>
            Our campus provides modern, safe, and thoughtfully designed
            facilities that support academic excellence, creativity,
            technology, sports, and overall student development.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <article
              key={`${facility.title}-${index}`}
              className="facility-card"
            >
              {/* Image */}
              <div className="facility-image-wrapper">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="facility-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="facility-overlay" />

                <span className="facility-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="facility-arrow">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="facility-content">
                <h3>{facility.title}</h3>

                <p>{facility.description}</p>

                <div className="facility-line" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}