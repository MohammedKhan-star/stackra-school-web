import {
  MessageCircle,
  FileText,
  ClipboardCheck,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const stepIcons = [
  MessageCircle,
  FileText,
  ClipboardCheck,
  GraduationCap,
];

export default function AdmissionProcess({ school }) {
  const process = school.admissions?.process || [];

  return (
    <section className="admission-process-section">
      <div className="container">

        <div className="section-header admission-process-header">
          <span className="section-label">Admission Journey</span>

          <h2>
            Your Journey to <span>Our School</span>
          </h2>

          <p>
            Our admission process is designed to be simple, transparent,
            and convenient for parents and students.
          </p>
        </div>

        <div className="admission-steps">
          {process.map((step, index) => {
            const Icon = stepIcons[index] || ClipboardCheck;

            return (
              <div
                className="admission-step"
                key={`${step.number}-${index}`}
              >
                {index < process.length - 1 && (
                  <div className="admission-connector">
                    <ArrowRight size={18} />
                  </div>
                )}

                <div className="admission-step-top">
                  <div className="admission-step-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <span className="admission-step-number">
                    {step.number || String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="admission-step-content">
                  <span className="admission-step-label">
                    Step {index + 1}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="admission-process-cta">
          <div>
            <span>Have questions about admission?</span>

            <strong>
              Our admissions team is ready to help.
            </strong>
          </div>

          <a
            href="#contact"
            className="admission-process-cta-button"
          >
            Contact Admissions
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}