/**
 * Single Source of Truth Configuration for The Koodal Studio Engagement Invitation
 * 
 * Client: Aathaya & Srikavin
 * Event: Engagement Ceremony
 * Venue: Lakshmi Mini Hall, Thuraiyur
 */

export const INVITATION_DATA = {
  // Couple Details
  bride: {
    name: "Atchaya",
    altSpelling: "Aathaya",
    role: "Bride"
  },
  groom: {
    name: "Srikavin",
    altSpelling: "Shrikavin",
    role: "Groom"
  },

  // Event Metadata
  occasionLead: "You’re invited to the",
  occasion: "Engagement Ceremony",
  tamilTitle: "நிச்சயதார்த்த நன்னாளிதழ்", // Tamil Hindu Engagement celebration heading
  tamilSubtitle: "மங்கலப் பெருவிழா",

  // Date and Time (Year is kept configurable - do NOT invent unless confirmed)
  date: {
    fullDisplay: "Sunday, October 25",
    dayOfWeek: "Sunday",
    monthName: "October",
    dayNumber: "25",
    time: "10:00 AM onwards",
    // Configurable year: set to null or a number (e.g. 2026) when confirmed by the family
    year: null, 
    isoDateString: null // Set to e.g. "2026-10-25T10:00:00+05:30" when year is confirmed
  },

  // Venue Information
  venue: {
    name: "Lakshmi Mini Hall",
    city: "Thuraiyur",
    fullAddress: "Lakshmi Mini Hall, Thuraiyur",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lakshmi+Mini+Hall%2C+Thuraiyur",
    landmarkNote: "Near Bus Stand, Thuraiyur"
  },

  // Romantic Quotes & Decorative copy
  quotes: {
    welcome: "A Celebration of Love & Destiny",
    together: "Together begins a beautiful forever.",
    blessing: "With the divine blessings of our elders and the grace of the Almighty, join us as we exchange rings and pledge a lifetime of togetherness."
  },

  // Color Tokens matching Reference Invitation
  theme: {
    deepBurgundy: "#35090F",
    darkWine: "#26060A",
    richMaroon: "#51101B",
    antiqueGold: "#C8A16A",
    lightGold: "#E7C687",
    warmIvory: "#FFF7F0",
    mutedRose: "#D9A0A0",
    goldGradient: "linear-gradient(135deg, #F3DEB3 0%, #C8A16A 50%, #9D7438 100%)"
  },

  // Audio / Music Settings
  // Optional background instrumental music (plays on user click, no autoplay)
  audio: {
    title: "Nadaswaram & Veena Instrumental Symphony",
    src: "" // If an MP3 url or local asset is added later, provide path here
  },

  // Studio Credits
  branding: {
    studioName: "The Koodal Studio",
    tagline: "Digital Invitation by The Koodal Studio",
    website: "https://instagram.com/thekoodalstudio"
  }
};
