import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export default function NewsEvents({ school }) {
  const events = school.events || [];

  return (
    <section id="news-events" className="news-events-section">
      <div className="container">

        {/* Header */}
        <div className="section-header news-events-header">
          <span className="section-label">News & Events</span>

          <h2>
            What's Happening <span>At School</span>
          </h2>

          <p>
            Stay connected with the latest academic, sporting, cultural,
            and community events happening across our school.
          </p>
        </div>

        {/* Events */}
        <div className="news-events-grid">
          {events.map((event, index) => (
            <article
              className="news-event-card"
              key={`${event.title}-${index}`}
            >
              {/* Image */}
              <div className="news-event-image">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="news-event-image-file"
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />

                <div className="news-event-overlay" />

                {/* Category */}
                <span className="news-event-category">
                  {event.category}
                </span>

                {/* Date */}
                <div className="news-event-date">
                  <CalendarDays size={15} />
                  <span>{event.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="news-event-content">
                <h3>{event.title}</h3>

                <p>{event.description}</p>

                <button className="news-event-link">
                  View Event
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="news-events-footer">
          <a href="#contact" className="news-events-view-all">
            View All Events
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}