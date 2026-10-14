import React from 'react';
import { INVITATION_DATA } from '../data/invitation';
import EngagementRings from './EngagementRings';
import { Sparkles, MapPin, Calendar, Clock } from 'lucide-react';

/**
 * Main Engagement Invitation Card
 * Recreates the exact typography and visual centerpiece from the reference artwork:
 * - "You're invited to the"
 * - "Engagement Ceremony"
 * - Animated Interlocking Engagement Rings
 * - Couple's Names in flowing calligraphic script typography
 * - "Sunday, October 25"
 * - "10:00 AM onwards"
 * - "Venue: Lakshmi Mini Hall, Thuraiyur"
 */
export default function MainInvitationCard() {
  const { bride, groom, occasionLead, occasion, date, venue, quotes } = INVITATION_DATA;

  return (
    <div className="main-invitation-hero-card" role="region" aria-label="Official Engagement Invitation">
      <style>{`
        .main-invitation-hero-card {
          position: relative;
          width: 100%;
          max-width: 680px;
          margin: 1.5rem auto;
          background: radial-gradient(circle at 50% 25%, rgba(70, 12, 21, 0.88) 0%, rgba(38, 6, 10, 0.95) 75%, rgba(20, 2, 5, 0.98) 100%);
          border: 1px solid rgba(200, 161, 106, 0.45);
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(10, 1, 3, 0.85), 0 0 1px 1px rgba(231, 198, 135, 0.25) inset;
          padding: 2.8rem 1.4rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          backdrop-filter: blur(14px);
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .main-invitation-hero-card {
            padding: 3.8rem 2.5rem;
          }
        }

        /* Subtle Inner Ornamental Line Frame */
        .card-inner-frame {
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(200, 161, 106, 0.22);
          border-radius: 20px;
          pointer-events: none;
        }

        .card-corner-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #E7C687;
          border-radius: 50%;
          box-shadow: 0 0 6px #FFF7F0;
        }
        .dot-tl { top: -3px; left: -3px; }
        .dot-tr { top: -3px; right: -3px; }
        .dot-bl { bottom: -3px; left: -3px; }
        .dot-br { bottom: -3px; right: -3px; }

        /* Top Invitation Lead */
        .invitation-lead {
          font-family: var(--font-clean-body);
          font-size: 0.95rem;
          letter-spacing: 0.16em;
          color: rgba(255, 247, 240, 0.85);
          text-transform: none;
          margin-bottom: 0.5rem;
          font-weight: 300;
        }

        @media (min-width: 480px) {
          .invitation-lead {
            font-size: 1.1rem;
          }
        }

        /* Occasion Title */
        .invitation-title {
          font-family: var(--font-serif-heading);
          font-size: 1.95rem;
          font-weight: 600;
          color: var(--color-warm-ivory);
          letter-spacing: 0.05em;
          line-height: 1.25;
          margin-bottom: 0.75rem;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
        }

        @media (min-width: 480px) {
          .invitation-title {
            font-size: 2.5rem;
          }
        }

        /* Tamil Sub-heading */
        .invitation-tamil-badge {
          font-family: var(--font-tamil);
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: var(--color-light-gold);
          margin-bottom: 0.8rem;
          opacity: 0.9;
        }

        /* Couple's Names Calligraphy */
        .couple-names-hero {
          margin: 0.8rem 0 1.4rem 0;
          line-height: 1.15;
          padding: 0 0.5rem;
        }

        .couple-name-calligraphy {
          font-family: var(--font-script-romantic);
          font-size: 3.4rem;
          font-weight: 400;
          color: var(--color-warm-ivory);
          letter-spacing: 0.02em;
          display: inline-block;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 247, 240, 0.25);
          transition: transform 0.3s ease;
        }

        @media (min-width: 480px) {
          .couple-name-calligraphy {
            font-size: 4.4rem;
          }
        }

        @media (min-width: 768px) {
          .couple-name-calligraphy {
            font-size: 5.2rem;
          }
        }

        .couple-ampersand {
          font-family: var(--font-script-romantic);
          font-size: 3rem;
          color: var(--color-light-gold);
          margin: 0 0.4rem;
          display: inline-block;
          vertical-align: middle;
          text-shadow: 0 0 15px rgba(200, 161, 106, 0.5);
        }

        @media (min-width: 480px) {
          .couple-ampersand {
            font-size: 3.8rem;
          }
        }

        /* Date & Time Highlights */
        .invitation-date-time-block {
          margin: 0.5rem 0 1.2rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
        }

        .invitation-date-text {
          font-family: var(--font-serif-heading);
          font-size: 1.55rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--color-warm-ivory);
        }

        @media (min-width: 480px) {
          .invitation-date-text {
            font-size: 1.85rem;
          }
        }

        .invitation-time-text {
          font-family: var(--font-elegant-serif);
          font-style: italic;
          font-size: 1.2rem;
          color: var(--color-light-gold);
          letter-spacing: 0.06em;
        }

        /* Separator flourish */
        .card-flourish-divider {
          width: 140px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-antique-gold), transparent);
          margin: 0.9rem auto;
        }

        /* Venue Highlight */
        .invitation-venue-block {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .venue-lead-label {
          font-family: var(--font-clean-body);
          font-size: 0.8rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 247, 240, 0.65);
          margin-bottom: 0.3rem;
        }

        .venue-name-bold {
          font-family: var(--font-serif-heading);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-warm-ivory);
          letter-spacing: 0.03em;
        }

        @media (min-width: 480px) {
          .venue-name-bold {
            font-size: 1.55rem;
          }
        }

        .venue-city-sub {
          font-family: var(--font-clean-body);
          font-size: 0.95rem;
          color: var(--color-light-gold);
          margin-top: 0.2rem;
        }
      `}</style>

      {/* Ornate Inner Border Frame with Corner Dots */}
      <div className="card-inner-frame">
        <div className="card-corner-dot dot-tl" />
        <div className="card-corner-dot dot-tr" />
        <div className="card-corner-dot dot-bl" />
        <div className="card-corner-dot dot-br" />
      </div>

      {/* 1. Occasion Lead */}
      <p className="invitation-lead">{occasionLead}</p>

      {/* 2. Occasion Title */}
      <h1 className="invitation-title">{occasion}</h1>
      <div className="invitation-tamil-badge">{INVITATION_DATA.tamilSubtitle}</div>

      {/* 3. Hero Interlocking Rings Animation */}
      <EngagementRings />

      {/* 4. Couple Names Calligraphy Visual Centerpiece */}
      <div className="couple-names-hero">
        <span className="couple-name-calligraphy">{bride.name}</span>
        <span className="couple-ampersand">&</span>
        <span className="couple-name-calligraphy">{groom.name}</span>
      </div>

      {/* Divider */}
      <div className="card-flourish-divider" />

      {/* 5. Date & Time */}
      <div className="invitation-date-time-block">
        <div className="invitation-date-text">{date.fullDisplay}</div>
        <div className="invitation-time-text">{date.time}</div>
      </div>

      <div className="card-flourish-divider" />

      {/* 6. Venue */}
      <div className="invitation-venue-block">
        <span className="venue-lead-label">Venue</span>
        <div className="venue-name-bold">{venue.name}</div>
        <div className="venue-city-sub">{venue.city}</div>
      </div>
    </div>
  );
}
