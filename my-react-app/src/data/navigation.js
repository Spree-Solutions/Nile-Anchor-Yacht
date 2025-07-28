export const navigationItems = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    isActive: true
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about',
    isActive: false
  },
  {
    id: 'yachts',
    label: 'Yachts Collection',
    href: '/#yachts-collection',
    isActive: false,
    isHashLink: true
  },
  {
    id: 'gallery',
    label: 'Gallery',
    href: '/#gallery',
    isActive: false,
    isHashLink: true
  },
  {
    id: 'services',
    label: 'Our Services',
    href: '/#our-services',
    isActive: false,
    isHashLink: true,
    subItems: [
      {
        id: 'weddings',
        label: 'Weddings',
        href: '/services/weddings',
        icon: '💒'
      },
      {
        id: 'business',
        label: 'Business Events',
        href: '/services/business-events',
        icon: '💼'
      },
      {
        id: 'gatherings',
        label: 'Gatherings & Parties',
        href: '/services/gatherings-parties',
        icon: '🎉'
      }
    ]
  },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '/contact',
    isActive: false
  }
];

export const footerNavigation = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' }
  ],
  yachts: [
    { label: 'BELLA', href: '/yachts/bella' },
    { label: 'ZEIN', href: '/yachts/zein' },
    { label: 'VIDA', href: '/yachts/vida' },
    { label: 'LIBERTY', href: '/yachts/liberty' }
  ],
  contact: {
    hours: 'Mon - Fri, 9.00am until 6.30pm',
    address: {
      street: 'Nile view club, Dokki',
      city: 'Giza',
      country: 'Egypt'
    },
    email: 'reservation@thenileanchor.com',
    phone: '+20 121 114 0222',
    whatsapp: '+20 121 114 0222'
  }
};

export const socialLinks = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://facebook.com/nileanchor',
    icon: 'facebook',
    color: '#1877F2'
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/nileanchor',
    icon: 'twitter',
    color: '#1DA1F2'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/nileanchor',
    icon: 'instagram',
    color: '#E4405F'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/nileanchor',
    icon: 'linkedin',
    color: '#0A66C2'
  }
];