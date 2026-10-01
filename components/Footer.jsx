"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Footer({ school }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = school?.socialLinks || {};

  return (
    <footer className="footer">
      <div className="container">

        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              {school?.schoolLogo ? (
                <img
                  src={school.schoolLogo}
                  alt={`${school.schoolName} logo`}
                />
              ) : (
                <div className="footer-logo-placeholder">
                  {school?.schoolName?.charAt(0) || "S"}
                </div>
              )}
            </div>

            <h3>{school?.schoolName}</h3>

            <p className="footer-tagline">
              {school?.schoolTagline || "Excellence in Education"}
            </p>

            <p className="footer-description">
              Inspiring young minds through quality education,
              character development and a strong foundation for the future.
            </p>

            {/* Social Links */}
            <div className="footer-socials">

              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  f
                </a>
              )}

              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  ig
                </a>
              )}

              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  yt
                </a>
              )}

              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              )}

            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>

            <ul>
              <li>
                <Link href="#home">Home</Link>
              </li>

              <li>
                <Link href="#about">About Us</Link>
              </li>

              <li>
                <Link href="#academics">Academics</Link>
              </li>

              <li>
                <Link href="#facilities">Facilities</Link>
              </li>

              <li>
                <Link href="#gallery">Gallery</Link>
              </li>

              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Admissions */}
          <div className="footer-column">
            <h4>Admissions</h4>

            <ul>
              <li>
                <Link href="#admissions">Admissions</Link>
              </li>

              <li>
                <Link href="#admission-process">
                  Admission Process
                </Link>
              </li>

              <li>
                <Link href="#downloads">
                  Downloads
                </Link>
              </li>

              <li>
                <Link href="#transportation">
                  Transportation
                </Link>
              </li>

              <li>
                <Link href="#contact">
                  Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h4>Contact Us</h4>

            {school?.address && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  school.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={18} />
                <span>{school.address}</span>
              </a>
            )}

            {school?.phone && (
              <a href={`tel:${school.phone}`}>
                <Phone size={18} />
                <span>{school.phone}</span>
              </a>
            )}

            {school?.email && (
              <a href={`mailto:${school.email}`}>
                <Mail size={18} />
                <span>{school.email}</span>
              </a>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="footer-cta">
          <div>
            <span>ADMISSIONS OPEN</span>

            <h3>
              Give Your Child a Foundation
              <br />
              for a Brighter Future.
            </h3>
          </div>

          <Link href="#admissions">
            <span>Explore Admissions</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} {school?.schoolName}. All Rights Reserved.
          </p>

          <p className="footer-powered">
            Powered by{" "}
            <strong>
              {school?.poweredBy?.company ||
                "STACKRA TECHNOLOGIES"}
            </strong>
          </p>
        </div>

      </div>
    </footer>
  );
}