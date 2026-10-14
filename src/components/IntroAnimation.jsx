import React, { useState, useEffect } from 'react';
import { INVITATION_DATA } from '../data/invitation';
import { Sparkles } from 'lucide-react';

/**
 * Cinematic Loading Page
 * Features:
 * - Animated elements: deep burgundy backdrop, unfurling ivory corner outlines,
 *   drifting gold particles, center ornamental drawing line.
 * - Automatically fades directly into the invitation after a few seconds
 *   WITHOUT requiring an "Open Invitation" button.
 */
export default function IntroAnimation({ onOpen, isOpened }) {
  const [step, setStep] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Stage 1: Floral corners & background texture
    const t1 = setTimeout(() => setStep(2), 400);

    // Stage 2: Center ornamental line & welcome quote
    const t2 = setTimeout(() => setStep(3), 1000);

    // Stage 3: Names reveal
    const t3 = setTimeout(() => setStep(4), 1600);

    // Stage 4: Automatic transition directly into the invitation after ~2.8s
    const tAutoOpen = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onOpen();
      }, 700);
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tAutoOpen);
    };
  }, [onOpen]);

  if (isOpened) return null;

  return (
    <div
      className={`intro-screen-overlay ${isFadingOut ? 'fade-out' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome Loading"
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
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .intro-screen-overlay.fade-out {
          opacity: 0;
          transform: scale(1.05);
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
            width: 140px;
            height: 140px;
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
          opacity: 0.95;
          transform: translateY(0);
        }

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

        .intro-couple-names {
          font-family: 'Pinyon Script', 'Alex Brush', cursive;
          font-size: 3.4rem;
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: 0.02em;
          color: var(--color-warm-ivory);
          margin-bottom: 0.4rem;
          opacity: 0;
          transform: scale(0.92);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(231, 198, 135, 0.45);
        }

        @media (min-width: 480px) {
          .intro-couple-names {
            font-size: 4.4rem;
          }
        }

        .intro-couple-names.show {
          opacity: 1;
          transform: scale(1);
        }

        .intro-ampersand {
          font-family: 'Cinzel Decorative', cursive;
          font-size: 2.4rem;
          color: var(--color-light-gold);
          display: inline-block;
          margin: 0 0.4rem;
        }

        .intro-loading-pulse {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.8rem;
          font-family: var(--font-clean-body);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-light-gold);
          opacity: 0.8;
          animation: pulseGlow 1.8s ease-in-out infinite;
        }

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

      <div className="intro-center-box">
        <div className={`intro-tamil-seal ${step >= 2 ? 'show' : ''}`}>
          {INVITATION_DATA.tamilTitle}
        </div>

        <div className={`intro-welcome-text ${step >= 3 ? 'show' : ''}`}>
          "{INVITATION_DATA.quotes.welcome}"
        </div>

        <div className={`intro-ornament-line ${step >= 3 ? 'show' : ''}`}>
          <div className="intro-ornament-line-center-gem" />
        </div>

        <h1 className={`intro-couple-names ${step >= 4 ? 'show' : ''}`}>
          <span>{INVITATION_DATA.bride.name}</span>
          <span className="intro-ampersand">&</span>
          <span>{INVITATION_DATA.groom.name}</span>
        </h1>

        <div className="intro-loading-pulse">
          <Sparkles size={14} />
          <span>Opening Your Invitation</span>
          <Sparkles size={14} />
        </div>
      </div>

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
