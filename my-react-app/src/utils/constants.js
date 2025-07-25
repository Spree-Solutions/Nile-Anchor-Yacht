// App Information
export const APP_NAME = 'Nile Anchor';
export const APP_DESCRIPTION = 'Premium luxury yacht rentals on Egypt\'s Nile River';
export const APP_URL = 'https://thenileanchor.com';
export const COMPANY_NAME = 'Nile Anchor Yacht Services';
export const ESTABLISHED_YEAR = 2021;

// Contact Information
export const CONTACT = {
  phone: '+201211140222',
  phoneDisplay: '+20 121 114 0222',
  email: 'reservation@thenileanchor.com',
  whatsapp: '+201211140222',
  address: {
    street: 'Nile view club, Dokki',
    city: 'Giza',
    country: 'Egypt',
    postalCode: '12311'
  },
  workingHours: {
    weekdays: '9:00 AM - 6:30 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed'
  }
};

// Social Media
export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/nileanchor',
  instagram: 'https://instagram.com/nileanchor',
  twitter: 'https://twitter.com/nileanchor',
  linkedin: 'https://linkedin.com/company/nileanchor',
  youtube: 'https://youtube.com/nileanchor'
};

// Booking Constants
export const BOOKING = {
  minAdvanceHours: 24,
  maxAdvanceDays: 90,
  minDuration: 2, // hours
  maxDuration: 12, // hours
  cancellationHours: 48,
  depositPercentage: 30,
  timeSlots: [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ]
};

// Currency
export const CURRENCY = {
  code: 'EGP',
  symbol: 'E£',
  name: 'Egyptian Pound',
  decimal: 2
};

// Image Dimensions
export const IMAGE_SIZES = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 300, height: 300 },
  medium: { width: 600, height: 400 },
  large: { width: 1200, height: 800 },
  hero: { width: 1920, height: 1080 }
};

// Animation Durations
export const ANIMATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 1000
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// SEO Defaults
export const SEO = {
  defaultTitle: 'Nile Anchor - Luxury Yacht Experiences on the Nile',
  titleTemplate: '%s | Nile Anchor',
  defaultDescription: 'Experience luxury yacht rentals on Egypt\'s Nile River. Perfect for weddings, corporate events, and private celebrations.',
  defaultKeywords: [
    'yacht rental',
    'Nile River',
    'luxury boats',
    'Egypt yacht charter',
    'wedding venue',
    'corporate events',
    'private parties',
    'Cairo yacht rental'
  ],
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@nileanchor'
};

// Event Types
export const EVENT_TYPES = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'birthday', label: 'Birthday Party' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'engagement', label: 'Engagement Party' },
  { value: 'graduation', label: 'Graduation Party' },
  { value: 'private', label: 'Private Party' },
  { value: 'other', label: 'Other' }
];

// Yacht Features
export const YACHT_FEATURES = {
  amenities: [
    'Air Conditioning',
    'Wi-Fi',
    'Sound System',
    'Sun Deck',
    'Swimming Platform',
    'Tender Boat',
    'Water Sports Equipment',
    'Safety Equipment'
  ],
  services: [
    'Professional Crew',
    'Catering Service',
    'Bar Service',
    'DJ Service',
    'Photography',
    'Decorations',
    'Event Planning',
    'Transportation'
  ]
};

// Error Messages
export const ERROR_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  date: 'Please select a valid date',
  time: 'Please select a valid time',
  minLength: 'Must be at least {min} characters',
  maxLength: 'Must be no more than {max} characters',
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  booking: 'Unable to process booking. Please contact us directly.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  booking: 'Your booking request has been submitted successfully!',
  contact: 'Thank you for contacting us. We\'ll get back to you soon.',
  newsletter: 'Successfully subscribed to our newsletter!',
  review: 'Thank you for your review!'
};