"use client";

import { ExternalLink, MapPin } from "lucide-react";

export default function GoogleMap({ school }) {
  const map = school?.googleMap;

  if (!map) return null;

  const mapUrl = map.url || "";
  const embedUrl = map.embedUrl || "";

  return (
    <section className="google-map-section">
      <div className="google-map-header">
        <div className="google-map-title">
          <div className="google-map-icon">
            <MapPin size={22} />
          </div>

          <div>
            <span>OUR LOCATION</span>
            <h3>Find Us on the Map</h3>
          </div>
        </div>

        {mapUrl && (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="google-map-link"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <div className="google-map-frame">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={`${school?.schoolName || "School"} location map`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="google-map-placeholder">
            <MapPin size={38} />

            <h4>School Location</h4>

            <p>
              {school?.address ||
                "Please configure the Google Maps location."}
            </p>

            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Location
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}