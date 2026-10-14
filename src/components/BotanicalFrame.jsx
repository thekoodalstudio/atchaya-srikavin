import React from 'react';

/**
 * Botanical Corner Frame
 * Recreates the delicate ivory line-art botanical corner illustrations
 * from the reference invitation in all four corners.
 */
export default function BotanicalFrame() {
  return (
    <div className="botanical-frame-container" aria-hidden="true">
      <style>{`
        .botanical-frame-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 5;
          overflow: hidden;
        }

        .botanical-corner {
          position: absolute;
          width: 140px;
          height: 180px;
          opacity: 0.88;
          transition: all 0.5s ease;
        }

        @media (min-width: 480px) {
          .botanical-corner {
            width: 180px;
            height: 230px;
          }
        }

        @media (min-width: 768px) {
          .botanical-corner {
            width: 240px;
            height: 300px;
            opacity: 0.95;
          }
        }

        .corner-tl {
          top: 0;
          left: 0;
        }

        .corner-tr {
          top: 0;
          right: 0;
          transform: scaleX(-1);
        }

        .corner-bl {
          bottom: 0;
          left: 0;
          transform: scaleY(-1);
        }

        .corner-br {
          bottom: 0;
          right: 0;
          transform: scale(-1, -1);
        }

        /* Subtle gentle breathing for corner floral buds */
        .botanical-bud {
          animation: budBreathe 4s ease-in-out infinite alternate;
          transform-origin: center;
        }

        @keyframes budBreathe {
          0% { transform: scale(1); filter: drop-shadow(0 0 1px rgba(255, 247, 240, 0.4)); }
          100% { transform: scale(1.08); filter: drop-shadow(0 0 5px rgba(231, 198, 135, 0.7)); }
        }
      `}</style>

      {/* Top Left */}
      <div className="botanical-corner corner-tl">
        <BotanicalBranchSvg />
      </div>

      {/* Top Right */}
      <div className="botanical-corner corner-tr">
        <BotanicalBranchSvg />
      </div>

      {/* Bottom Left */}
      <div className="botanical-corner corner-bl">
        <BotanicalBranchSvg />
      </div>

      {/* Bottom Right */}
      <div className="botanical-corner corner-br">
        <BotanicalBranchSvg />
      </div>
    </div>
  );
}

function BotanicalBranchSvg() {
  return (
    <svg viewBox="0 0 240 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Main Arching Stem */}
      <path
        d="M-10 -10 C 30 50, 60 120, 50 190 C 42 245, 10 275, -5 295"
        stroke="#FFF7F0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      <path
        d="M10 -5 C 55 45, 115 70, 175 60 C 210 55, 230 40, 245 25"
        stroke="#FFF7F0"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />

      {/* Secondary Stem branching out */}
      <path
        d="M50 130 C 85 145, 135 150, 170 125 C 190 110, 205 90, 215 75"
        stroke="#FFF7F0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />

      {/* Leaf Pair 1 (Top) */}
      <g stroke="#FFF7F0" strokeWidth="1.2" strokeOpacity="0.9" fill="#FFF7F0" fillOpacity="0.04">
        {/* Leaf 1A */}
        <path d="M45 40 C 65 30, 95 38, 110 52 C 95 62, 65 60, 45 40 Z" />
        <path d="M45 40 Q 80 48 110 52" strokeWidth="0.8" />
        <path d="M60 44 L 70 38 M 75 48 L 85 42 M 90 51 L 100 46" strokeWidth="0.6" />

        {/* Leaf 1B */}
        <path d="M70 70 C 85 85, 95 115, 90 135 C 75 125, 68 95, 70 70 Z" />
        <path d="M70 70 Q 80 105 90 135" strokeWidth="0.8" />
        <path d="M74 88 L 82 82 M 77 105 L 86 98 M 82 120 L 88 115" strokeWidth="0.6" />
      </g>

      {/* Leaf Pair 2 (Mid-left outward) */}
      <g stroke="#FFF7F0" strokeWidth="1.2" strokeOpacity="0.85" fill="#FFF7F0" fillOpacity="0.04">
        <path d="M50 170 C 75 175, 110 195, 125 225 C 95 225, 70 205, 50 170 Z" />
        <path d="M50 170 Q 88 198 125 225" strokeWidth="0.8" />
        <path d="M68 185 L 78 178 M 85 198 L 98 190 M 102 210 L 115 204" strokeWidth="0.6" />

        {/* Opposite Leaf */}
        <path d="M40 195 C 20 215, 20 250, 30 270 C 45 255, 50 225, 40 195 Z" />
        <path d="M40 195 Q 32 235 30 270" strokeWidth="0.8" />
      </g>

      {/* Side Frond Leaves (Rightward spreading) */}
      <g stroke="#FFF7F0" strokeWidth="1.2" strokeOpacity="0.85" fill="#FFF7F0" fillOpacity="0.04">
        <path d="M120 62 C 145 50, 175 58, 195 75 C 175 85, 145 80, 120 62 Z" />
        <path d="M120 62 Q 160 70 195 75" strokeWidth="0.8" />

        <path d="M130 145 C 160 140, 190 155, 205 180 C 180 185, 150 175, 130 145 Z" />
        <path d="M130 145 Q 170 162 205 180" strokeWidth="0.8" />
      </g>

      {/* Decorative Blossoms & Jasmine Floral Bud Outlines */}
      <g className="botanical-bud" stroke="#FFF7F0" strokeWidth="1.3" fill="#FFF7F0" fillOpacity="0.12">
        {/* Flower 1 */}
        <circle cx="178" cy="60" r="7" stroke="#E7C687" strokeWidth="1.5" />
        <circle cx="178" cy="60" r="2.5" fill="#E7C687" />
        <path d="M178 53 Q 185 47 188 54 Q 181 60 178 53" />
        <path d="M185 60 Q 192 65 186 70 Q 180 63 185 60" />
        <path d="M178 67 Q 172 73 167 66 Q 173 61 178 67" />
        <path d="M171 60 Q 164 54 170 48 Q 175 55 171 60" />

        {/* Flower 2 (Bud) */}
        <circle cx="218" cy="74" r="5" stroke="#C8A16A" strokeWidth="1.2" />
        <circle cx="218" cy="74" r="2" fill="#E7C687" />

        {/* Flower 3 on lower branch */}
        <circle cx="170" cy="125" r="6" stroke="#E7C687" strokeWidth="1.4" />
        <circle cx="170" cy="125" r="2.2" fill="#E7C687" />
      </g>
    </svg>
  );
}
