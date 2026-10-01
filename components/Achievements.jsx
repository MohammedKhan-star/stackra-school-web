import { Trophy, ArrowUpRight } from "lucide-react";

export default function Achievements({ school }) {
  const achievements = school.achievements || [];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">

        {/* Header */}
        <div className="section-header achievements-header">
          <span className="section-label achievements-label">
            Achievements & Recognition
          </span>

          <h2>
            Celebrating <span>Excellence</span>
          </h2>

          <p>
            We celebrate the dedication, talent, and achievements of our
            students, faculty, and school community.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <article
              key={`${achievement.title}-${index}`}
              className="achievement-card"
            >
              {/* Top */}
              <div className="achievement-top">
                <div className="achievement-icon">
                  <Trophy size={23} strokeWidth={1.7} />
                </div>

                <span className="achievement-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="achievement-content">
                <span className="achievement-year">
                  {achievement.year || "Achievement"}
                </span>

                <h3>{achievement.title}</h3>

                <p>{achievement.description}</p>
              </div>

              {/* Footer */}
              <div className="achievement-footer">
                <span>Recognition</span>

                <ArrowUpRight size={18} />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}