export default function AnnouncementBar({ announcement }) {
  return (
    <div className="announcement-bar">
      <div className="announcement-inner">
        <span className="announcement-dot" />

        <span>{announcement}</span>

        <span className="announcement-link">
          View Details
        </span>
      </div>
    </div>
  );
}