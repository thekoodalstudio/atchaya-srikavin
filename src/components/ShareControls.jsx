import React, { useState } from 'react';
import { INVITATION_DATA } from '../data/invitation';
import { Share2, Copy, Check, MessageCircle, Heart } from 'lucide-react';

/**
 * Share & Interactive Controls
 * Features:
 * - Share Invitation via Native Web Share API
 * - Fallback to WhatsApp sharing with prefilled invitation message
 * - Copy Invitation Link to clipboard with feedback toast
 */
export default function ShareControls() {
  const [copied, setCopied] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const shareText = `💍 You're invited to the Engagement Ceremony of ${INVITATION_DATA.bride.name} & ${INVITATION_DATA.groom.name}!\n\n📅 Date: ${INVITATION_DATA.date.fullDisplay}\n⏰ Time: ${INVITATION_DATA.date.time}\n📍 Venue: ${INVITATION_DATA.venue.fullAddress}\n\nView the interactive digital invitation:`;

  const handleShare = async () => {
    const currentUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${INVITATION_DATA.bride.name} & ${INVITATION_DATA.groom.name} Engagement`,
          text: shareText,
          url: currentUrl
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyLink();
        }
      }
    } else {
      // Fallback: Open WhatsApp with encoded text
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const copyLink = () => {
    const currentUrl = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl).then(() => {
        setCopied(true);
        setToastMsg("Invitation link copied to clipboard!");
        setTimeout(() => {
          setCopied(false);
          setToastMsg("");
        }, 3200);
      });
    } else {
      setCopied(true);
      setToastMsg("URL copied!");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const openWhatsApp = () => {
    const currentUrl = window.location.href;
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="share-controls-wrapper" aria-label="Share Invitation">
      <style>{`
        .share-controls-wrapper {
          width: 100%;
          max-width: 680px;
          margin: 1.5rem auto 2.5rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .share-card {
          width: 100%;
          padding: 2rem 1.25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .share-card-title {
          font-family: var(--font-serif-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-warm-ivory);
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
        }

        .share-card-subtitle {
          font-family: var(--font-elegant-serif);
          font-style: italic;
          font-size: 1.05rem;
          color: var(--color-muted-rose);
          margin-bottom: 1.5rem;
        }

        .share-button-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.85rem;
        }

        .share-toast {
          margin-top: 1rem;
          font-family: var(--font-clean-body);
          font-size: 0.82rem;
          color: var(--color-light-gold);
          background: rgba(38, 6, 10, 0.9);
          border: 1px solid rgba(200, 161, 106, 0.4);
          padding: 0.45rem 1.2rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          animation: fadeInUp 0.3s ease;
        }
      `}</style>

      <div className="royal-card share-card">
        <h3 className="share-card-title">Share the Joy With Loved Ones</h3>
        <p className="share-card-subtitle">
          "Your gracious presence and blessings are our greatest treasure."
        </p>

        <div className="share-button-group">
          {/* Main Share Button */}
          <button
            type="button"
            className="btn-gold-primary"
            onClick={handleShare}
            aria-label="Share Invitation"
          >
            <Share2 size={17} />
            <span>Share Invitation</span>
          </button>

          {/* Direct WhatsApp Share */}
          <button
            type="button"
            className="btn-gold-secondary"
            onClick={openWhatsApp}
            aria-label="Share via WhatsApp"
          >
            <MessageCircle size={17} />
            <span>WhatsApp</span>
          </button>

          {/* Copy Link Button */}
          <button
            type="button"
            className="btn-gold-secondary"
            onClick={copyLink}
            aria-label="Copy Invitation Link"
          >
            {copied ? <Check size={16} color="#E7C687" /> : <Copy size={16} />}
            <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
          </button>
        </div>

        {toastMsg && (
          <div className="share-toast" role="status">
            <Check size={14} />
            <span>{toastMsg}</span>
          </div>
        )}
      </div>
    </div>
  );
}
