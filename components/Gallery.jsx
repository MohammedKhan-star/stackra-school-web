"use client";

import { useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

export default function Gallery({ school }) {
  const gallery = school.gallery || [];

  const categories = [
    "All",
    ...new Set(gallery.map((item) => item.category)),
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  const selectedImage =
    selectedIndex !== null ? filteredGallery[selectedIndex] : null;

  const showPrevious = () => {
    if (!filteredGallery.length) return;

    setSelectedIndex((current) =>
      current === 0 ? filteredGallery.length - 1 : current - 1
    );
  };

  const showNext = () => {
    if (!filteredGallery.length) return;

    setSelectedIndex((current) =>
      current === filteredGallery.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="container">

          {/* Header */}
          <div className="section-header gallery-header">
            <span className="section-label">School Gallery</span>

            <h2>
              Life at <span>Our School</span>
            </h2>

            <p>
              Explore moments from our classrooms, campus, activities,
              celebrations, sports, and student experiences.
            </p>
          </div>

          {/* Filters */}
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`gallery-filter ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredGallery.map((item, index) => (
              <button
                type="button"
                className={`gallery-item gallery-item-${index}`}
                key={`${item.title}-${index}`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="gallery-image-wrapper">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="gallery-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="gallery-overlay" />

                  <div className="gallery-item-info">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>

                  <div className="gallery-expand">
                    <Maximize2 size={18} />
                  </div>

                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            className="gallery-close"
            aria-label="Close gallery"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={25} />
          </button>

          <button
            type="button"
            className="gallery-nav gallery-prev"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-lightbox-image">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                sizes="90vw"
                className="gallery-lightbox-image-file"
              />
            </div>

            <div className="gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>

          <button
            type="button"
            className="gallery-nav gallery-next"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}