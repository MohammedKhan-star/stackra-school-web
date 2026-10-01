import { Eye, Target } from "lucide-react";

export default function VisionMission({ school }) {
  const { vision, mission } = school.visionMission;

  return (
    <section className="vision-mission-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            Our Purpose
          </span>

          <h2 className="section-title">
            Guided by Vision.
            <br />
            Driven by Mission.
          </h2>

          <p className="section-description">
            We create an environment where academic growth,
            character and purpose come together.
          </p>
        </div>

        <div className="vision-mission-grid">

          {/* VISION */}
          <article className="vision-mission-card">
            <div className="vision-mission-icon">
              <Eye size={28} strokeWidth={1.5} />
            </div>

            <div>
              <span className="vision-mission-number">
                01
              </span>

              <h3>{vision.title}</h3>

              <div className="gold-line" />

              <p>{vision.description}</p>
            </div>
          </article>

          {/* MISSION */}
          <article className="vision-mission-card">
            <div className="vision-mission-icon">
              <Target size={28} strokeWidth={1.5} />
            </div>

            <div>
              <span className="vision-mission-number">
                02
              </span>

              <h3>{mission.title}</h3>

              <div className="gold-line" />

              <p>{mission.description}</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}