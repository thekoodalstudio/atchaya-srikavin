# Atchaya & Srikavin — Premium Interactive Engagement E-Invitation
### Designed and Developed by **The Koodal Studio**

A handcrafted, animated Tamil Hindu engagement invitation website built with React and Vite.

---

## 💍 Event Details
- **Occasion:** Engagement Ceremony (நிச்சயதார்த்த நன்னாளிதழ்)
- **Bride:** Atchaya
- **Groom:** Srikavin
- **Date:** Sunday, October 25
- **Time:** 10:00 AM onwards
- **Venue:** Lakshmi Mini Hall, Thuraiyur
- **Location Navigation:** [Google Maps](https://www.google.com/maps/search/?api=1&query=Lakshmi+Mini+Hall%2C+Thuraiyur)

---

## ✨ Key Features & Creative Vision

1. **Cinematic Loading Intro**
   - Deep burgundy textured background with animated ivory corner outlines.
   - Drifting gold particles and delicate flower petals.
   - Elegant center ornamental drawing line.
   - Typography reveal of **"Atchaya & Srikavin"**.
   - "Open Invitation" call-to-action button and graceful "Skip Intro" option.

2. **Animated Floral Atmosphere**
   - Slowly falling burgundy and muted rose petals.
   - Gently drifting white fragrant jasmine (*malli poo*) petals.
   - Twinkling gold particles and embossed rose damask texture.
   - Fully optimized for performance and respects `prefers-reduced-motion`.

3. **Hero Engagement Rings Animation**
   - Two 3D gold-toned rings approaching from opposite directions.
   - Smooth rotation and interlocking alignment in the center.
   - Radiant diamond starburst flare and floating heartlets.

4. **Signature Tamil Hindu Couple Animation (Highest Priority)**
   - **Scene 1 (Entrances):** South Indian bride and groom enter gracefully from opposite sides in traditional attire (ivory & gold zari silk veshti/kurta for groom; rich burgundy Kanchipuram silk saree with golden oddiyanam, jewelry, and jasmine flowers in hair for bride).
   - **Scene 2 (The Meeting):** Facing each other, upper bodies turn slightly inward.
   - **Scene 3 (Joining Hands):** Articulated SVG arms rotate and hands join naturally in the center.
   - **Scene 4 (Ring Ceremony):** Golden halo glows as an engagement ring settles above their joined hands.
   - **Scene 5 (Celebration):** Golden confetti and rose petal burst, revealing **"Atchaya ♥ Srikavin"** and *"Together begins a beautiful forever."*
   - **Scene 6 (Final Pose):** Elegant harmonious pose with an interactive **"Replay Love Story"** button.

5. **Auspicious Date & Time Section**
   - Clean calendar tile & antique-gold clock icon.
   - Year is kept strictly configurable in `src/data/invitation.js` (no invented year).
   - Smart "Save the Date" button: generates `.ics` calendar invitation when year is set, or copies event reminder to clipboard.

6. **Venue & Google Maps Navigation**
   - Lakshmi Mini Hall, Thuraiyur in an ornamental gold frame.
   - QR Code display for quick mobile scanning.
   - "View Location" button directly opening Google Maps query.

7. **Share & Keepsake Controls**
   - Web Share API with instant WhatsApp sharing fallback and "Copy Link" with visual feedback toast.

8. **Ambient Background Instrumental**
   - Floating audio toggle with Web Audio synthesizer fallback (gentle Veena and Carnatic flute harmonics), ensuring music works without external mp3 dependencies while supporting custom audio files in configuration.

9. **Branding**
   - Restrained, elegant studio watermark: *"Digital Invitation by The Koodal Studio"*.

---

## 🛠️ Project Structure

```
├── public/
│   └── WhatsApp Image 2026-10-14 at 5.35.31 PM.jpeg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BotanicalFrame.jsx      # Ivory botanical line-art corners
│   │   ├── CoupleAnimation.jsx     # Signature 6-scene South Indian couple animation
│   │   ├── EngagementRings.jsx     # Interlocking gold rings SVG animation
│   │   ├── EventDetails.jsx        # Date, time, & Save the Date interaction
│   │   ├── FloatingMusic.jsx       # Music toggle with Web Audio synth fallback
│   │   ├── FloralBackground.jsx    # Falling rose petals, jasmine, & gold dust
│   │   ├── IntroAnimation.jsx      # Full-screen cinematic opening sequence
│   │   ├── KoodalFooter.jsx        # The Koodal Studio branding
│   │   ├── MainInvitationCard.jsx  # Hero invitation card & typography
│   │   ├── ShareControls.jsx       # Web Share & WhatsApp controls
│   │   └── VenueSection.jsx        # Venue card & Google Maps navigation
│   ├── data/
│   │   └── invitation.js           # Single Source of Truth configuration
│   ├── styles/
│   │   ├── animations.css          # Keyframes & particle styles
│   │   ├── couple.css              # Couple timeline & arm articulation styles
│   │   └── global.css              # Color tokens, typography, & glassmorphism
│   ├── App.jsx                     # Master container & chapter orchestration
│   └── main.jsx                    # React entry point
├── index.html                      # SEO metadata & Google Fonts
├── package.json
├── vercel.json                     # Vercel deployment rewrite rules
└── vite.config.js
```

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Vercel Deployment Instructions

1. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
2. Select your GitHub repository: `thekoodalstudio/atchaya-srikavin`.
3. Configure Project Settings:
   - **Project Name / Link Name:** `atchaya-srikavin`
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.
5. Custom Domain / Project Name: Set project domain / name to **`atchaya-srikavin`**.
