export const testimonials = [
  {
    id: 1,
    author: 'Mohamed Ali',
    title: 'CEO',
    company: 'TechVentures Egypt',
    image: '/images/testimonials/mohamed-ali.jpg',
    text: 'The Nile Anchor provided an exceptional venue for our company\'s annual celebration. The crew was professional, the yacht was immaculate, and our guests were thoroughly impressed.',
    rating: 5,
    service: 'business-events',
    date: '2024-11-15'
  },
  {
    id: 2,
    author: 'Sarah & John Williams',
    title: 'Newlyweds',
    company: '',
    image: '/images/testimonials/sarah-john.jpg',
    text: 'Our wedding day on the Liberty yacht was beyond our dreams. The sunset ceremony on the Nile was magical, and the team made everything perfect. We couldn\'t have asked for a better venue.',
    rating: 5,
    service: 'weddings',
    date: '2024-10-20'
  },
  {
    id: 3,
    author: 'Fatima Hassan',
    title: 'Event Planner',
    company: 'Elite Events Cairo',
    image: '/images/testimonials/fatima-hassan.jpg',
    text: 'I\'ve organized many events, but the Nile Anchor yachts offer something truly special. The flexibility, service quality, and stunning setting make them my go-to recommendation for clients.',
    rating: 5,
    service: 'gatherings-parties',
    date: '2024-12-05'
  },
  {
    id: 4,
    author: 'Alexander Schmidt',
    title: 'Regional Director',
    company: 'European Trade Association',
    image: '/images/testimonials/alexander-schmidt.jpg',
    text: 'We hosted our international delegates on the BELLA yacht, and it was a remarkable experience. The combination of luxury and Egyptian hospitality left a lasting impression.',
    rating: 5,
    service: 'business-events',
    date: '2024-09-18'
  },
  {
    id: 5,
    author: 'Layla Mahmoud',
    title: 'Birthday Celebrant',
    company: '',
    image: '/images/testimonials/layla-mahmoud.jpg',
    text: 'My 30th birthday party on the ZEIN yacht was unforgettable! The crew went above and beyond to make it special. Dancing under the stars on the Nile - it doesn\'t get better than that!',
    rating: 5,
    service: 'gatherings-parties',
    date: '2024-11-28'
  },
  {
    id: 6,
    author: 'Robert Anderson',
    title: 'Marketing Director',
    company: 'Global Pharma Inc.',
    image: '/images/testimonials/robert-anderson.jpg',
    text: 'Our product launch event on the Nile Anchor fleet was a huge success. The unique venue helped us stand out and create buzz. The team\'s attention to detail was exceptional.',
    rating: 5,
    service: 'business-events',
    date: '2024-08-10'
  },
  {
    id: 7,
    author: 'Amira & Khaled El-Sharif',
    title: 'Anniversary Couple',
    company: '',
    image: '/images/testimonials/amira-khaled.jpg',
    text: 'We celebrated our 25th anniversary aboard the VIDA yacht with family and friends. It was absolutely perfect - great food, beautiful setting, and wonderful service. Highly recommended!',
    rating: 5,
    service: 'gatherings-parties',
    date: '2024-07-22'
  },
  {
    id: 8,
    author: 'Jessica Chen',
    title: 'Travel Blogger',
    company: 'Wanderlust Chronicles',
    image: '/images/testimonials/jessica-chen.jpg',
    text: 'As a travel blogger, I\'ve experienced many luxury services, but the Nile Anchor yachts are truly exceptional. The blend of modern luxury with the historic Nile creates an unmatched experience.',
    rating: 5,
    service: 'gatherings-parties',
    date: '2024-10-05'
  }
];

export const getTestimonialsByService = (serviceId) => {
  return testimonials.filter(testimonial => testimonial.service === serviceId);
};

export const getFeaturedTestimonials = (limit = 3) => {
  return testimonials.slice(0, limit);
};

export const getRecentTestimonials = (limit = 5) => {
  return testimonials
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};