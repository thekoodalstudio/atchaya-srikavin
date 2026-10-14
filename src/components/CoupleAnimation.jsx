import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { INVITATION_DATA } from '../data/invitation';
import { RotateCcw, Sparkles } from 'lucide-react';
import '../styles/couple.css';

/**
 * Signature Tamil Hindu Couple Animation
 * 
 * Scroll-Triggered:
 * Uses IntersectionObserver so the animation starts ONLY when the visitor
 * scrolls down to this specific section!
 */
export default function CoupleAnimation() {
  const [scene, setScene] = useState(1);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);
  const stageRef = useRef(null);
  const timelineRef = useRef([]);

  const runTimeline = () => {
    timelineRef.current.forEach(clearTimeout);
    timelineRef.current = [];

    setScene(1);

    // Scene 2: Meeting & Turning (after 2.2s)
    const t2 = setTimeout(() => {
      setScene(2);
    }, 2200);

    // Scene 3: Joining Hands (after 3.8s)
    const t3 = setTimeout(() => {
      setScene(3);
    }, 3800);

    // Scene 4: Ring Ceremony (after 5.2s)
    const t4 = setTimeout(() => {
      setScene(4);
    }, 5200);

    // Scene 5: Celebration & Confetti (after 6.8s)
    const t5 = setTimeout(() => {
      setScene(5);
      triggerCelebrationConfetti();
    }, 6800);

    // Scene 6: Final Pose & Settle (after 8.2s)
    const t6 = setTimeout(() => {
      setScene(6);
      setIsReplaying(false);
    }, 8200);

    timelineRef.current = [t2, t3, t4, t5, t6];
  };

  // Scroll trigger via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          runTimeline();
        }
      },
      {
        threshold: 0.35
      }
    );

    const currentElem = stageRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
      timelineRef.current.forEach(clearTimeout);
    };
  }, [hasTriggered]);

  const triggerCelebrationConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.62 },
        colors: ['#E7C687', '#C8A16A', '#FFF7F0', '#D9A0A0', '#871727'],
        shapes: ['circle'],
        ticks: 220,
        gravity: 0.8,
        scalar: 0.85
      });
    } catch {}
  };

  const handleReplay = () => {
    setIsReplaying(true);
    runTimeline();
  };

  const getStepLabel = () => {
    switch (scene) {
      case 1:
        return 'Approaching with Love';
      case 2:
        return 'The Sacred Meeting';
      case 3:
        return 'Two Souls Joining Hands';
      case 4:
        return 'Exchange of Golden Rings';
      case 5:
      case 6:
        return 'Joined in Eternal Grace';
      default:
        return 'A Celebration of Love';
    }
  };

  return (
    <section
      ref={stageRef}
      className="couple-stage-container"
      aria-label="Couple Engagement Animation"
    >
      <div className="couple-halo" />
      
      {/* Decorative Floral Arch Outline */}
      <svg className="couple-arch-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30 300 C 30 140, 100 30, 200 30 C 300 30, 370 140, 370 300"
          stroke="#C8A16A"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />
        <path
          d="M50 300 C 50 160, 110 55, 200 55 C 290 55, 350 160, 350 300"
          stroke="#FFF7F0"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />
        <circle cx="200" cy="30" r="5" fill="#E7C687" />
        <path d="M190 30 Q 200 15 210 30 Q 200 22 190 30 Z" fill="#FFF7F0" />
      </svg>

      {/* Step Badge */}
      <div className="couple-step-badge">
        <Sparkles size={13} />
        <span>{getStepLabel()}</span>
      </div>

      {/* Canvas Stage */}
      <div className="couple-canvas" data-scene={scene}>
        <div className="ring-ceremony-halo" />

        {/* Floating Golden Engagement Ring */}
        <div className="ceremony-ring-element">
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
            <ellipse cx="25" cy="27" rx="14" ry="10" stroke="#FFF7F0" strokeWidth="3" />
            <ellipse cx="25" cy="27" rx="14" ry="10" stroke="#E7C687" strokeWidth="2.5" />
            <polygon points="25,12 28,16 25,19 22,16" fill="#FFFFFF" />
            <circle cx="25" cy="16" r="1.5" fill="#FFE5B4" />
          </svg>
        </div>

        {/* Male Character (Groom: Srikavin) */}
        <div className="character-figure male-character">
          <MaleGroomSvg />
        </div>

        {/* Female Character (Bride: Atchaya) */}
        <div className="character-figure female-character">
          <FemaleBrideSvg />
        </div>
      </div>

      {/* Celebration Info & Revealed Names */}
      <div className="couple-celebration-info">
        <h2 className="couple-celebration-names">
          <span>{INVITATION_DATA.bride.name}</span>
          <span className="heart-icon">♥</span>
          <span>{INVITATION_DATA.groom.name}</span>
        </h2>
        <p className="couple-forever-text">
          "{INVITATION_DATA.quotes.together}"
        </p>
      </div>

      {/* Replay Button */}
      <button
        type="button"
        className="btn-gold-secondary couple-replay-btn"
        onClick={handleReplay}
        disabled={isReplaying}
        aria-label="Replay Couple Animation"
      >
        <RotateCcw size={15} className={isReplaying ? 'anim-spin' : ''} />
        <span>Replay Love Story</span>
      </button>
    </section>
  );
}

