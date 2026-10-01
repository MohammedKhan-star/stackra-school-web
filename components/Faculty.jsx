"use client";

import Image from "next/image";
import { GraduationCap, BookOpen, BriefcaseBusiness } from "lucide-react";

export default function Faculty({ school }) {
  const faculty = school?.faculty || [];

  return (
    <section id="faculty" className="section faculty-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header faculty-header">
          <span className="section-label">OUR FACULTY</span>

          <h2>
            Meet Our
            <span> Dedicated Teachers</span>
          </h2>

          <p>
            Experienced educators committed to academic excellence,
            student development, and a strong learning environment.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="faculty-grid">
          {faculty.map((member, index) => (
            <article className="faculty-card" key={`${member.name}-${index}`}>
              {/* Photo */}
              <div className="faculty-image-wrapper">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="faculty-image"
                />

                <div className="faculty-image-overlay" />

                <div className="faculty-department">
                  {member.department}
                </div>
              </div>

              {/* Content */}
              <div className="faculty-content">
                <span className="faculty-designation">
                  {member.designation}
                </span>

                <h3>{member.name}</h3>

                <div className="faculty-details">
                  <div>
                    <GraduationCap size={17} />
                    <span>{member.qualification}</span>
                  </div>

                  <div>
                    <BookOpen size={17} />
                    <span>{member.department}</span>
                  </div>

                  <div>
                    <BriefcaseBusiness size={17} />
                    <span>{member.designation}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}