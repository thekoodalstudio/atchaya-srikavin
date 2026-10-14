import React, { useState } from 'react';
import FloralBackground from './components/FloralBackground';
import BotanicalFrame from './components/BotanicalFrame';
import IntroAnimation from './components/IntroAnimation';
import FloatingMusic from './components/FloatingMusic';
import MainInvitationCard from './components/MainInvitationCard';
import CoupleAnimation from './components/CoupleAnimation';
import EventDetails from './components/EventDetails';
import VenueSection from './components/VenueSection';
import ShareControls from './components/ShareControls';
import KoodalFooter from './components/KoodalFooter';
import { INVITATION_DATA } from './data/invitation';
import { Sparkles, Heart } from 'lucide-react';
import './styles/global.css';
import './styles/animations.css';

export default function App() {
  const [isIntroOpened, setIsIntroOpened] = useState(false);

  return (
    <div className="app-root">
      {/* 1. Cinematic Intro Screen */}
      <IntroAnimation
        isOpened={isIntroOpened}
        onOpen={() => setIsIntroOpened(true)}
      />

      {/* 2. Master Floral & Embossed Texture Atmosphere */}
      <FloralBackground />

      {/* 3. Delicate Ivory Botanical Corner Framing */}
      <BotanicalFrame />

      {/* 4. Floating Ambient Music Toggle */}
      <FloatingMusic />

      {/* 5. Main Invitation Container (Chapters) */}
      <main className="invitation-container" id="main-content">
        {/* Section 1: Main Invitation Card & Interlocking Rings */}
        <section id="invitation-hero" className="invitation-section-fade">
          <MainInvitationCard />
        </section>

        {/* Section 2: Signature Couple Meeting & Ring Ceremony Animation */}
        <section id="couple-ceremony" className="invitation-section-fade">
          <div className="section-narrative-header">
            <span className="narrative-tag">A Sacred Promise</span>
            <h2 className="narrative-title">The Ring Ceremony</h2>
            <p className="narrative-desc">
              Watch their beautiful meeting and sacred pledge of eternal love.
            </p>
          </div>
          <CoupleAnimation autoPlay={true} />
        </section>

        {/* Section 3: Auspicious Date & Time */}
        <section id="event-date-time" className="invitation-section-fade">
          <EventDetails />
        </section>

        {/* Section 4: Venue & Google Maps Navigation */}
        <section id="venue-location" className="invitation-section-fade">
          <VenueSection />
        </section>

        {/* Section 5: Share Invitation & Digital Keepsake */}
        <section id="share-section" className="invitation-section-fade">
          <ShareControls />
        </section>

        {/* Section 6: The Koodal Studio Branding */}
        <KoodalFooter />
      </main>

      <style>{`
        .app-root {
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        .top-sacred-blessing {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 0.8rem;
          opacity: 0.85;
        }

        .blessing-om {
          font-size: 0.9rem;
          color: var(--color-light-gold);
          letter-spacing: 0.14em;
        }

        .blessing-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #E7C687;
        }

        .invitation-section-fade {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .section-narrative-header {
          text-align: center;
          max-width: 500px;
          margin: 1.5rem auto 0.5rem auto;
          padding: 0 1rem;
        }

        .narrative-tag {
          font-family: var(--font-serif-heading);
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--color-light-gold);
          display: block;
          margin-bottom: 0.3rem;
        }

        .narrative-title {
          font-family: var(--font-serif-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-warm-ivory);
          letter-spacing: 0.04em;
          margin-bottom: 0.35rem;
        }

        @media (min-width: 480px) {
          .narrative-title {
            font-size: 1.8rem;
          }
        }

        .narrative-desc {
          font-family: var(--font-elegant-serif);
          font-style: italic;
          font-size: 1.05rem;
          color: var(--color-muted-rose);
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
