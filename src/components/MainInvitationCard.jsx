import React from 'react';
import { INVITATION_DATA } from '../data/invitation';
import EngagementRings from './EngagementRings';
import { Sparkles } from 'lucide-react';

/**
 * Main Engagement Invitation Card
 * Features:
 * - Perfectly sized, mobile-responsive couple names (no cropping on mobile!)
 * - Ultra-stylish luxury font (Parisienne / Allura)
 * - Twinkling star sparkles and gentle heartbeat pulsing glow
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
          padding: 2.4rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          backdrop-filter: blur(14px);
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .main-invitation-hero-card {
            padding: 3.5rem 2.5rem;
          }
        }

        .card-inner-frame {
          position: absolute;
          inset: 10px;
          border: 1px solid rgba(200, 161, 106, 0.22);
          border-radius: 20px;
          pointer-events: none;
        }

        .card-corner-dot {
          position: absolute;
          width: 5px;
          height: 5px;
          background: #E7C687;
          border-radius: 50%;
          box-shadow: 0 0 6px #FFF7F0;
        }
        .dot-tl { top: -2.5px; left: -2.5px; }
        .dot-tr { top: -2.5px; right: -2.5px; }
        .dot-bl { bottom: -2.5px; left: -2.5px; }
        .dot-br { bottom: -2.5px; right: -2.5px; }

        .invitation-lead {
          font-family: var(--font-clean-body);
          font-size: 0.9rem;
          letter-spacing: 0.16em;
          color: rgba(255, 247, 240, 0.85);
          text-transform: none;
          margin-bottom: 0.4rem;
          font-weight: 300;
        }

        @media (min-width: 480px) {
          .invitation-lead {
            font-size: 1.05rem;
          }
        }

        .invitation-title {
          font-family: var(--font-serif-heading);
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--color-warm-ivory);
          letter-spacing: 0.05em;
          line-height: 1.25;
          margin-bottom: 0.4rem;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
        }

        @media (min-width: 480px) {
          .invitation-title {
            font-size: 2.3rem;
          }
        }

        .invitation-tamil-badge {
          font-family: var(--font-tamil);
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: var(--color-light-gold);
          margin-bottom: 0.6rem;
          opacity: 0.9;
        }

        /* Couple Names Container: Perfectly Sized & Responsive */
        .couple-names-hero-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          margin: 0.6rem 0 1.2rem 0;
          padding: 0.4rem 0.5rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.25rem 0.6rem;
          animation: nameHeartbeat 2.8s ease-in-out infinite;
        }

        @keyframes nameHeartbeat {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 10px rgba(200, 161, 106, 0.3));
          }
          14% {
            transform: scale(1.025);
            filter: drop-shadow(0 0 20px rgba(231, 198, 135, 0.75)) drop-shadow(0 0 35px rgba(255, 247, 240, 0.4));
          }
          28% {
            transform: scale(1);
            filter: drop-shadow(0 0 10px rgba(200, 161, 106, 0.3));
          }
          42% {
            transform: scale(1.018);
            filter: drop-shadow(0 0 16px rgba(231, 198, 135, 0.6));
          }
          56% {
            transform: scale(1);
            filter: drop-shadow(0 0 10px rgba(200, 161, 106, 0.3));
          }
        }

        /* Fluid Typography: Never cropped on mobile */
        .couple-name-calligraphy {
          font-family: 'Parisienne', 'Allura', 'Great Vibes', cursive;
          font-size: clamp(2.1rem, 7.5vw, 3.8rem);
          font-weight: 400;
          color: var(--color-warm-ivory);
          letter-spacing: 0.02em;
          line-height: 1.15;
          display: inline-block;
          white-space: nowrap;
          text-shadow: 0 3px 15px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 247, 240, 0.35);
        }

        .couple-ampersand {
          font-family: 'Cinzel Decorative', cursive;
          font-size: clamp(1.8rem, 5.5vw, 2.8rem);
          color: var(--color-light-gold);
          display: inline-block;
          vertical-align: middle;
          text-shadow: 0 0 12px rgba(200, 161, 106, 0.7);
        }

        /* Twinkling Star Accents */
        .name-twinkle-star {
          position: absolute;
          color: #FFE5B4;
          pointer-events: none;
          animation: starTwinkle 2s ease-in-out infinite alternate;
        }

        .star-top-left {
          top: -4px;
          left: 10px;
          animation-delay: 0.2s;
        }

        .star-bottom-right {
          bottom: -4px;
          right: 12px;
          animation-delay: 1s;
        }

        .star-center-top {
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: 0.6s;
        }

        @keyframes starTwinkle {
          0% {
            opacity: 0.2;
            transform: scale(0.6) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1.2) rotate(90deg);
            filter: drop-shadow(0 0 8px #FFF7F0) drop-shadow(0 0 15px #E7C687);
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
          font-size: 1.45rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--color-warm-ivory);
        }

        @media (min-width: 480px) {
          .invitation-date-text {
            font-size: 1.8rem;
          }
        }

        .invitation-time-text {
          font-family: var(--font-elegant-serif);
          font-style: italic;
          font-size: 1.15rem;
          color: var(--color-light-gold);
          letter-spacing: 0.06em;
        }

        .card-flourish-divider {
          width: 120px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-antique-gold), transparent);
          margin: 0.8rem auto;
        }

        .invitation-venue-block {
          margin-top: 0.4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .venue-lead-label {
          font-family: var(--font-clean-body);
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 247, 240, 0.65);
          margin-bottom: 0.25rem;
        }

        .venue-name-bold {
          font-family: var(--font-serif-heading);
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--color-warm-ivory);
          letter-spacing: 0.03em;
        }

        @media (min-width: 480px) {
          .venue-name-bold {
            font-size: 1.5rem;
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

      {/* Couple's Names: Perfectly Scaled on Mobile with Twinkling & Heartbeat */}
      <div className="couple-names-hero-container">
        <Sparkles size={16} className="name-twinkle-star star-top-left" />
        <Sparkles size={14} className="name-twinkle-star star-bottom-right" />
        <Sparkles size={12} className="name-twinkle-star star-center-top" />

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
