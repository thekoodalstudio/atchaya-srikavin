import React, { useMemo } from 'react';

/**
 * Animated Floral Atmosphere
 * Features:
 * - Slowly falling burgundy/pink rose petals
 * - Drifting fragrant white jasmine (malli) flowers/petals
 * - Twinkling gold particles
 * - Embossed rose damask backdrop
 */
export default function FloralBackground() {
  // Generate random petals with deterministic keys for smooth CSS animations
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

  return (
    <div className="embossed-bg-container" aria-hidden="true">
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
          <filter id="subtleEmboss">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.8  0 0 0 0 0.7  0 0 0 0 0.6  0 0 0 0.08 0" />
            <feComposite in2="SourceGraphic" in="glint" operator="in" />
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#embossGrad)" />
      </svg>

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

      {/* Vignette Shadowing */}
      <div className="vignette-overlay" />
    </div>
  );
}