function MaleGroomSvg() {
  return (
    <svg viewBox="0 0 160 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="maleSilkGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF9F0" />
          <stop offset="60%" stopColor="#EAD8BE" />
          <stop offset="100%" stopColor="#D2B994" />
        </linearGradient>
        <linearGradient id="goldZariBorder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF2D4" />
          <stop offset="50%" stopColor="#C8A16A" />
          <stop offset="100%" stopColor="#8F6526" />
        </linearGradient>
        <linearGradient id="skinToneMale" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D9A87E" />
          <stop offset="100%" stopColor="#B37D52" />
        </linearGradient>
      </defs>

      <ellipse cx="80" cy="272" rx="35" ry="6" fill="#150205" opacity="0.65" />

      <g className="male-lower-body">
        <path d="M52 145 L48 265 L108 265 L104 145 Z" fill="url(#maleSilkGrad)" />
        <line x1="78" y1="145" x2="78" y2="265" stroke="#C8A16A" strokeWidth="1.5" />
        <rect x="48" y="255" width="60" height="10" fill="url(#goldZariBorder)" />
        <line x1="48" y1="255" x2="108" y2="255" stroke="#FFF7F0" strokeWidth="0.8" />
      </g>

      <g className="male-torso" style={{ transition: 'transform 1s ease' }}>
        <path
          d="M50 82 C 45 110, 48 140, 50 160 L 106 160 C 108 140, 111 110, 106 82 Z"
          fill="url(#maleSilkGrad)"
          stroke="#C8A16A"
          strokeWidth="0.8"
        />
        <line x1="78" y1="82" x2="78" y2="125" stroke="#C8A16A" strokeWidth="1.5" />
        <circle cx="78" cy="94" r="1.5" fill="#E7C687" />
        <circle cx="78" cy="106" r="1.5" fill="#E7C687" />
        <circle cx="78" cy="118" r="1.5" fill="#E7C687" />

        <path
          d="M58 80 C 65 95, 78 120, 106 155 L 102 165 C 72 130, 58 105, 52 83 Z"
          fill="#51101B"
          stroke="#C8A16A"
          strokeWidth="1"
        />
        <path
          d="M58 80 L 52 83 L 102 165 L 106 155 Z"
          fill="url(#goldZariBorder)"
          opacity="0.3"
        />

        <rect x="73" y="70" width="10" height="14" fill="url(#skinToneMale)" rx="2" />
        <circle cx="78" cy="56" r="17" fill="url(#skinToneMale)" />
        <path
          d="M62 55 C 62 40, 70 36, 80 36 C 92 36, 97 42, 96 56 C 90 48, 78 48, 62 55 Z"
          fill="#1C0F08"
        />
        <rect x="80" y="50" width="1.8" height="5" fill="#FFF7F0" />
        <circle cx="81" cy="56" r="1" fill="#C8A16A" />
      </g>

      <g className="male-arm">
        <path d="M96 85 C 105 92, 114 100, 118 110 L 108 114 C 104 106, 96 98, 90 92 Z" fill="url(#maleSilkGrad)" />
        <path d="M116 109 L 136 122 L 132 128 L 110 115 Z" fill="url(#skinToneMale)" />
        <ellipse cx="140" cy="125" rx="6" ry="4" transform="rotate(18 140 125)" fill="url(#skinToneMale)" />
      </g>
    </svg>
  );
}

