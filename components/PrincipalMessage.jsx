import { Quote } from "lucide-react";

export default function PrincipalMessage({ school }) {
  const principal = school.principal;

  return (
    <section className="principal-section section">
      <div className="container">
        <div className="principal-grid">

          {/* PORTRAIT */}
          <div className="principal-photo-column">
            <div className="principal-photo-frame">
              <img
                src={principal.photo}
                alt={`${principal.name}, ${principal.designation}`}
              />

              <div className="principal-photo-border" />

              <div className="principal-name-card">
                <span>{principal.designation}</span>
                <strong>{principal.name}</strong>
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          <div className="principal-content">

            <span className="section-label">
              Leadership
            </span>

            <h2 className="section-title">
              {principal.title}
            </h2>

            <div className="gold-line" />

            <div className="principal-quote">
              <Quote className="quote-icon" size={46} />

              <blockquote>
                {principal.message}
              </blockquote>
            </div>

            <div className="principal-signature">
              <strong>{principal.name}</strong>
              <span>{principal.designation}</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}