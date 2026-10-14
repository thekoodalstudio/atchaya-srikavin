import React, { useState, useEffect } from 'react';
import { INVITATION_DATA } from '../data/invitation';
import { Sparkles, Heart } from 'lucide-react';

/**
 * Grand Royal Loading Page & Ceremonial Transition
 * 
 * Features:
 * - NO Cupid (completely removed)
 * - Grand traditional Mandap Arch & glowing ceremonial Vilakku (lamps)
 * - Dynamic 3D Interlocking Rings Animation:
 *   * Dual rings spinning on 3D axes with metallic bevel highlights
 *   * Convergence with radiant golden shockwave and celestial light beams
 *   * Solitaire diamond with pulsing starburst refractions
 * - Meaningful sacred quotes & Tamil welcoming blessings
 * - Spectacular Grand Royal Velvet Curtain Opening & Golden Flare Iris Transition
 *   into the main invitation!
 */
export default function IntroAnimation({ onOpen, isOpened }) {
  const [stage, setStage] = useState(1);
  const [isOpeningCurtain, setIsOpeningCurtain] = useState(false);

  useEffect(() => {
    // Stage 1 (0ms): Grand arch, sacred diya glow, and rings initial 3D rotation
    // Stage 2 (800ms): Rings converge, spin, and interlock with golden light shockwave
    const tRings = setTimeout(() => setStage(2), 800);

    // Stage 3 (1800ms): Starburst radiance, "Atchaya & Srikavin" royal typography reveal
    const tNames = setTimeout(() => setStage(3), 1800);

    // Stage 4 (2800ms): Sacred Tamil & English welcoming quotes unfurl
    const tQuotes = setTimeout(() => setStage(4), 2800);

    // Stage 5 (4600ms): Royal Curtain Opening & Iris Light Transition directly to invitation
    const tTransition = setTimeout(() => {
      setIsOpeningCurtain(true);
      setTimeout(() => {
        onOpen();
      }, 900);
    }, 4600);

    return () => {
      clearTimeout(tRings);
      clearTimeout(tNames);
      clearTimeout(tQuotes);
      clearTimeout(tTransition);
    };
  }, [onOpen]);

  if (isOpened) return null;

  return (
    <div
      className={`grand-intro-viewport ${isOpeningCurtain ? 'curtain-opening' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Grand Royal Welcome"
    >
      <style>{`
        .grand-intro-viewport {
          position: fixed;
          inset: 0;
          z-index: 99999;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #150205;
        }

        /* Royal Velvet Curtains (Left & Right Split) */
        .curtain-panel {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50.5%;
          background: radial-gradient(circle at 50% 30%, #460d16 0%, #29060b 60%, #160205 100%);
          z-index: 2;
          transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);
        }

        .curtain-panel.left {
          left: 0;
          border-right: 1px solid rgba(200, 161, 106, 0.35);
        }

        .curtain-panel.right {
          right: 0;
          border-left: 1px solid rgba(200, 161, 106, 0.35);
        }

        /* Grand Curtain Opening Transition */
        .curtain-opening .curtain-panel.left {
          transform: translateX(-100%);
        }

        .curtain-opening .curtain-panel.right {
          transform: translateX(100%);
        }

        .curtain-opening .grand-center-stage {
          transform: scale(1.1);
          opacity: 0;
          filter: blur(8px);
        }

        .curtain-opening .central-iris-flash {
          opacity: 1;
          transform: translate(-50%, -50%) scale(3.5);
        }

        /* Central Iris Flash Burst */
        .central-iris-flash {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, #FFF7F0 0%, #E7C687 40%, rgba(200, 161, 106, 0.4) 65%, transparent 80%);
          opacity: 0;
          z-index: 50;
          pointer-events: none;
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Embossed Floral Velvet Fabric */
        .velvet-damask-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.16;
          background-image: 
            radial-gradient(rgba(200, 161, 106, 0.2) 1.5px, transparent 1.5px),
            radial-gradient(rgba(255, 247, 240, 0.1) 1px, transparent 1px);
          background-size: 36px 36px, 72px 72px;
          background-position: 0 0, 18px 18px;
          pointer-events: none;
        }

        /* Grand Stage Container */
        .grand-center-stage {
          position: relative;
          z-index: 10;
          max-width: 680px;
          width: 92%;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          transition: all 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Grand Temple Arch & Vilakku Motif */
        .royal-arch-top {
          width: 100%;
          max-width: 460px;
          height: auto;
          margin-bottom: 0.5rem;
          filter: drop-shadow(0 0 14px rgba(231, 198, 135, 0.5));
          opacity: 0;
          transform: translateY(-16px);
          animation: archFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes archFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Sacred Auspicious Heading */
        .grand-auspicious-badge {
          font-family: var(--font-tamil);
          font-size: 0.85rem;
          letter-spacing: 0.22em;
          color: var(--color-light-gold);
          margin-bottom: 0.6rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          text-shadow: 0 0 10px rgba(200, 161, 106, 0.6);
        }

        /* 3D Interlocking Rings Grand Animation */
        .grand-rings-arena {
          position: relative;
          width: 220px;
          height: 140px;
          margin: 0.8rem auto 1rem auto;
          perspective: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 480px) {
          .grand-rings-arena {
            width: 260px;
            height: 160px;
          }
        }

        /* Ring Light Halo */
        .rings-radiance-glow {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(231, 198, 135, 0.35) 0%, rgba(200, 161, 106, 0.1) 50%, transparent 75%);
          filter: blur(14px);
          animation: radianceBreathe 3s ease-in-out infinite alternate;
        }

        @keyframes radianceBreathe {
          0% { transform: scale(0.9); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 0.95; }
        }

        /* 3D Animated Ring Elements */
        .ring-3d-left {
          position: absolute;
          left: 20px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 7px solid #C8A16A;
          border-top-color: #FFF7F0;
          border-bottom-color: #8C5F22;
          box-shadow: 0 8px 25px rgba(18, 2, 5, 0.8), 0 0 15px rgba(200, 161, 106, 0.5);
          transform-style: preserve-3d;
          animation: ringSpinLeft 4s ease-in-out infinite alternate;
          transition: all 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ring-3d-right {
          position: absolute;
          right: 20px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 7px solid #E7C687;
          border-top-color: #FFFDF8;
          border-bottom-color: #9D7438;
          box-shadow: 0 8px 25px rgba(18, 2, 5, 0.8), 0 0 18px rgba(231, 198, 135, 0.6);
          transform-style: preserve-3d;
          animation: ringSpinRight 4s ease-in-out infinite alternate;
          transition: all 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes ringSpinLeft {
          0% { transform: rotateY(-35deg) rotateX(15deg) rotateZ(-20deg); }
          100% { transform: rotateY(-10deg) rotateX(25deg) rotateZ(-10deg); }
        }

        @keyframes ringSpinRight {
          0% { transform: rotateY(35deg) rotateX(15deg) rotateZ(20deg); }
          100% { transform: rotateY(10deg) rotateX(25deg) rotateZ(10deg); }
        }

        /* Stage 2+ Interlocking Convergence */
        .grand-intro-viewport[data-stage="2"] .ring-3d-left,
        .grand-intro-viewport[data-stage="3"] .ring-3d-left,
        .grand-intro-viewport[data-stage="4"] .ring-3d-left {
          left: 45px;
          border-color: #E7C687;
          border-top-color: #FFF7F0;
          box-shadow: 0 0 30px rgba(231, 198, 135, 0.8);
        }

        .grand-intro-viewport[data-stage="2"] .ring-3d-right,
        .grand-intro-viewport[data-stage="3"] .ring-3d-right,
        .grand-intro-viewport[data-stage="4"] .ring-3d-right {
          right: 45px;
          border-color: #E7C687;
          border-top-color: #FFF7F0;
          box-shadow: 0 0 30px rgba(231, 198, 135, 0.8);
        }

        /* Solitaire Gem on Crown */
        .ring-crown-gem {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 16px;
          height: 16px;
          background: #FFFFFF;
          box-shadow: 0 0 15px #FFF7F0, 0 0 25px #E7C687;
        }

        /* Golden Sparkle Flare Apex */
        .rings-sparkle-blast {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, #FFFDF8 20%, #E7C687 45%, transparent 70%);
          opacity: 0;
          pointer-events: none;
        }

        .grand-intro-viewport[data-stage="2"] .rings-sparkle-blast,
        .grand-intro-viewport[data-stage="3"] .rings-sparkle-blast,
        .grand-intro-viewport[data-stage="4"] .rings-sparkle-blast {
          animation: shockwaveFlare 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes shockwaveFlare {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          40% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }

        /* Couple Names Typography */
        .grand-names-wrapper {
          margin: 0.8rem 0;
          opacity: 0;
          transform: scale(0.92);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .grand-intro-viewport[data-stage="3"] .grand-names-wrapper,
        .grand-intro-viewport[data-stage="4"] .grand-names-wrapper {
          opacity: 1;
          transform: scale(1);
        }

        .grand-couple-calligraphy {
          font-family: 'Parisienne', 'Allura', 'Great Vibes', cursive;
          font-size: clamp(2.4rem, 8vw, 3.8rem);
          font-weight: 400;
          color: var(--color-warm-ivory);
          letter-spacing: 0.02em;
          line-height: 1.15;
          display: inline-block;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(231, 198, 135, 0.55);
        }

        .grand-ampersand {
          font-family: 'Cinzel Decorative', cursive;
          font-size: clamp(2rem, 6vw, 2.8rem);
          color: var(--color-light-gold);
          margin: 0 0.4rem;
          display: inline-block;
          text-shadow: 0 0 15px rgba(200, 161, 106, 0.7);
        }

        /* Meaningful Welcoming Quotes */
        .grand-quotes-block {
          max-width: 540px;
          margin-top: 0.5rem;
          opacity: 0;
          transform: translateY(14px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .grand-intro-viewport[data-stage="4"] .grand-quotes-block {
          opacity: 1;
          transform: translateY(0);
        }

        .quote-tamil-line {
          font-family: var(--font-tamil);
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--color-light-gold);
          margin-bottom: 0.4rem;
          letter-spacing: 0.04em;
        }

        .quote-english-line {
          font-family: var(--font-elegant-serif);
          font-style: italic;
          font-size: 1.1rem;
          line-height: 1.45;
          color: rgba(255, 247, 240, 0.9);
          letter-spacing: 0.05em;
        }

        .grand-ceremonial-tag {
          font-family: var(--font-serif-heading);
          font-size: 0.76rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--color-light-gold);
          margin-top: 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Royal Curtain Panels for Grand Opening Reveal */}
      <div className="curtain-panel left">
        <div className="velvet-damask-overlay" />
      </div>
      <div className="curtain-panel right">
        <div className="velvet-damask-overlay" />
      </div>

      {/* Central Iris Light Flash */}
      <div className="central-iris-flash" />

      {/* Grand Center Stage */}
      <div className="grand-center-stage">
        {/* Royal Mandap Temple Arch Motif with Vilakku (Sacred Lamps) */}
        <div className="royal-arch-top">
          <svg viewBox="0 0 460 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Top Ornamental Toran Garland & Mandap Arch */}
            <path
              d="M10 60 Q 115 15 230 15 Q 345 15 450 60"
              stroke="#C8A16A"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M25 60 Q 120 25 230 25 Q 340 25 435 60"
              stroke="#FFF7F0"
              strokeWidth="0.8"
              strokeDasharray="4 4"
              fill="none"
            />
            {/* Hanging Golden Kalasam / Bell Droplets */}
            <circle cx="80" cy="46" r="3" fill="#E7C687" />
            <circle cx="150" cy="28" r="3.5" fill="#E7C687" />
            <circle cx="230" cy="15" r="5" fill="#FFF7F0" />
            <circle cx="310" cy="28" r="3.5" fill="#E7C687" />
            <circle cx="380" cy="46" r="3" fill="#E7C687" />
            {/* Sacred Vilakku (Traditional Lamp Flames) on sides */}
            <path d="M40 55 Q 40 45 44 42 Q 48 45 48 55 Z" fill="#FFA500" />
            <circle cx="44" cy="48" r="1.5" fill="#FFF7F0" />
            <path d="M416 55 Q 416 45 420 42 Q 424 45 424 55 Z" fill="#FFA500" />
            <circle cx="420" cy="48" r="1.5" fill="#FFF7F0" />
          </svg>
        </div>

        {/* Sacred Tamil Welcome Title */}
        <div className="grand-auspicious-badge">
          <Sparkles size={13} />
          <span>மங்கலப் பெருவிழா அழைப்பிதழ்</span>
          <Sparkles size={13} />
        </div>

        {/* 3D Interlocking Rings Grand Animation */}
        <div className="grand-rings-arena">
          <div className="rings-radiance-glow" />
          <div className="rings-sparkle-blast" />

          {/* Left Ring (Groom's Antique Gold Band) */}
          <div className="ring-3d-left" />

          {/* Right Ring (Bride's Solitaire Diamond Ring) */}
          <div className="ring-3d-right">
            <div className="ring-crown-gem" />
          </div>
        </div>

        {/* Couple's Names in Parisienne Luxury Script */}
        <div className="grand-names-wrapper">
          <h1 className="grand-couple-calligraphy">
            <span>{INVITATION_DATA.bride.name}</span>
            <span className="grand-ampersand">&</span>
            <span>{INVITATION_DATA.groom.name}</span>
          </h1>
        </div>

        {/* Meaningful Welcoming Quotes */}
        <div className="grand-quotes-block">
          <div className="quote-tamil-line">
            "இரு மனங்கள் இணையும் மங்கலத் தருணம் • உங்களின் வருகை எங்கள் பெருமகிழ்ச்சி"
          </div>
          <div className="quote-english-line">
            "Two hearts unite in an eternal promise of love and togetherness."
          </div>

          <div className="grand-ceremonial-tag">
            <Sparkles size={14} />
            <span>Opening The Sacred Invitation</span>
            <Sparkles size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