function FemaleBrideSvg() {
  return (
    <svg viewBox="0 0 160 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="brideSareeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7E1524" />
          <stop offset="50%" stopColor="#51101B" />
          <stop offset="100%" stopColor="#35090F" />
        </linearGradient>
        <linearGradient id="goldZariBride" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF2D4" />
          <stop offset="50%" stopColor="#E7C687" />
          <stop offset="100%" stopColor="#C8A16A" />
        </linearGradient>
        <linearGradient id="skinToneFemale" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E5B58E" />
          <stop offset="100%" stopColor="#C78E63" />
        </linearGradient>
      </defs>

      <ellipse cx="80" cy="272" rx="35" ry="6" fill="#150205" opacity="0.65" />

      <g className="female-lower-body">
        <path
          d="M56 150 C 50 190, 44 235, 42 265 L 118 265 C 116 235, 110 190, 104 150 Z"
          fill="url(#brideSareeGrad)"
        />
        <rect x="42" y="254" width="76" height="11" fill="url(#goldZariBride)" />
        <line x1="42" y1="254" x2="118" y2="254" stroke="#FFF7F0" strokeWidth="0.8" />
        <circle cx="62" cy="235" r="2" fill="#E7C687" opacity="0.8" />
        <circle cx="80" cy="235" r="2" fill="#E7C687" opacity="0.8" />
        <circle cx="98" cy="235" r="2" fill="#E7C687" opacity="0.8" />
      </g>

      <g className="female-torso" style={{ transition: 'transform 1s ease' }}>
        <path
          d="M58 92 C 55 115, 56 135, 58 152 L 102 152 C 104 135, 105 115, 102 92 Z"
          fill="url(#brideSareeGrad)"
        />
        <path
          d="M56 152 C 65 130, 80 110, 98 90 L 104 96 C 85 120, 72 138, 62 154 Z"
          fill="url(#goldZariBride)"
          opacity="0.9"
        />

        <rect x="56" y="146" width="48" height="5" rx="2" fill="url(#goldZariBride)" />
        <circle cx="80" cy="148.5" r="3" fill="#FFF2D4" />

        <rect x="74" y="76" width="9" height="16" fill="url(#skinToneFemale)" rx="2" />
        <path d="M72 88 Q 78.5 95 85 88" stroke="#E7C687" strokeWidth="2" fill="none" />
        <circle cx="78.5" cy="94" r="1.5" fill="#FFE5B4" />

        <circle cx="78" cy="62" r="15" fill="url(#skinToneFemale)" />

        <path
          d="M65 62 C 65 48, 72 44, 82 44 C 92 44, 96 50, 96 64 C 92 56, 80 56, 65 62 Z"
          fill="#1C0F08"
        />
        <circle cx="95" cy="64" r="9" fill="#1C0F08" />
        <circle cx="93" cy="56" r="2.5" fill="#FFF7F0" />
        <circle cx="98" cy="58" r="2.5" fill="#FFF7F0" />
        <circle cx="103" cy="63" r="2.5" fill="#FFF7F0" />
        <circle cx="102" cy="69" r="2.5" fill="#FFF7F0" />
        <circle cx="97" cy="73" r="2.5" fill="#FFF7F0" />
        <circle cx="92" cy="72" r="2.5" fill="#FFF7F0" />

        <circle cx="68" cy="66" r="1.5" fill="#E7C687" />
        <path d="M66 69 L 70 69 L 68 73 Z" fill="#C8A16A" />

        <circle cx="75" cy="58" r="1.2" fill="#991B1B" />
      </g>

      <g className="female-arm">
        <path d="M64 94 C 55 100, 48 108, 44 116 L 52 120 C 56 112, 62 106, 70 100 Z" fill="url(#brideSareeGrad)" />
        <line x1="44" y1="116" x2="52" y2="120" stroke="#E7C687" strokeWidth="2" />

        <path d="M46 117 L 24 125 L 26 131 L 48 122 Z" fill="url(#skinToneFemale)" />
        <rect x="33" y="120" width="4" height="6" fill="url(#goldZariBride)" rx="1" transform="rotate(-15 33 120)" />
        <ellipse cx="20" cy="127" rx="6" ry="4" transform="rotate(-15 20 127)" fill="url(#skinToneFemale)" />
      </g>
    </svg>
  );
}
