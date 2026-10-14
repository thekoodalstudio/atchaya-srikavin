import React from 'react';
import { INVITATION_DATA } from '../data/invitation';
import EngagementRings from './EngagementRings';
import { Sparkles } from 'lucide-react';

/**
 * Main Engagement Invitation Card
 * Features:
 * - Ultra-stylish script typography for Atchaya & Srikavin
 * - Animated twinkling sparkle effect and heartbeat glow around the names
 * - "Engagement Ceremony", Date, Time, and Venue
 */
export default function MainInvitationCard() {
  const { bride, groom, occasionLead, occasion, date, venue } = INVITATION_DATA;

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

        .invitation-title {
          font-family: var(--font-serif-heading);
          font-size: 1.95rem;
          font-weight: 600;
          color: var(--color-warm-ivory);
          letter-spacing: 0.05em;
          line-height: 1.25;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
        }

        @media (min-width: 480px) {
          .invitation-title {
            font-size: 2.5rem;
          }
        }

        .invitation-tamil-badge {
          font-family: var(--font-tamil);
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: var(--color-light-gold);
          margin-bottom: 0.8rem;
          opacity: 0.9;
        }

        /* Couple Names Calligraphy with Heartbeat & Twinkling Animation */
        .couple-names-hero-container {
          position: relative;
          margin: 0.8rem 0 1.4rem 0;
          line-height: 1.15;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: nameHeartbeat 2.8s ease-in-out infinite;
        }

        @keyframes nameHeartbeat {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 12px rgba(200, 161, 106, 0.35));
          }
          14% {
            transform: scale(1.035);
            filter: drop-shadow(0 0 25px rgba(231, 198, 135, 0.8)) drop-shadow(0 0 45px rgba(255, 247, 240, 0.5));
          }
          28% {
            transform: scale(1);
            filter: drop-shadow(0 0 12px rgba(200, 161, 106, 0.35));
          }
          42% {
            transform: scale(1.025);
            filter: drop-shadow(0 0 20px rgba(231, 198, 135, 0.65));
          }
          56% {
            transform: scale(1);
            filter: drop-shadow(0 0 12px rgba(200, 161, 106, 0.35));
          }
        }

        .couple-name-calligraphy {
          font-family: 'Pinyon Script', 'Alex Brush', cursive;
          font-size: 3.8rem;
          font-weight: 400;
          color: var(--color-warm-ivory);
          letter-spacing: 0.02em;
          display: inline-block;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 247, 240, 0.4);
          position: relative;
        }

        @media (min-width: 480px) {
          .couple-name-calligraphy {
            font-size: 4.8rem;
          }
        }

        @media (min-width: 768px) {
          .couple-name-calligraphy {
            font-size: 5.6rem;
          }
        }

        .couple-ampersand {
          font-family: 'Cinzel Decorative', cursive;
          font-size: 2.8rem;
          color: var(--color-light-gold);
          margin: 0 0.5rem;
          display: inline-block;
          vertical-align: middle;
          text-shadow: 0 0 15px rgba(200, 161, 106, 0.7);
        }

        @media (min-width: 480px) {
          .couple-ampersand {
            font-size: 3.6rem;
          }
        }

        /* Twinkling Stars around the couple names */
        .name-twinkle-star {
          position: absolute;
          color: #FFE5B4;
          pointer-events: none;
          animation: starTwinkle 2s ease-in-out infinite alternate;
        }

        .star-top-left {
          top: -6px;
          left: 12px;
          animation-delay: 0.3s;
        }

        .star-bottom-right {
          bottom: -4px;
          right: 14px;
          animation-delay: 1.1s;
        }

        .star-center-top {
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: 0.7s;
        }

        @keyframes starTwinkle {
          0% {
            opacity: 0.2;
            transform: scale(0.6) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1.25) rotate(90deg);
            filter: drop-shadow(0 0 8px #FFF7F0) drop-shadow(0 0 16px #E7C687);
          }
        }

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

        .card-flourish-divider {
          width: 140px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-antique-gold), transparent);
          margin: 0.9rem auto;
        }

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

      <div className="card-inner-frame">
        <div className="card-corner-dot dot-tl" />
        <div className="card-corner-dot dot-tr" />
        <div className="card-corner-dot dot-bl" />
        <div className="card-corner-dot dot-br" />
      </div>

      <p className="invitation-lead">{occasionLead}</p>
      <h1 className="invitation-title">{occasion}</h1>
      <div className="invitation-tamil-badge">{INVITATION_DATA.tamilSubtitle}</div>

      <EngagementRings />

      {/* Couple's Names with Twinkling & Heartbeat Effect */}
      <div className="couple-names-hero-container">
        <Sparkles size={18} className="name-twinkle-star star-top-left" />
        <Sparkles size={16} className="name-twinkle-star star-bottom-right" />
        <Sparkles size={14} className="name-twinkle-star star-center-top" />

        <span className="couple-name-calligraphy">{bride.name}</span>
        <span className="couple-ampersand">&</span>
        <span className="couple-name-calligraphy">{groom.name}</span>
      </div>

      <div className="card-flourish-divider" />

      <div className="invitation-date-time-block">
        <div className="invitation-date-text">{date.fullDisplay}</div>
        <div className="invitation-time-text">{date.time}</div>
      </div>

      <div className="card-flourish-divider" />

      <div className="invitation-venue-block">
        <span className="venue-lead-label">Venue</span>
        <div className="venue-name-bold">{venue.name}</div>
        <div className="venue-city-sub">{venue.city}</div>
      </div>
    </div>
  );
}
