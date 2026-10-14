import React from 'react';
import { INVITATION_DATA } from '../data/invitation';
import { MapPin, Navigation, ExternalLink, QrCode, Phone, MessageCircle } from 'lucide-react';

/**
 * Venue & Contact Information Section
 * Displays:
 * - "Lakshmi Mini Hall, Thuraiyur"
 * - Exact Google Maps navigation: https://maps.app.goo.gl/eQ2WB8CLyjZ1bj79A?g_st=ac
 * - Stylized QR code scanner
 * - Contact & Helpline: 95143 38585 with direct Call and WhatsApp quick actions
 */
export default function VenueSection() {
  const { venue, contact } = INVITATION_DATA;

  return (
    <section className="venue-section-wrapper" aria-label="Event Venue and Contact">
      <style>{`
        .venue-section-wrapper {
          width: 100%;
          max-width: 680px;
          margin: 1.5rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .venue-card {
          width: 100%;
          padding: 2.2rem 1.25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        @media (min-width: 640px) {
          .venue-card {
            padding: 2.8rem 2rem;
          }
        }

        .venue-ornamental-border {
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(200, 161, 106, 0.25);
          border-radius: 14px;
          pointer-events: none;
        }

        .venue-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200, 161, 106, 0.25) 0%, rgba(53, 9, 15, 0.7) 100%);
          border: 1px solid rgba(231, 198, 135, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: var(--color-light-gold);
          box-shadow: 0 4px 15px rgba(18, 2, 5, 0.6);
        }

        .venue-title-sub {
          font-family: var(--font-clean-body);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 247, 240, 0.65);
          margin-bottom: 0.4rem;
        }

        .venue-name {
          font-family: var(--font-serif-heading);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-warm-ivory);
          letter-spacing: 0.04em;
          margin-bottom: 0.25rem;
        }

        @media (min-width: 480px) {
          .venue-name {
            font-size: 1.9rem;
          }
        }

        .venue-city {
          font-family: var(--font-elegant-serif);
          font-size: 1.25rem;
          font-style: italic;
          color: var(--color-light-gold);
          margin-bottom: 1.4rem;
        }

        .venue-qr-container {
          background: rgba(255, 247, 240, 0.96);
          padding: 12px;
          border-radius: 12px;
          border: 2px solid var(--color-antique-gold);
          box-shadow: 0 8px 25px rgba(18, 2, 5, 0.7);
          margin-bottom: 1.6rem;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.25s ease;
          text-decoration: none;
        }

        .venue-qr-container:hover {
          transform: scale(1.04);
        }

        .venue-qr-caption {
          font-family: var(--font-clean-body);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-dark-wine);
          margin-top: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .venue-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        /* Contact & Helpline Card */
        .contact-card {
          width: 100%;
          padding: 1.8rem 1.25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(53, 9, 15, 0.7);
          border: 1px solid rgba(200, 161, 106, 0.35);
          border-radius: 20px;
        }

        .contact-title {
          font-family: var(--font-serif-heading);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-warm-ivory);
          letter-spacing: 0.06em;
          margin-bottom: 0.2rem;
        }

        .contact-number-display {
          font-family: var(--font-clean-body);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--color-light-gold);
          letter-spacing: 0.08em;
          margin-bottom: 1.1rem;
        }

        .contact-buttons-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.85rem;
        }
      `}</style>

      {/* 1. Venue & Map Card */}
      <div className="royal-card venue-card">
        <div className="venue-ornamental-border" />

        <div className="venue-icon-badge">
          <MapPin size={26} />
        </div>

        <span className="venue-title-sub">Wedding Hall & Location</span>
        <h3 className="venue-name">{venue.name}</h3>
        <p className="venue-city">{venue.city}</p>

        {/* QR Code linking directly to exact Google Maps URL */}
        <a
          href={venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="venue-qr-container"
          title="Click to open Google Maps navigation"
          aria-label="Scan or tap QR code to open exact venue location on Google Maps"
        >
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
            <rect width="110" height="110" fill="#FFF7F0" />
            <rect x="10" y="10" width="28" height="28" rx="4" stroke="#26060A" strokeWidth="4" />
            <rect x="18" y="18" width="12" height="12" fill="#26060A" />

            <rect x="72" y="10" width="28" height="28" rx="4" stroke="#26060A" strokeWidth="4" />
            <rect x="80" y="18" width="12" height="12" fill="#26060A" />

            <rect x="10" y="72" width="28" height="28" rx="4" stroke="#26060A" strokeWidth="4" />
            <rect x="18" y="80" width="12" height="12" fill="#26060A" />

            <g fill="#26060A">
              <rect x="44" y="12" width="6" height="6" />
              <rect x="56" y="12" width="6" height="6" />
              <rect x="44" y="24" width="6" height="6" />
              <rect x="52" y="32" width="6" height="6" />
              <rect x="60" y="24" width="6" height="6" />
              
              <rect x="12" y="44" width="6" height="6" />
              <rect x="24" y="44" width="6" height="6" />
              <rect x="36" y="44" width="6" height="6" />
              <rect x="48" y="48" width="14" height="14" rx="2" fill="#871727" />
              <rect x="68" y="44" width="6" height="6" />
              <rect x="80" y="44" width="6" height="6" />
              <rect x="92" y="44" width="6" height="6" />

              <rect x="44" y="68" width="6" height="6" />
              <rect x="56" y="68" width="6" height="6" />
              <rect x="44" y="80" width="6" height="6" />
              <rect x="52" y="90" width="6" height="6" />
              <rect x="60" y="80" width="6" height="6" />

              <rect x="72" y="72" width="8" height="8" />
              <rect x="88" y="72" width="10" height="6" />
              <rect x="76" y="86" width="8" height="8" />
              <rect x="90" y="86" width="8" height="8" />
            </g>
          </svg>
          <div className="venue-qr-caption">
            <QrCode size={13} />
            <span>Scan / Tap for Map</span>
          </div>
        </a>

        {/* Action Button */}
        <div className="venue-actions">
          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-primary"
            aria-label="View Location on Google Maps"
          >
            <Navigation size={18} />
            <span>View Location</span>
            <ExternalLink size={15} style={{ opacity: 0.7 }} />
          </a>
        </div>
      </div>

      {/* 2. Contact & Helpline Card */}
      <div className="contact-card">
        <h4 className="contact-title">For Assistance & Directions</h4>
        <div className="contact-number-display">{contact.displayPhone}</div>

        <div className="contact-buttons-group">
          <a
            href={contact.callLink}
            className="btn-gold-secondary"
            aria-label="Call Mobile Number"
          >
            <Phone size={16} />
            <span>Call</span>
          </a>

          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-secondary"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
