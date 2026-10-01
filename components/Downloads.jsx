"use client";

import {
  Download,
  FileText,
  BookOpen,
  ClipboardList,
  ArrowUpRight,
} from "lucide-react";

export default function Downloads({ school }) {
  const downloads = school?.downloads || [];

  if (!downloads.length) return null;

  const getIcon = (title = "") => {
    const value = title.toLowerCase();

    if (value.includes("prospectus")) return BookOpen;
    if (value.includes("admission") || value.includes("application")) {
      return ClipboardList;
    }

    return FileText;
  };

  return (
    <section id="downloads" className="section downloads-section">
      <div className="container">

        {/* Header */}
        <div className="section-header downloads-header">
          <span className="section-label">RESOURCES</span>

          <h2>
            Downloads &
            <span> Resources</span>
          </h2>

          <p>
            Access important school documents, forms and resources
            whenever you need them.
          </p>
        </div>

        {/* Download Grid */}
        <div className="downloads-grid">
          {downloads.map((item, index) => {
            const Icon = getIcon(item.title);

            return (
              <article
                className="download-card"
                key={`${item.title}-${index}`}
              >
                <div className="download-card-top">
                  <div className="download-icon">
                    <Icon size={24} />
                  </div>

                  <span className="download-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="download-content">
                  <h3>{item.title}</h3>

                  {item.description && (
                    <p>{item.description}</p>
                  )}

                  <a
                    href={item.file || item.url || "#"}
                    target={
                      item.file || item.url
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.file || item.url
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="download-link"
                  >
                    <span>Download</span>
                    <Download size={17} />
                  </a>
                </div>

                <div className="download-corner">
                  <ArrowUpRight size={18} />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}