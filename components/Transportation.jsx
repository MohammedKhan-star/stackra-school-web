"use client";

import {
  BusFront,
  MapPinned,
  ShieldCheck,
  Clock3,
} from "lucide-react";

export default function Transportation({ school }) {
  const transport = school?.transport;

  if (!transport) return null;

  return (
    <section id="transportation" className="section transport-section">
      <div className="container">
        <div className="transport-layout">

          {/* Left Content */}
          <div className="transport-content">
            <span className="section-label">SAFE & RELIABLE</span>

            <h2>
              School
              <span> Transportation</span>
            </h2>

            <p className="transport-description">
              Safe, reliable and convenient transportation facilities
              designed to support students and families.
            </p>

            <div className="transport-status">
              <div className="transport-status-icon">
                <BusFront size={25} />
              </div>

              <div>
                <strong>
                  {transport.available ? "Transport Available" : "Transport Unavailable"}
                </strong>

                <span>
                  Safe transportation facilities for students.
                </span>
              </div>
            </div>
          </div>

          {/* Right Information */}
          <div className="transport-card">

            <div className="transport-card-header">
              <div className="transport-main-icon">
                <BusFront size={28} />
              </div>

              <div>
                <span>TRANSPORT FACILITY</span>
                <h3>Convenient School Routes</h3>
              </div>
            </div>

            <div className="transport-info-list">

              <div className="transport-info-item">
                <div className="transport-info-icon">
                  <MapPinned size={20} />
                </div>

                <div>
                  <span>Routes</span>
                  <strong>
                    {transport.routes || "Multiple Routes"}
                  </strong>
                </div>
              </div>

              <div className="transport-info-item">
                <div className="transport-info-icon">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <span>Safety</span>
                  <strong>
                    Student Safety Focused
                  </strong>
                </div>
              </div>

              <div className="transport-info-item">
                <div className="transport-info-icon">
                  <Clock3 size={20} />
                </div>

                <div>
                  <span>Service</span>
                  <strong>
                    School Day Transportation
                  </strong>
                </div>
              </div>

            </div>

            <div className="transport-note">
              <strong>Transportation Enquiry</strong>
              <p>
                Contact the school office for route details,
                availability and admission-related transportation
                information.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}