"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Play,
  X,
  ExternalLink,
} from "lucide-react";

export default function VideoGallery({ school }) {
  const videos = school.videos || [];

  const [selectedVideo, setSelectedVideo] = useState(null);

  const featuredVideo = videos[0];
  const remainingVideos = videos.slice(1);

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";

    try {
      const parsedUrl = new URL(url);

      if (parsedUrl.hostname.includes("youtu.be")) {
        return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
      }

      if (parsedUrl.hostname.includes("youtube.com")) {
        const videoId = parsedUrl.searchParams.get("v");

        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`;
        }
      }

      return url;
    } catch {
      return "";
    }
  };

  const openVideo = (video) => {
    if (!video.url) return;

    setSelectedVideo(video);
  };

  return (
    <>
      <section className="video-gallery-section">
        <div className="container">

          {/* Header */}
          <div className="section-header video-gallery-header">
            <span className="section-label video-section-label">
              Video Gallery
            </span>

            <h2>
              Experience Our School <span>In Motion</span>
            </h2>

            <p>
              Take a closer look at our campus, celebrations, activities,
              and memorable moments through our school videos.
            </p>
          </div>

          {videos.length > 0 && (
            <div className="video-gallery-layout">

              {/* Featured Video */}
              {featuredVideo && (
                <article className="featured-video-card">

                  <div className="featured-video-media">

                    <Image
                      src={featuredVideo.thumbnail}
                      alt={featuredVideo.title}
                      fill
                      className="featured-video-image"
                      sizes="(max-width: 900px) 100vw, 65vw"
                    />

                    <div className="video-dark-overlay" />

                    <span className="video-type-badge">
                      {featuredVideo.type || "Video"}
                    </span>

                    <button
                      type="button"
                      className={`video-play-button ${
                        !featuredVideo.url ? "disabled" : ""
                      }`}
                      onClick={() => openVideo(featuredVideo)}
                      disabled={!featuredVideo.url}
                      aria-label={`Play ${featuredVideo.title}`}
                    >
                      <Play
                        size={27}
                        fill="currentColor"
                      />
                    </button>

                    <div className="featured-video-info">
                      <span>Featured Video</span>

                      <h3>{featuredVideo.title}</h3>
                    </div>

                  </div>

                </article>
              )}

              {/* Other Videos */}
              <div className="video-list">
                {remainingVideos.map((video, index) => (
                  <article
                    className="video-list-card"
                    key={`${video.title}-${index}`}
                  >
                    <div className="video-list-thumbnail">

                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="video-list-image"
                        sizes="(max-width: 900px) 100vw, 35vw"
                      />

                      <div className="video-list-overlay" />

                      <button
                        type="button"
                        className={`small-video-play ${
                          !video.url ? "disabled" : ""
                        }`}
                        onClick={() => openVideo(video)}
                        disabled={!video.url}
                        aria-label={`Play ${video.title}`}
                      >
                        <Play
                          size={17}
                          fill="currentColor"
                        />
                      </button>

                    </div>

                    <div className="video-list-content">
                      <span>
                        {video.type || "Video"}
                      </span>

                      <h3>{video.title}</h3>

                      {video.url ? (
                        <button
                          type="button"
                          onClick={() => openVideo(video)}
                          className="watch-video-button"
                        >
                          Watch Video
                        </button>
                      ) : (
                        <span className="video-coming-soon">
                          Video coming soon
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>

            </div>
          )}

        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onClick={() => setSelectedVideo(null)}
        >
          <button
            type="button"
            className="video-modal-close"
            onClick={() => setSelectedVideo(null)}
            aria-label="Close video"
          >
            <X size={25} />
          </button>

          <div
            className="video-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="video-frame">

              {getYouTubeEmbedUrl(selectedVideo.url) ? (
                <iframe
                  src={getYouTubeEmbedUrl(selectedVideo.url)}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="video-unavailable">
                  <Play size={35} />
                  <p>Video unavailable</p>
                </div>
              )}

            </div>

            <div className="video-modal-footer">
              <div>
                <span>{selectedVideo.type || "Video"}</span>
                <h3>{selectedVideo.title}</h3>
              </div>

              {selectedVideo.url && (
                <a
                  href={selectedVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-external-link"
                >
                  Open
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}