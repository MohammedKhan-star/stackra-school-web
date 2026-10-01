"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import GoogleMap from "@/components/GoogleMap";

export default function Contact({ school }) {
  const contact = school?.contact || {};
  const phone = school?.phone || contact.phone;
  const email = school?.email || contact.email;
  const address = school?.address || contact.address;
  const officeHours = school?.officeHours || contact.officeHours;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-layout">

          {/* Left */}
          <div className="contact-intro">
            <span className="section-label">GET IN TOUCH</span>

            <h2>
              We Would Love to
              <span> Hear From You</span>
            </h2>

            <p>
              Have a question about admissions, academics or school
              facilities? Our team is ready to assist you.
            </p>

            <a
              href={`https://wa.me/${String(phone || "")
                .replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp"
            >
              <MessageCircle size={19} />
              <span>Chat on WhatsApp</span>
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Contact Cards */}
          <div className="contact-details">

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                address || ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-item-icon">
                <MapPin size={22} />
              </div>

              <div>
                <span>ADDRESS</span>
                <strong>{address}</strong>
              </div>

              <ArrowRight size={17} />
            </a>

            <a
              href={`tel:${phone}`}
              className="contact-item"
            >
              <div className="contact-item-icon">
                <Phone size={22} />
              </div>

              <div>
                <span>PHONE</span>
                <strong>{phone}</strong>
              </div>

              <ArrowRight size={17} />
            </a>

            <a
              href={`mailto:${email}`}
              className="contact-item"
            >
              <div className="contact-item-icon">
                <Mail size={22} />
              </div>

              <div>
                <span>EMAIL</span>
                <strong>{email}</strong>
              </div>

              <ArrowRight size={17} />
            </a>

            <div className="contact-item contact-hours">
              <div className="contact-item-icon">
                <Clock3 size={22} />
              </div>

              <div>
                <span>OFFICE HOURS</span>
                <strong>{officeHours}</strong>
              </div>
            </div>

          </div>
        </div>

        {/* Map */}
        <div className="contact-map-wrapper">
          <GoogleMap school={school} />
        </div>
      </div>
    </section>
  );
}