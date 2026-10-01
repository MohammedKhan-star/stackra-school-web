import { ArrowUpRight, BookOpen } from "lucide-react";

export default function Academics({ school }) {
  return (
    <section className="academics-section section" id="academics">
      <div className="container">

        <div className="section-header">
          <span className="section-label">
            Academics
          </span>

          <h2 className="section-title">
            Learning Designed
            <br />
            for Every Stage
          </h2>

          <p className="section-description">
            A carefully structured academic journey that
            develops knowledge, curiosity, confidence and
            independent thinking.
          </p>
        </div>

        <div className="academics-grid">
          {school.academics.map((academic, index) => (
            <article
              className="academic-card"
              key={`${academic.title}-${index}`}
            >
              <div className="academic-image">
                <img
                  src={academic.image}
                  alt={academic.title}
                />

                <div className="academic-image-overlay" />

                <span className="academic-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="academic-content">
                <div className="academic-heading">
                  <div className="academic-icon">
                    <BookOpen size={18} />
                  </div>

                  <h3>{academic.title}</h3>
                </div>

                <p>
                  {academic.description}
                </p>

                <div className="academic-subjects">
                  {academic.subjects.map((subject) => (
                    <span key={subject}>
                      {subject}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="academic-link"
                >
                  Learn More

                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}