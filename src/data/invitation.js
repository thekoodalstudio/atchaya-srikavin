/**
 * Single Source of Truth Configuration for The Koodal Studio Engagement Invitation
 * 
 * Client: Atchaya & Srikavin
 * Event: Engagement Ceremony
 * Venue: Lakshmi Mini Hall, Thuraiyur
 */

export const INVITATION_DATA = {
  // Couple Details
  bride: {
    name: "Atchaya",
    role: "Bride"
  },
  groom: {
    name: "Srikavin",
    role: "Groom"
  },

  // Event Metadata
  occasionLead: "You’re invited to the",
  occasion: "Engagement Ceremony",
  tamilTitle: "நிச்சயதார்த்த நன்னாளிதழ்",
  tamilSubtitle: "மங்கலப் பெருவிழா",

  // Date and Time (Year is kept configurable)
  date: {
    fullDisplay: "Sunday, October 25",
    dayOfWeek: "Sunday",
    monthName: "October",
    dayNumber: "25",
    time: "10:00 AM onwards",
    year: null,
    isoDateString: null
  },

  // Venue Information with Exact Google Maps Link
  venue: {
    name: "Lakshmi Mini Hall",
    city: "Thuraiyur",
    fullAddress: "Lakshmi Mini Hall, Thuraiyur",
    mapsUrl: "https://maps.app.goo.gl/eQ2WB8CLyjZ1bj79A?g_st=ac",
    landmarkNote: "Thuraiyur"
  },

  // Contact / RSVP Helpline Details
  contact: {
    phone: "9514338585",
    displayPhone: "95143 38585",
    whatsappLink: "https://wa.me/919514338585",
    callLink: "tel:+919514338585"
  },

  // Quotes & Decorative copy
  quotes: {
    welcome: "A Celebration of Love & Destiny",
    together: "Together begins a beautiful forever.",
    blessing: "With the divine blessings of our elders and the grace of the Almighty, join us as we exchange rings and pledge a lifetime of togetherness."
  },

  // Theme Palette
  theme: {
    deepBurgundy: "#35090F",
    darkWine: "#26060A",
    richMaroon: "#51101B",
    antiqueGold: "#C8A16A",
    lightGold: "#E7C687",
    warmIvory: "#FFF7F0",
    mutedRose: "#D9A0A0"
  },

  // Background Music Settings - Rathinamo song
  audio: {
    title: "Rathinamo",
    src: "/rathinamo.mp3",
    defaultVolume: 0.5
  },

  // Studio Credits
  branding: {
    studioName: "The Koodal Studio",
    tagline: "Digital Invitation by The Koodal Studio",
    website: "https://instagram.com/thekoodalstudio"
  }
};
