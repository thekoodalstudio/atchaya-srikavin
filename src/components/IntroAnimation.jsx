import React, { useState, useEffect } from 'react';
import { INVITATION_DATA } from '../data/invitation';
import { Sparkles, Heart } from 'lucide-react';

/**
 * WOW Cinematic Loading Page:
 * - Animated golden Cupid with flapping angel wings drawing and firing a glowing heart arrow
 * - Two interlocking 3D engagement rings at the center that ignite in a brilliant golden flare
 * - Sacred Tamil blessing & glowing couple names reveal (Atchaya & Srikavin)
 * - Automatic smooth transition directly into the main invitation
 */
export default function IntroAnimation({ onOpen, isOpened }) {
  const [phase, setPhase] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Phase 1 (0ms): Rings appear and hover, Cupid prepares bow
    // Phase 2 (700ms): Cupid shoots golden heart arrow
    const tArrow = setTimeout(() => setPhase(2), 700);

    // Phase 3 (1500ms): Arrow impacts center rings -> Golden explosion & rings interlock
    const tImpact = setTimeout(() => setPhase(3), 1500);

    // Phase 4 (2300ms): Couple names & celebratory sparkle reveal
    const tNames = setTimeout(() => setPhase(4), 2300);

    // Phase 5 (3800ms): Auto-transition smoothly into the invitation
    const tFinish = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onOpen();
      }, 700);
    }, 3800);

    return () => {
      clearTimeout(tArrow);
      clearTimeout(tImpact);
      clearTimeout(tNames);
      clearTimeout(tFinish);
    };
  }, [onOpen]);

  if (isOpened) return null;

  return (
    <div
      className={`wow-intro-screen ${isFadingOut ? 'fade-out' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome Loading"
    >
      <style>{`
        .wow-intro-screen {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: radial-gradient(circle at 50% 40%, #460d16 0%, #26060a 60%, #120204 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          color: var(--color-warm-ivory);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .wow-intro-screen.fade-out {
          opacity: 0;
          transform: scale(1.05);
          pointer-events: none;
        }

        /* Subtle Luxury Damask */
        .intro-damask {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          background-image: radial-gradient(rgba(200, 161, 106, 0.18) 1.5px, transparent 1.5px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        /* Ambient Glow Orb behind Rings */
        .intro-celestial-orb {
          position: absolute;
          top: 38%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(231, 198, 135, 0.25) 0%, rgba(81, 16, 27, 0) 70%);
          pointer-events: none;
          filter: blur(20px);
          transition: transform 0.8s ease, opacity 0.8s ease;
        }

        .wow-intro-screen[data-phase="3"] .intro-celestial-orb,
        .wow-intro-screen[data-phase="4"] .intro-celestial-orb {
          transform: translate(-50%, -50%) scale(1.6);
          background: radial-gradient(circle, rgba(255, 247, 240, 0.4) 0%, rgba(200, 161, 106, 0.2) 50%, transparent 75%);
        }

        /* Cupid Animation Stage */
        .cupid-flying-stage {
          position: absolute;
          top: 8%;
          left: 12%;
          width: 90px;
          height: 90px;
          transform-origin: center;
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          animation: cupidFloat 3s ease-in-out infinite alternate;
          z-index: 10;
        }

        @media (min-width: 480px) {
          .cupid-flying-stage {
            top: 10%;
            left: 20%;
            width: 120px;
            height: 120px;
          }
        }

        @keyframes cupidFloat {
          0% { transform: translateY(0) rotate(-6deg); }
          100% { transform: translateY(-12px) rotate(4deg); }
        }

        .cupid-wing-left {
          animation: cupidWingFlap 0.28s ease-in-out infinite alternate;
          transform-origin: 35px 45px;
        }

        .cupid-wing-right {
          animation: cupidWingFlap 0.28s ease-in-out infinite alternate-reverse;
          transform-origin: 55px 45px;
        }

        @keyframes cupidWingFlap {
          0% { transform: rotate(-15deg); }
          100% { transform: rotate(25deg); }
        }

        /* Glowing Love Arrow flying toward center rings */
        .cupid-arrow-projectile {
          position: absolute;
          top: 15%;
          left: 22%;
          width: 90px;
          height: 18px;
          opacity: 0;
          pointer-events: none;
          z-index: 12;
          transform-origin: left center;
        }

        @media (min-width: 480px) {
          .cupid-arrow-projectile {
            top: 18%;
            left: 28%;
            width: 130px;
          }
        }

        .wow-intro-screen[data-phase="2"] .cupid-arrow-projectile {
          opacity: 1;
          animation: shootArrow 0.85s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
        }

        @keyframes shootArrow {
          0% {
            transform: translate3d(0, 0, 0) rotate(32deg) scale(0.6);
            opacity: 0;
          }
          30% { opacity: 1; }
          95% { opacity: 1; }
          100% {
            transform: translate3d(140px, 110px, 0) rotate(32deg) scale(1.1);
            opacity: 0;
          }
        }

        /* Interlocking Rings Loading Stage */
        .intro-rings-box {
          position: relative;
          width: 220px;
          height: 150px;
          margin-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        @media (min-width: 480px) {
          .intro-rings-box {
            width: 260px;
            height: 170px;
          }
        }

        .intro-ring {
          position: absolute;
          width: 95px;
          height: 95px;
          border-radius: 50%;
          border: 7px solid #C8A16A;
          border-top-color: #FFF7F0;
          border-bottom-color: #9D7438;
          box-shadow: 0 0 20px rgba(200, 161, 106, 0.45);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .intro-ring-left {
          left: 25px;
          transform: rotate(-35deg) scale(0.9);
        }

        .intro-ring-right {
          right: 25px;
          transform: rotate(35deg) scale(0.9);
        }

        /* Phase 3 & 4: Rings Interlock & Flare */
        .wow-intro-screen[data-phase="3"] .intro-ring-left,
        .wow-intro-screen[data-phase="4"] .intro-ring-left {
          left: 45px;
          transform: rotate(-15deg) scale(1);
          border-color: #E7C687;
          border-top-color: #FFF7F0;
          box-shadow: 0 0 30px rgba(231, 198, 135, 0.7);
        }

        .wow-intro-screen[data-phase="3"] .intro-ring-right,
        .wow-intro-screen[data-phase="4"] .intro-ring-right {
          right: 45px;
          transform: rotate(15deg) scale(1);
          border-color: #E7C687;
          border-top-color: #FFF7F0;
          box-shadow: 0 0 30px rgba(231, 198, 135, 0.7);
        }

        /* Solitaire gem on right ring */
        .intro-ring-gem {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 14px;
          background: #FFF7F0;
          transform: rotate(45deg);
          box-shadow: 0 0 15px #FFF7F0;
        }

        /* Explosive Starburst Flare when arrow hits rings */
        .ring-burst-flare {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, #FFF7F0 15%, #E7C687 45%, transparent 70%);
          opacity: 0;
          pointer-events: none;
          z-index: 8;
        }

        .wow-intro-screen[data-phase="3"] .ring-burst-flare {
          animation: burstFlare 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes burstFlare {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          40% { transform: translate(-50%, -50%) scale(1.4); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }

        /* Couple's Names & Titles */
        .intro-content-container {
          text-align: center;
          margin-top: 1.2rem;
          max-width: 90%;
          z-index: 10;
        }

        .intro-subheading {
          font-family: var(--font-elegant-serif);
          font-style: italic;
          font-size: 1.15rem;
          letter-spacing: 0.12em;
          color: var(--color-muted-rose);
          margin-bottom: 0.5rem;
        }

        .intro-names-calligraphy {
          font-family: 'Parisienne', 'Allura', 'Great Vibes', cursive;
          font-size: 2.6rem;
          font-weight: 400;
          color: var(--color-warm-ivory);
          letter-spacing: 0.02em;
          line-height: 1.2;
          opacity: 0;
          transform: scale(0.92);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 35px rgba(231, 198, 135, 0.55);
        }

        @media (min-width: 480px) {
          .intro-names-calligraphy {
            font-size: 3.4rem;
          }
        }

        .wow-intro-screen[data-phase="3"] .intro-names-calligraphy,
        .wow-intro-screen[data-phase="4"] .intro-names-calligraphy {
          opacity: 1;
          transform: scale(1);
        }

        .intro-ampersand-sign {
          font-family: 'Cinzel Decorative', cursive;
          font-size: 2rem;
          color: var(--color-light-gold);
          margin: 0 0.4rem;
          display: inline-block;
        }

        .intro-status-pulse {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          font-family: var(--font-clean-body);
          font-size: 0.76rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--color-light-gold);
          animation: pulseGlow 1.8s ease-in-out infinite;
        }
      `}</style>

      <div className="intro-damask" />
      <div className="intro-celestial-orb" />

      {/* 1. Animated Golden Flying Cupid */}
      <div className="cupid-flying-stage">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="cupidGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF4DE" />
              <stop offset="50%" stopColor="#E7C687" />
              <stop offset="100%" stopColor="#9D7438" />
            </linearGradient>
          </defs>
          {/* Left Angel Wing */}
          <g className="cupid-wing-left">
            <path d="M42 46 C 30 20, 10 25, 12 45 C 14 55, 30 52, 42 46 Z" fill="url(#cupidGold)" opacity="0.85" />
            <path d="M40 48 C 25 35, 16 48, 26 56 Z" fill="#FFF7F0" opacity="0.4" />
          </g>
          {/* Right Angel Wing */}
          <g className="cupid-wing-right">
            <path d="M52 46 C 64 20, 84 25, 82 45 C 80 55, 64 52, 52 46 Z" fill="url(#cupidGold)" opacity="0.85" />
            <path d="M54 48 C 69 35, 78 48, 68 56 Z" fill="#FFF7F0" opacity="0.4" />
          </g>
          {/* Cupid Silhouette */}
          <circle cx="47" cy="40" r="10" fill="url(#cupidGold)" />
          {/* Curly hair & halo */}
          <ellipse cx="47" cy="27" rx="11" ry="3" stroke="#FFF7F0" strokeWidth="1.5" />
          <path d="M45 49 C 40 60, 42 74, 52 74 C 58 74, 60 62, 53 49 Z" fill="url(#cupidGold)" />
          {/* Golden Bow in hand */}
          <path d="M58 35 Q 70 48 58 65" stroke="#FFF7F0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <line x1="58" y1="35" x2="58" y2="65" stroke="#E7C687" strokeWidth="0.8" />
        </svg>
      </div>

      {/* 2. Golden Love Arrow flying towards the rings */}
      <div className="cupid-arrow-projectile">
        <svg viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 8px #FFF7F0)' }}>
          <line x1="0" y1="10" x2="80" y2="10" stroke="#FFF7F0" strokeWidth="2.5" />
          {/* Heart Tip */}
          <path d="M80 10 L88 3 C92 0, 98 4, 98 9 C98 14, 88 17, 80 10 Z" fill="#E7C687" />
          <path d="M80 10 L88 17 C92 20, 98 16, 98 11 C98 6, 88 3, 80 10 Z" fill="#E7C687" />
          {/* Feather tail */}
          <path d="M0 6 L12 10 L0 14" stroke="#E7C687" strokeWidth="2" />
        </svg>
      </div>

      {/* 3. Interlocking Rings Stage */}
      <div className="intro-rings-box">
        <div className="intro-ring intro-ring-left" />
        <div className="intro-ring intro-ring-right">
          <div className="intro-ring-gem" />
        </div>
        <div className="ring-burst-flare" />
      </div>

      {/* 4. Text Reveal Container */}
      <div className="intro-content-container">
        <div className="intro-subheading">A Celebration of Love</div>
        <h1 className="intro-names-calligraphy">
          <span>{INVITATION_DATA.bride.name}</span>
          <span className="intro-ampersand-sign">&</span>
          <span>{INVITATION_DATA.groom.name}</span>
        </h1>

        <div className="intro-status-pulse">
          <Sparkles size={14} />
          <span>Opening Sacred Invitation</span>
          <Sparkles size={14} />
        </div>
      </div>
    </div>
  );
}
