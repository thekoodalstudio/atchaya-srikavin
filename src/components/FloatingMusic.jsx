import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitation';

/**
 * Floating Ambient Music Toggle
 * 
 * Capabilities:
 * 1. Supports external audio file if configured in invitation.js
 * 2. Features an internal Web Audio API synthesizer that generates a meditative,
 *    warm Indian classical Tanpura drone and Carnatic flute acoustic melody
 *    so music plays reliably without requiring external MP3 hosting!
 * 3. Never autoplays sound (strictly visitor opt-in).
 */
export default function FloatingMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const synthRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  const startMusic = () => {
    // 1. Try external audio if configured
    if (INVITATION_DATA.audio.src && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If audio file fails, play ambient synthesizer
          startAmbientSynth();
          setIsPlaying(true);
        });
    } else {
      // 2. Play gentle ambient Indian classical synthesizer
      startAmbientSynth();
      setIsPlaying(true);
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopAmbientSynth();
    setIsPlaying(false);
  };

  // Indian Classical Tanpura / Veena Harmonic Synth using Web Audio API
  const startAmbientSynth = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 1.5);
      masterGain.connect(ctx.destination);

      // Root Sa, Pa, Sa octaves (C# / D# scale traditional drone)
      const baseFreqs = [138.59, 207.65, 277.18, 415.30];
      const oscillators = [];

      baseFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Slow pitch drift to simulate natural acoustic string vibration
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.1, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.2, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.04 / (idx + 1), ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        oscillators.push(osc, lfo);
      });

      // Melodic gentle bell / flute chime intervals
      let noteStep = 0;
      // Mohanam / Bhoopali pentatonic scale notes (Sa, Ri, Ga, Pa, Dha)
      const ragaNotes = [277.18, 311.13, 349.23, 415.30, 466.16, 554.37];
      
      const intervalId = setInterval(() => {
        if (ctx.state === 'closed') return;
        try {
          const chimeOsc = ctx.createOscillator();
          const chimeGain = ctx.createGain();
          chimeOsc.type = 'sine';
          
          const targetFreq = ragaNotes[noteStep % ragaNotes.length];
          noteStep++;

          chimeOsc.frequency.setValueAtTime(targetFreq, ctx.currentTime);
          chimeGain.gain.setValueAtTime(0.001, ctx.currentTime);
          chimeGain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.3);
          chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.4);

          chimeOsc.connect(chimeGain);
          chimeGain.connect(masterGain);

          chimeOsc.start();
          chimeOsc.stop(ctx.currentTime + 2.5);
        } catch {}
      }, 2800);

      synthRef.current = { ctx, oscillators, intervalId, masterGain };
    } catch {}
  };

  const stopAmbientSynth = () => {
    if (synthRef.current) {
      try {
        const { ctx, intervalId, masterGain } = synthRef.current;
        clearInterval(intervalId);
        if (masterGain && ctx) {
          masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
          setTimeout(() => {
            try { ctx.close(); } catch {}
          }, 600);
        }
      } catch {}
      synthRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientSynth();
    };
  }, []);

  return (
    <>
      {INVITATION_DATA.audio.src && (
        <audio ref={audioRef} src={INVITATION_DATA.audio.src} loop preload="none" />
      )}

      <div className="floating-music-container" aria-label="Audio Controls">
        <style>{`
          .floating-music-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 100;
          }

          .music-toggle-btn {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: rgba(38, 6, 10, 0.85);
            border: 1px solid rgba(200, 161, 106, 0.5);
            color: var(--color-light-gold);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 18px rgba(18, 2, 5, 0.65);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            position: relative;
          }

          .music-toggle-btn:hover {
            transform: scale(1.08);
            border-color: var(--color-warm-ivory);
            box-shadow: 0 6px 22px rgba(200, 161, 106, 0.4);
          }

          .music-toggle-btn.active {
            border-color: var(--color-light-gold);
            color: #fff;
            animation: musicPulse 2s ease-in-out infinite alternate;
          }

          @keyframes musicPulse {
            0% { box-shadow: 0 0 10px rgba(200, 161, 106, 0.4); }
            100% { box-shadow: 0 0 22px rgba(231, 198, 135, 0.8); }
          }

          .soundwave-indicator {
            position: absolute;
            bottom: -18px;
            font-family: var(--font-clean-body);
            font-size: 0.65rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--color-light-gold);
            white-space: nowrap;
            pointer-events: none;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
          }
        `}</style>

        <button
          type="button"
          className={`music-toggle-btn ${isPlaying ? 'active' : ''}`}
          onClick={toggleMusic}
          aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
          title={isPlaying ? "Mute Music" : "Play Gentle Instrumental"}
        >
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </div>
    </>
  );
}
