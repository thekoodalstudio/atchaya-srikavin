import React, { useState, useEffect } from 'react';
import { INVITATION_DATA } from '../data/invitation';
import { Heart, Sparkles, ChevronRight } from 'lucide-react';

/**
 * Cinematic Loading & Opening Intro
 * Sequence:
 * 1. Deep burgundy textured background
 * 2. Fine ivory corner outlines unfurl
 * 3. Gold particles drift
 * 4. Center ornamental gold line draws
 * 5. "A Celebration of Love" fade-in
 * 6. "Atchaya & Srikavin" typography reveal
 * 7. "Open Invitation" call-to-action button
 * 8. Graceful "Skip Intro" option
 */
export default function IntroAnimation({ onOpen, isOpened }) {
  const [step, setStep] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Stage 1 -> 2: Corner outlines & particles appear
    const t1 = setTimeout(() => setStep(2), 500);
    // Stage 2 -> 3: Ornamental line & welcome quote
    const t2 = setTimeout(() => setStep(3), 1100);
    // Stage 3 -> 4: Names reveal & Open button
    const t3 = setTimeout(() => setStep(4), 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleOpen = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  if (isOpened) return null;

  return (
    <div
      className={`intro-screen-overlay ${isFadingOut ? 'fade-out' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Invitation Opening Intro"
    >
      <style>{`
        .intro-screen-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: radial-gradient(circle at center, #3d0a11 0%, #26060a 60%, #150205 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          color: var(--color-warm-ivory);
          transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .intro-screen-overlay.fade-out {
          opacity: 0;
          transform: scale(1.04);
          pointer-events: none;
        }

        .intro-emboss-bg {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          background-image: radial-gradient(rgba(200, 161, 106, 0.15) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* Ivory Corner Vignettes */
        .intro-corner-decor {
          position: absolute;
          width: 90px;
          height: 90px;
          opacity: 0;
          transition: opacity 1.2s ease, transform 1.2s ease;
          pointer-events: none;
        }

        @media (min-width: 480px) {
          .intro-corner-decor {
            width: 130px;
            height: 130px;
          }
        }

        .intro-corner-decor.show {
          opacity: 0.85;
        }

        .intro-corner-tl { top: 12px; left: 12px; }
        .intro-corner-tr { top: 12px; right: 12px; transform: scaleX(-1); }
        .intro-corner-bl { bottom: 12px; left: 12px; transform: scaleY(-1); }
        .intro-corner-br { bottom: 12px; right: 12px; transform: scale(-1, -1); }

        .intro-center-box {
          position: relative;
          z-index: 10;
          max-width: 520px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Tamil Sacred Monogram / Header */
        .intro-tamil-seal {
          font-family: var(--font-tamil);
          font-size: 0.95rem;
          letter-spacing: 0.2em;
          color: var(--color-light-gold);
          margin-bottom: 0.75rem;
          opacity: 0;
          transform: translateY(-8px);
          transition: all 0.8s ease;
        }
        .intro-tamil-seal.show {
          opacity: 0.9;
          transform: translateY(0);
        }

        /* Subtitle Welcome Quote */
        .intro-welcome-text {
          font-family: var(--font-elegant-serif);
          font-style: italic;
          font-size: 1.25rem;
          letter-spacing: 0.12em;
          color: var(--color-muted-rose);
          margin-bottom: 1.25rem;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (min-width: 480px) {
          .intro-welcome-text {
            font-size: 1.45rem;
          }
        }

        .intro-welcome-text.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* Ornamental Center Line */
        .intro-ornament-line {
          height: 1px;
          width: 0%;
          background: linear-gradient(90deg, transparent, #C8A16A 25%, #FFF7F0 50%, #C8A16A 75%, transparent);
          margin: 0.5rem auto 1.5rem auto;
          position: relative;
          transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .intro-ornament-line.show {
          width: 80%;
          max-width: 320px;
        }

        .intro-ornament-line-center-gem {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 8px;
          height: 8px;
          background: #E7C687;
          box-shadow: 0 0 10px #FFF7F0;
        }

        /* Couple Names Typography */
        .intro-couple-names {
          font-family: var(--font-serif-heading);
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.05em;
          color: var(--color-warm-ivory);
          margin-bottom: 0.6rem;
          opacity: 0;
          transform: scale(0.92);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(200, 161, 106, 0.3);
        }

        @media (min-width: 480px) {
          .intro-couple-names {
            font-size: 3rem;
          }
        }

        .intro-couple-names.show {
          opacity: 1;
          transform: scale(1);
        }

        .intro-ampersand {
          font-family: var(--font-script-romantic);
          font-size: 2.6rem;
          font-weight: 400;
          color: var(--color-light-gold);
          display: inline-block;
          margin: 0 0.35rem;
          vertical-align: middle;
        }

        .intro-event-badge {
          font-family: var(--font-serif-heading);
          font-size: 0.85rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--color-light-gold);
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.8s ease 0.2s;
        }

        .intro-event-badge.show {
          opacity: 0.95;
          transform: translateY(0);
        }

        /* Buttons Container */
        .intro-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }

        .intro-actions.show {
          opacity: 1;
          transform: translateY(0);
        }

        .intro-skip-btn {
          background: none;
          border: none;
          color: rgba(255, 247, 240, 0.55);
          font-family: var(--font-clean-body);
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          cursor: pointer;
          padding: 0.4rem 0.8rem;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.2s ease;
        }

        .intro-skip-btn:hover {
          color: var(--color-light-gold);
        }

        /* Studio Watermark in Intro */
        .intro-footer-studio {
          position: absolute;
          bottom: 20px;
          font-family: var(--font-serif-heading);
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          color: rgba(200, 161, 106, 0.6);
          text-transform: uppercase;
        }
      `}</style>

      {/* Textured overlay */}
      <div className="intro-emboss-bg" />

      {/* Decorative ivory corner illustrations */}
      <div className={`intro-corner-decor intro-corner-tl ${step >= 2 ? 'show' : ''}`}>
        <CornerDecorSvg />
      </div>
      <div className={`intro-corner-decor intro-corner-tr ${step >= 2 ? 'show' : ''}`}>
        <CornerDecorSvg />
      </div>
      <div className={`intro-corner-decor intro-corner-bl ${step >= 2 ? 'show' : ''}`}>
        <CornerDecorSvg />
      </div>
      <div className={`intro-corner-decor intro-corner-br ${step >= 2 ? 'show' : ''}`}>
        <CornerDecorSvg />
      </div>

      {/* Center Cinematic Card */}
      <div className="intro-center-box">
        {/* Tamil Title */}
        <div className={`intro-tamil-seal ${step >= 2 ? 'show' : ''}`}>
          {INVITATION_DATA.tamilTitle}
        </div>

        {/* Welcome Message */}
        <div className={`intro-welcome-text ${step >= 3 ? 'show' : ''}`}>
          "{INVITATION_DATA.quotes.welcome}"
        </div>

        {/* Center Ornamental Drawing Line */}
        <div className={`intro-ornament-line ${step >= 3 ? 'show' : ''}`}>
          <div className="intro-ornament-line-center-gem" />
        </div>

        {/* Couple's Names */}
        <h1 className={`intro-couple-names ${step >= 4 ? 'show' : ''}`}>
          <span>{INVITATION_DATA.bride.name}</span>
          <span className="intro-ampersand">&</span>
          <span>{INVITATION_DATA.groom.name}</span>
        </h1>

        <div className={`intro-event-badge ${step >= 4 ? 'show' : ''}`}>
          {INVITATION_DATA.occasion}
        </div>

        {/* Action Buttons */}
        <div className={`intro-actions ${step >= 4 ? 'show' : ''}`}>
          <button
            type="button"
            className="btn-gold-primary"
            onClick={handleOpen}
            aria-label="Open Invitation"
          >
            <span>Open Invitation</span>
            <ChevronRight size={18} />
          </button>

          <button
            type="button"
            className="intro-skip-btn"
            onClick={handleOpen}
            aria-label="Skip Intro"
          >
            Skip Intro
          </button>
        </div>
      </div>

      {/* Studio Brand watermark */}
      <div className="intro-footer-studio">
        {INVITATION_DATA.branding.tagline}
      </div>
    </div>
  );
}

function CornerDecorSvg() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <path
        d="M0 0 C 35 25, 45 55, 30 85 C 25 95, 10 98, 0 100"
        stroke="#FFF7F0"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M0 0 C 25 35, 55 45, 85 30 C 95 25, 98 10, 100 0"
        stroke="#FFF7F0"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="35" cy="35" r="4" stroke="#E7C687" strokeWidth="1.2" />
      <circle cx="35" cy="35" r="1.5" fill="#E7C687" />
    </svg>
  );
}
