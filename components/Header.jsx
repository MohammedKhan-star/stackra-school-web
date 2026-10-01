"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

import AnnouncementBar from "./AnnouncementBar";

export default function Header({ school }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Admissions", href: "#admissions" },
    { label: "Facilities", href: "#facilities" },
    { label: "Activities", href: "#activities" },
    { label: "Gallery", href: "#gallery" },
    { label: "News & Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <AnnouncementBar announcement={school.announcement} />

      <header className="site-header">
        <div className="header-container">

          {/* LOGO */}
          <a href="#home" className="school-brand">
            <div className="school-logo">
              {school.schoolLogo ? (
                <img
                  src={school.schoolLogo}
                  alt={`${school.schoolName} logo`}
                />
              ) : (
                <span>
                  {school.schoolName.charAt(0)}
                </span>
              )}
            </div>

            <div className="school-brand-text">
              <strong>{school.schoolName}</strong>

              <span>{school.schoolTagline}</span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-navigation">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* HEADER ACTIONS */}
          <div className="header-actions">

            <a
              href={`https://wa.me/${school.phone.replace(/\D/g, "")}`}
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={17} />

              <span>WhatsApp</span>
            </a>

            <a
              href="#admissions"
              className="admission-button"
            >
              Admission Enquiry

              <ChevronRight size={16} />
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`mobile-navigation ${
            menuOpen ? "mobile-navigation-open" : ""
          }`}
        >
          <nav>

            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
              >
                <span>{item.label}</span>

                <ChevronRight size={17} />
              </a>
            ))}

          </nav>

          <div className="mobile-contact">

            <a
              href={`tel:${school.phone}`}
              onClick={closeMenu}
            >
              <Phone size={18} />

              Call School
            </a>

            <a
              href={`https://wa.me/${school.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />

              WhatsApp
            </a>

          </div>
        </div>
      </header>
    </>
  );
}