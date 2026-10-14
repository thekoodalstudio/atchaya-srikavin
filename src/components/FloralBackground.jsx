import React, { useMemo } from 'react';

/**
 * Animated Floral & Butterfly Atmosphere
 * Features:
 * - Slowly falling burgundy/pink rose petals
 * - Drifting fragrant white jasmine (malli) flowers
 * - Beautiful fluttering golden & rose butterflies with 3D wing flapping
 * - Twinkling gold particles
 * - Embossed rose damask backdrop
 */
export default function FloralBackground() {
  const rosePetals = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: `rose-${i}`,
      left: `${(i * 7.5 + (i % 3) * 4) % 96}%`,
      delay: `${(i * 1.8) % 15}s`,
      duration: `${14 + (i % 5) * 3}s`,
      size: `${14 + (i % 4) * 6}px`,
      driftX: `${(i % 2 === 0 ? 1 : -1) * (20 + (i % 3) * 25)}px`,
      rotDeg: `${(i % 2 === 0 ? 1 : -1) * (180 + i * 45)}deg`
    }));
  }, []);

  const jasminePetals = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: `jasmine-${i}`,
      left: `${(10 + i * 9) % 94}%`,
      delay: `${(i * 2.2 + 1) % 16}s`,
      duration: `${16 + (i % 4) * 4}s`,
      size: `${12 + (i % 3) * 5}px`,
      driftX: `${(i % 2 === 0 ? -1 : 1) * (30 + (i % 3) * 20)}px`,
      rotDeg: `${(i % 2 === 0 ? -1 : 1) * (150 + i * 35)}deg`
    }));
  }, []);

  const goldParticles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: `gold-${i}`,
      top: `${(i * 6 + 5) % 95}%`,
      left: `${(i * 5.8 + 3) % 95}%`,
      delay: `${(i * 0.7) % 6}s`,
      duration: `${3.5 + (i % 3) * 1.5}s`,
      size: `${2.5 + (i % 3) * 2}px`
    }));
  }, []);

  // Delicate fluttering butterflies with staggered diagonal flight paths
  const butterflies = useMemo(() => {
    return [
      { id: 'bf-1', startLeft: '5%', delay: '0s', duration: '18s', size: 28, color: '#E7C687' },
      { id: 'bf-2', startLeft: '78%', delay: '6s', duration: '22s', size: 24, color: '#F0D5A0' },
      { id: 'bf-3', startLeft: '45%', delay: '12s', duration: '20s', size: 26, color: '#D9A0A0' },
      { id: 'bf-4', startLeft: '88%', delay: '4s', duration: '24s', size: 22, color: '#E7C687' }
    ];
  }, []);

  return (
    <div className="embossed-bg-container" aria-hidden="true">
      <style>{`
        /* Butterfly 3D Wing Flapping & Flight Motion */
        @keyframes butterflyFlight1 {
          0% {
            transform: translate3d(0, 105vh, 0) scale(0.8) rotate(15deg);
            opacity: 0;
          }
          10% { opacity: 0.9; }
          40% { transform: translate3d(120px, 60vh, 0) scale(1) rotate(-10deg); }
          70% { transform: translate3d(60px, 30vh, 0) scale(0.9) rotate(20deg); }
          90% { opacity: 0.85; }
          100% {
            transform: translate3d(180px, -15vh, 0) scale(0.85) rotate(-5deg);
            opacity: 0;
          }
        }

        @keyframes butterflyFlight2 {
          0% {
            transform: translate3d(0, 105vh, 0) scale(0.85) rotate(-20deg);
            opacity: 0;
          }
          10% { opacity: 0.85; }
          45% { transform: translate3d(-100px, 55vh, 0) scale(0.95) rotate(15deg); }
          80% { transform: translate3d(-50px, 20vh, 0) scale(1) rotate(-15deg); }
          90% { opacity: 0.8; }
          100% {
            transform: translate3d(-140px, -15vh, 0) scale(0.8) rotate(10deg);
            opacity: 0;
          }
        }

        .butterfly-container {
          position: absolute;
          pointer-events: none;
          z-index: 2;
          perspective: 600px;
        }

        .butterfly-wing-left {
          transform-origin: right center;
          animation: flapLeft 0.35s ease-in-out infinite alternate;
        }

        .butterfly-wing-right {
          transform-origin: left center;
          animation: flapRight 0.35s ease-in-out infinite alternate;
        }

        @keyframes flapLeft {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(65deg); }
        }

        @keyframes flapRight {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-65deg); }
        }
      `}</style>

      {/* Embossed damask rose texture pattern */}
      <div className="embossed-floral-pattern" />

      {/* SVG embossed relief texture */}
      <svg className="embossed-texture-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <radialGradient id="embossGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#871727" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#430b13" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1a0307" stopOpacity="0.8" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#embossGrad)" />
      </svg>

      {/* Fluttering Golden Butterflies */}
      {butterflies.map((bf, idx) => (
        <div
          key={bf.id}
          className="butterfly-container"
          style={{
            left: bf.startLeft,
            bottom: '-40px',
            width: `${bf.size}px`,
            height: `${bf.size * 0.85}px`,
            animation: `${idx % 2 === 0 ? 'butterflyFlight1' : 'butterflyFlight2'} ${bf.duration} ease-in-out infinite`,
            animationDelay: bf.delay
          }}
        >
          <svg viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 6px rgba(231, 198, 135, 0.6))' }}>
            {/* Left Wing */}
            <g className="butterfly-wing-left">
              <path
                d="M25 20 C 18 5, 2 8, 4 22 C 5 28, 15 32, 25 24 Z"
                fill={bf.color}
                opacity="0.85"
              />
              <path
                d="M25 22 C 16 26, 8 32, 12 38 C 16 40, 22 32, 25 24 Z"
                fill="#C8A16A"
                opacity="0.75"
              />
              <circle cx="14" cy="18" r="1.5" fill="#FFF7F0" />
            </g>

            {/* Right Wing */}
            <g className="butterfly-wing-right">
              <path
                d="M25 20 C 32 5, 48 8, 46 22 C 45 28, 35 32, 25 24 Z"
                fill={bf.color}
                opacity="0.85"
              />
              <path
                d="M25 22 C 34 26, 42 32, 38 38 C 34 40, 28 32, 25 24 Z"
                fill="#C8A16A"
                opacity="0.75"
              />
              <circle cx="36" cy="18" r="1.5" fill="#FFF7F0" />
            </g>

            {/* Butterfly Body & Antennae */}
            <line x1="25" y1="12" x2="25" y2="30" stroke="#51101B" strokeWidth="2" strokeLinecap="round" />
            <path d="M25 12 Q 22 7 19 6" stroke={bf.color} strokeWidth="1" strokeLinecap="round" />
            <path d="M25 12 Q 28 7 31 6" stroke={bf.color} strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      ))}

      {/* Falling Rose Petals */}
      {rosePetals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            position: 'absolute',
            top: '-30px',
            left: p.left,
            width: p.size,
            height: `calc(${p.size} * 1.25)`,
            animation: `fall-petal ${p.duration} linear infinite`,
            animationDelay: p.delay,
            '--drift-x': p.driftX,
            '--rot-deg': p.rotDeg,
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <svg viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path
              d="M15 0C8 8 0 16 2 27C3.5 35 12 38 15 38C18 38 26.5 35 28 27C30 16 22 8 15 0Z"
              fill="url(#rosePetalGrad)"
              opacity="0.85"
            />
            <defs>
              <linearGradient id="rosePetalGrad" x1="0" y1="0" x2="30" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D9A0A0" />
                <stop offset="0.45" stopColor="#A8283C" />
                <stop offset="1" stopColor="#51101B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      {/* Drifting White Jasmine (Malli) Petals */}
      {jasminePetals.map((j) => (
        <div
          key={j.id}
          className="jasmine"
          style={{
            position: 'absolute',
            top: '-25px',
            left: j.left,
            width: j.size,
            height: `calc(${j.size} * 1.4)`,
            animation: `jasmine-float ${j.duration} ease-in-out infinite`,
            animationDelay: j.delay,
            '--drift-x': j.driftX,
            '--rot-deg': j.rotDeg,
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <svg viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path
              d="M10 0C6 6 2 13 4 20C5 24 8 28 10 28C12 28 15 24 16 20C18 13 14 6 10 0Z"
              fill="#FFF7F0"
              opacity="0.92"
            />
            <circle cx="10" cy="22" r="1.5" fill="#E7C687" opacity="0.8" />
          </svg>
        </div>
      ))}

      {/* Floating Gold Sparkle Particles */}
      {goldParticles.map((g) => (
        <div
          key={g.id}
          className="gold-particle"
          style={{
            position: 'absolute',
            top: g.top,
            left: g.left,
            width: g.size,
            height: g.size,
            borderRadius: '50%',
            backgroundColor: '#E7C687',
            boxShadow: '0 0 8px #FFF0D6, 0 0 14px #C8A16A',
            animation: `gold-twinkle ${g.duration} ease-in-out infinite`,
            animationDelay: g.delay,
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}

      <div className="vignette-overlay" />
    </div>
  );
}
