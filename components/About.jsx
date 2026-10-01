import { ArrowUpRight, CalendarDays } from "lucide-react";

export default function About({ school }) {
  const about = school.about;

  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="about-grid">

          {/* IMAGE */}
          <div className="about-image-column">
            <div className="about-image-frame">
              <img
                src={about.image}
                alt={`${school.schoolName} campus`}
              />

              <div className="about-image-accent" />
            </div>

            <div className="about-established">
              <CalendarDays size={19} />

              <div>
                <span>Established</span>
                <strong>{school.establishedYear}</strong>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="about-content">

            <span className="section-label">
              About Our School
            </span>

            <h2 className="section-title">
              Building Futures Through
              <span> Meaningful Education</span>
            </h2>

            <div className="gold-line" />

            <p className="about-introduction">
              {about.introduction}
            </p>

            <p className="about-philosophy">
              {about.philosophy}
            </p>

            <div className="about-details">

              <div className="about-detail">
                <span>Vision</span>
                <p>{about.vision}</p>
              </div>

              <div className="about-detail">
                <span>Mission</span>
                <p>{about.mission}</p>
              </div>

            </div>

            <a
              href="#academics"
              className="btn btn-dark"
            >
              {about.readMoreText}

              <ArrowUpRight size={17} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}