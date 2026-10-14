import React, { useState } from 'react';
import { INVITATION_DATA } from '../data/invitation';
import { Calendar, Clock, BookmarkCheck, Check, Sparkles } from 'lucide-react';

/**
 * Event Date & Time Section
 * Features:
 * - Displays "Sunday, October 25", "10:00 AM onwards"
 * - Does NOT invent a year; strictly uses configurable year in invitation.js
 * - Elegant calendar tile & antique-gold clock design
 * - Smart "Save the Date" interaction
 */
export default function EventDetails() {
  const [copied, setCopied] = useState(false);
  const [notification, setNotification] = useState("");

  const handleSaveTheDate = () => {
    const { date, bride, groom, venue, occasion } = INVITATION_DATA;

    // If year is configured, generate .ics calendar download
    if (date.year) {
      const year = date.year;
      const startIso = `${year}1025T100000`;
      const endIso = `${year}1025T140000`;
      const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//The Koodal Studio//Engagement E-Invitation//EN",
        "BEGIN:VEVENT",
        `SUMMARY:${bride.name} & ${groom.name} — ${occasion}`,
        `DESCRIPTION:We cordially invite you to celebrate the Engagement Ceremony of ${bride.name} & ${groom.name}.\\nVenue: ${venue.fullAddress}`,
        `LOCATION:${venue.fullAddress}`,
        `DTSTART:${startIso}`,
        `DTEND:${endIso}`,
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\r\n");

      const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", `${bride.name}_${groom.name}_Engagement.ics`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setNotification("Calendar invitation downloaded!");
    } else {
      // Year not configured: gracefully copy reminder text to clipboard
      const reminderText = `Reminder: ${bride.name} & ${groom.name}'s ${occasion} on ${date.fullDisplay} from ${date.time} at ${venue.fullAddress}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(reminderText);
      }
      setNotification(`Saved to clipboard: ${date.fullDisplay} • ${date.time}`);
    }

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setNotification("");
    }, 3800);
  };

  return (
    <section className="event-details-section" aria-label="Event Date and Time">
      <style>{`
        .event-details-section {
          width: 100%;
          max-width: 680px;
          margin: 1.5rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .datetime-card {
          width: 100%;
          padding: 2rem 1.25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        @media (min-width: 640px) {
          .datetime-card {
            padding: 2.5rem 2rem;
          }
        }

        .section-lead-tag {
          font-family: var(--font-serif-heading);
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--color-light-gold);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .datetime-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          width: 100%;
          max-width: 520px;
          margin: 1.2rem 0;
        }

        @media (min-width: 540px) {
          .datetime-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.2rem;
          }
        }

        .datetime-item {
          background: rgba(38, 6, 10, 0.75);
          border: 1px solid rgba(200, 161, 106, 0.35);
          border-radius: 16px;
          padding: 1.4rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, border-color 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .datetime-item:hover {
          transform: translateY(-3px);
          border-color: var(--color-light-gold);
        }

        .item-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200, 161, 106, 0.25) 0%, rgba(53, 9, 15, 0.6) 100%);
          border: 1px solid rgba(231, 198, 135, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.85rem;
          color: var(--color-light-gold);
          box-shadow: 0 4px 12px rgba(18, 2, 5, 0.5);
        }

        .item-label {
          font-family: var(--font-clean-body);
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 247, 240, 0.65);
          margin-bottom: 0.35rem;
        }

        .item-value {
          font-family: var(--font-serif-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-warm-ivory);
          letter-spacing: 0.04em;
        }

        .item-subvalue {
          font-family: var(--font-elegant-serif);
          font-style: italic;
          font-size: 0.95rem;
          color: var(--color-light-gold);
          margin-top: 0.2rem;
        }

        .save-date-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .save-date-notification {
          font-family: var(--font-clean-body);
          font-size: 0.82rem;
          color: var(--color-light-gold);
          background: rgba(38, 6, 10, 0.9);
          border: 1px solid rgba(200, 161, 106, 0.4);
          padding: 0.4rem 1rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          animation: fadeInUp 0.3s ease;
        }
      `}</style>

      <div className="royal-card datetime-card">
        <div className="section-lead-tag">
          <Sparkles size={13} />
          <span>Auspicous Occasion Details</span>
          <Sparkles size={13} />
        </div>

        <div className="datetime-grid">
          {/* Date Card */}
          <div className="datetime-item">
            <div className="item-icon-wrapper">
              <Calendar size={24} />
            </div>
            <span className="item-label">Sacred Date</span>
            <div className="item-value">{INVITATION_DATA.date.fullDisplay}</div>
            <div className="item-subvalue">ஞாயிற்றுக்கிழமை • ஐப்பசி</div>
          </div>

          {/* Time Card */}
          <div className="datetime-item">
            <div className="item-icon-wrapper">
              <Clock size={24} />
            </div>
            <span className="item-label">Muhurtham / Time</span>
            <div className="item-value">{INVITATION_DATA.date.time}</div>
            <div className="item-subvalue">காலை 10:00 மணி முதல்</div>
          </div>
        </div>

        {/* Save The Date Button */}
        <div className="save-date-actions">
          <button
            type="button"
            className="btn-gold-primary"
            onClick={handleSaveTheDate}
            aria-label="Save the Date"
          >
            {copied ? <Check size={18} /> : <BookmarkCheck size={18} />}
            <span>{copied ? 'Date Saved!' : 'Save the Date'}</span>
          </button>

          {notification && (
            <div className="save-date-notification" role="status">
              <Check size={14} />
              <span>{notification}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
