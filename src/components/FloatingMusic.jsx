import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Disc3 } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitation';

/**
 * Floating Background Music Controller
 * - Plays Rathinamo (rathinamo.mp3)
 * - Volume set to 50% (0.5) by default
 * - Autoplay attempted on load with global one-time interaction fallback
 *   so music starts immediately upon the first touch/click/scroll!
 */
export default function FloatingMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set 50% volume strictly
    audio.volume = INVITATION_DATA.audio.defaultVolume || 0.5;

    // Attempt autoplay
    const tryPlay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          // Remove listener once successfully playing
          window.removeEventListener('click', tryPlay);
          window.removeEventListener('touchstart', tryPlay);
          window.removeEventListener('scroll', tryPlay);
        })
        .catch(() => {
          // Modern browsers block autoplay until first user gesture
          setIsPlaying(false);
        });
    };

    // Try immediately
    tryPlay();

    // Also attach one-time listener to guarantee play on first user tap/scroll
    window.addEventListener('click', tryPlay, { once: true });
    window.addEventListener('touchstart', tryPlay, { once: true });
    window.addEventListener('scroll', tryPlay, { once: true });

    return () => {
      window.removeEventListener('click', tryPlay);
      window.removeEventListener('touchstart', tryPlay);
      window.removeEventListener('scroll', tryPlay);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.5;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={INVITATION_DATA.audio.src}
        loop
        preload="auto"
      />

      <div className="floating-music-container" aria-label="Music Controls">
        <style>{`
          .floating-music-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
          }

          .music-toggle-btn {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: rgba(38, 6, 10, 0.88);
            border: 1.5px solid rgba(200, 161, 106, 0.6);
            color: var(--color-light-gold);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 18px rgba(18, 2, 5, 0.75);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            position: relative;
          }

          .music-toggle-btn:hover {
            transform: scale(1.08);
            border-color: var(--color-warm-ivory);
            box-shadow: 0 6px 25px rgba(200, 161, 106, 0.5);
          }

          .music-toggle-btn.playing {
            border-color: #E7C687;
            color: #fff;
            box-shadow: 0 0 20px rgba(231, 198, 135, 0.65);
          }

          .disc-icon-spin {
            animation: discRotate 4.5s linear infinite;
          }

          @keyframes discRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>

        <button
          type="button"
          className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
          onClick={toggleMusic}
          aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
          title={isPlaying ? "Mute Rathinamo (50% Volume)" : "Play Rathinamo Song"}
        >
          {isPlaying ? (
            <Disc3 size={24} className="disc-icon-spin" />
          ) : (
            <VolumeX size={20} />
          )}
        </button>
      </div>
    </>
  );
}
