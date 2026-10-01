import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function StudentLife({ school }) {
  const activities = school.studentLife || [];

  return (
    <section id="activities" className="student-life-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header student-life-header">
          <span className="section-label">Student Life</span>

          <h2>
            Learning Beyond the <span>Classroom</span>
          </h2>

          <p>
            A vibrant school life gives students opportunities to explore
            their interests, develop confidence, discover new talents,
            build friendships, and become responsible leaders.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="student-life-grid">
          {activities.map((activity, index) => (
            <article
              key={`${activity.title}-${index}`}
              className="student-life-card"
            >
              {/* Image */}
              <div className="student-life-image">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="student-life-image-file"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                <div className="student-life-overlay" />

                <span className="student-life-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="student-life-icon">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              {/* Content */}
              <div className="student-life-content">
                <h3>{activity.title}</h3>

                <p>{activity.description}</p>

                <span className="student-life-link">
                  Explore Activity
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}