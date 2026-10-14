import React from 'react';
import { INVITATION_DATA } from '../data/invitation';
import { Sparkles, Heart } from 'lucide-react';

/**
 * Brand Footer
 * Subtle, restrained gold styling celebrating The Koodal Studio craftsmanship.
 */
export default function KoodalFooter() {
  return (
    <footer className="koodal-studio-footer" role="contentinfo">
      <style>{`
        .koodal-studio-footer {
          width: 100%;
          max-width: 600px;
          margin: 2rem auto 1rem auto;
          text-align: center;
          padding: 1.5rem 1rem;
          position: relative;
          z-index: 10;
        }

        .footer-ornamental-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
          opacity: 0.6;
        }

        .divider-line {
          height: 1px;
          width: 60px;
          background: linear-gradient(90deg, transparent, var(--color-antique-gold), transparent);
        }

        .studio-brand-text {
          font-family: var(--font-serif-heading);
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(200, 161, 106, 0.85);
          margin-bottom: 0.4rem;
        }

        .studio-brand-link {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .studio-brand-link:hover {
          color: var(--color-warm-ivory);
        }

        .tamil-blessing-footer {
          font-family: var(--font-tamil);
          font-size: 0.85rem;
          color: rgba(255, 247, 240, 0.65);
          letter-spacing: 0.08em;
          margin-top: 0.4rem;
        }
      `}</style>

      <div className="footer-ornamental-divider">
        <div className="divider-line" />
        <Sparkles size={14} color="#C8A16A" />
        <div className="divider-line" />
      </div>

      <div className="studio-brand-text">
        <a
          href={INVITATION_DATA.branding.website}
          target="_blank"
          rel="noopener noreferrer"
          className="studio-brand-link"
        >
          {INVITATION_DATA.branding.tagline}
        </a>
      </div>

      <div className="tamil-blessing-footer">
        எல்லா நன்மைகளும் பெற்று இனிதே வாழ வாழ்த்துகிறோம்
      </div>
    </footer>
  );
}
