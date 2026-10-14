import React, { useState, useEffect } from 'react';

/**
 * Hero Engagement Ring Animation
 * Features:
 * - Two 3D gold-toned rings approaching from opposite directions
 * - Dynamic rotation and smooth interlocking alignment in the center
 * - Radiant starburst diamond sparkle at the interlocking apex
 * - Romantic drifting heartlets and gentle floating state
 */
export default function EngagementRings({ className = "" }) {
  const [interlocked, setInterlocked] = useState(false);
  const [sparkleActive, setSparkleActive] = useState(false);

  useEffect(() => {
    // Stage 1: Entrance & alignment
    const timer1 = setTimeout(() => {
      setInterlocked(true);
    }, 450);

    // Stage 2: Golden sparkle flare
    const timer2 = setTimeout(() => {
      setSparkleActive(true);
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`engagement-rings-wrapper ${className}`} aria-label="Interlocking Engagement Rings">
      <style>{`
        .engagement-rings-wrapper {
          position: relative;
          width: 170px;
          height: 120px;
          margin: 0.8rem auto 1.2rem auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 480px) {
          .engagement-rings-wrapper {
            width: 210px;
            height: 140px;
          }
        }

        .rings-svg-container {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 6px 16px rgba(18, 2, 5, 0.7));
          overflow: visible;
        }

        /* Left Ring (Groom's Band) */
        .ring-left {
          transform-origin: 65px 65px;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
        }

        .ring-left.initial {
          transform: translateX(-70px) rotate(-35deg) scale(0.85);
          opacity: 0;
        }

        .ring-left.interlocked {
          transform: translateX(0) rotate(-16deg) scale(1);
          opacity: 1;
        }

        /* Right Ring (Bride's Solitaire) */
        .ring-right {
          transform-origin: 110px 65px;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
        }

        .ring-right.initial {
          transform: translateX(70px) rotate(35deg) scale(0.85);
          opacity: 0;
        }

        .ring-right.interlocked {
          transform: translateX(0) rotate(16deg) scale(1);
          opacity: 1;
        }

        /* Floating gently together */
        .rings-float-group {
          animation: ringsHover 4s ease-in-out infinite alternate;
        }

        @keyframes ringsHover {
          0% { transform: translateY(0); }
          100% { transform: translateY(-7px); }
        }

        /* Central Sparkle Flash */
        .center-sparkle {
          transform-origin: 88px 45px;
          transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .center-sparkle.hidden {
          opacity: 0;
          transform: scale(0) rotate(-45deg);
        }

        .center-sparkle.visible {
          opacity: 1;
          transform: scale(1.1) rotate(0deg);
          animation: sparkleGleam 2.8s ease-in-out infinite alternate;
        }

        @keyframes sparkleGleam {
          0% {
            filter: drop-shadow(0 0 4px #FFF7F0) drop-shadow(0 0 10px #E7C687);
            transform: scale(1) rotate(0deg);
          }
          100% {
            filter: drop-shadow(0 0 12px #FFF7F0) drop-shadow(0 0 24px #C8A16A);
            transform: scale(1.25) rotate(45deg);
          }
        }

        /* Tiny floating heartlets around the rings */
        .ring-heart {
          animation: heartFloat 3.5s ease-in-out infinite;
          opacity: 0.75;
        }

        @keyframes heartFloat {
          0%, 100% { transform: translateY(0) scale(0.9); opacity: 0.4; }
          50% { transform: translateY(-8px) scale(1.1); opacity: 0.9; }
        }
      `}</style>

      <svg
        className="rings-svg-container"
        viewBox="0 0 180 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Antique Gold Gradient */}
          <linearGradient id="goldRingGrad1" x1="20" y1="20" x2="110" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF4DE" />
            <stop offset="25%" stopColor="#E7C687" />
            <stop offset="55%" stopColor="#C8A16A" />
            <stop offset="85%" stopColor="#8A5A20" />
            <stop offset="100%" stopColor="#C8A16A" />
          </linearGradient>

          <linearGradient id="goldRingGrad2" x1="70" y1="20" x2="160" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF8EB" />
            <stop offset="30%" stopColor="#F0D5A0" />
            <stop offset="65%" stopColor="#C8A16A" />
            <stop offset="90%" stopColor="#966528" />
            <stop offset="100%" stopColor="#D8AF72" />
          </linearGradient>

          {/* Diamond Shimmer */}
          <linearGradient id="diamondGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#EBF4FF" />
            <stop offset="100%" stopColor="#D5E6F8" />
          </linearGradient>
        </defs>

        <g className="rings-float-group">
          {/* Left Ring (Groom's Classic Band) */}
          <g className={`ring-left ${interlocked ? 'interlocked' : 'initial'}`}>
            {/* Outer Ellipse */}
            <ellipse
              cx="66"
              cy="65"
              rx="34"
              ry="27"
              stroke="url(#goldRingGrad1)"
              strokeWidth="6.5"
              fill="none"
            />
            {/* Inner rim highlight */}
            <ellipse
              cx="66"
              cy="65"
              rx="29.5"
              ry="22.5"
              stroke="#FFF8EB"
              strokeWidth="1.2"
              strokeOpacity="0.75"
              fill="none"
            />
            {/* Subtle bevel shadow */}
            <ellipse
              cx="67"
              cy="66"
              rx="33.5"
              ry="26.5"
              stroke="#5A360E"
              strokeWidth="0.9"
              strokeOpacity="0.6"
              fill="none"
            />
          </g>

          {/* Right Ring (Bride's Solitaire Diamond Ring) */}
          <g className={`ring-right ${interlocked ? 'interlocked' : 'initial'}`}>
            {/* Outer Ellipse */}
            <ellipse
              cx="110"
              cy="68"
              rx="34"
              ry="27"
              stroke="url(#goldRingGrad2)"
              strokeWidth="6.5"
              fill="none"
            />
            {/* Inner rim highlight */}
            <ellipse
              cx="110"
              cy="68"
              rx="29.5"
              ry="22.5"
              stroke="#FFF8EB"
              strokeWidth="1.2"
              strokeOpacity="0.75"
              fill="none"
            />
            {/* Crown Diamond Mount */}
            <g transform="translate(104, 34)">
              {/* Gold Prongs */}
              <path d="M2 10 L6 2 L10 10 Z" fill="#C8A16A" />
              {/* Faceted Solitaire Gem */}
              <polygon points="6,0 12,4 10,10 2,10 0,4" fill="url(#diamondGrad)" />
              <polygon points="6,0 10,10 6,12 2,10" fill="#FFFFFF" opacity="0.6" />
              <circle cx="6" cy="4" r="1.5" fill="#FFFFFF" />
            </g>
          </g>

          {/* Central Radiance Sparkle when interlocked */}
          <g className={`center-sparkle ${sparkleActive ? 'visible' : 'hidden'}`}>
            {/* 4-point Diamond Starburst */}
            <path
              d="M88 32 Q 88 45 75 45 Q 88 45 88 58 Q 88 45 101 45 Q 88 45 88 32 Z"
              fill="#FFF7F0"
            />
            <circle cx="88" cy="45" r="2.5" fill="#FFE5B4" />

            {/* Small diagonal sparkles */}
            <path
              d="M82 39 L94 51 M82 51 L94 39"
              stroke="#E7C687"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>

          {/* Little Floating Decorative Hearts */}
          <g className="ring-heart" transform="translate(36, 32)">
            <path
              d="M6 3.2 C6 1.4 4.5 0 2.8 0 C1.2 0 0 1.2 0 2.8 C0 5.2 6 8.5 6 8.5 C6 8.5 12 5.2 12 2.8 C12 1.2 10.8 0 9.2 0 C7.5 0 6 1.4 6 3.2 Z"
              fill="#D9A0A0"
              opacity="0.85"
            />
          </g>
          <g className="ring-heart" transform="translate(136, 36)" style={{ animationDelay: '1.8s' }}>
            <path
              d="M5 2.6 C5 1.1 3.8 0 2.3 0 C1 0 0 1 0 2.3 C0 4.3 5 7 5 7 C5 7 10 4.3 10 2.3 C10 1 9 0 7.7 0 C6.2 0 5 1.1 5 2.6 Z"
              fill="#E7C687"
              opacity="0.75"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
